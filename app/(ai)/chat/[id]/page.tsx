"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Copy, Loader2, SendHorizonal } from "lucide-react";
import clsx from "clsx";
import useSWR from "swr";
import { useParams } from "next/navigation";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import axios from "axios";
import { CampaignResponse } from "@/lib/types";
import ChatSkeletonLoader from "@/components/ChatSkeletonLoader";

const supportedPlatforms = [
  { name: "LinkedIn", icon: "/linkedin.png" },
  { name: "Twitter", icon: "/twitter.png" },
  { name: "Reddit", icon: "/reddit.png" },
  { name: "Facebook", icon: "/facebook.png" },
];

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Page = () => {
  const authenticated = useAuthGuard({ requireAuth: true });
  const { id } = useParams();

  const { data, mutate } = useSWR<CampaignResponse>(
    `/api/campaigns/${id}`,
    fetcher,
    {
      refreshInterval: 3000,
    }
  );

  const [prompt, setPrompt] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);

  // Auto-trigger Post generation for initial AI message
  useEffect(() => {
    const generateInitialAI = async () => {
      if (
        !data?.campaign ||
        !data?.aiMessage ||
        data.aiMessage.status !== "pending"
      )
        return;

      setGenerating(true);

      try {
        await axios.post("/api/generate", {
          campaignId: data.campaign.$id,
          aiMessageId: data.aiMessage.$id,
          prompt: data.campaign.prompt,
          platform: data.campaign.platform,
        });
        mutate(); // refresh messages
      } catch (err) {
        console.error("Error generating AI post:", err);
      } finally {
        setGenerating(false);
      }
    };

    generateInitialAI();
  }, [data, mutate]);

  const handleSubmit = async () => {
    if (!prompt.trim() || !selectedPlatform) return;
    if (!data?.campaign) return;

    setGenerating(true);
    try {
      // Add user message
      // const userMessageRes =
      await axios.post("/api/messages", {
        campaignId: data.campaign.$id,
        role: "user",
        content: prompt,
        status: "complete",
      });
      // const userMessage = userMessageRes.data;

      // AI placeholder
      const aiMessageRes = await axios.post("/api/messages", {
        campaignId: data.campaign.$id,
        role: "ai",
        content: "Generating...",
        status: "pending",
      });
      const aiMessage = aiMessageRes.data;

      // Generate Post
      await axios.post("/api/generate", {
        campaignId: data.campaign.$id,
        aiMessageId: aiMessage.$id,
        prompt,
        platform: selectedPlatform,
      });

      setPrompt("");
      mutate();
    } catch (err) {
      console.error("Error sending follow-up prompt:", err);
    } finally {
      setGenerating(false);
    }
  };

  if (!authenticated) return null;
  if (!data) return <ChatSkeletonLoader />;

  return (
    <div className="flex flex-col h-full max-h-screen">
      {/* Chat Area */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {data.messages.map((msg) => {
            const isAIComplete = msg.role === "ai" && msg.status !== "pending";

            return (
              <div
                key={msg.$id}
                className="flex w-full mb-4"
                style={{
                  justifyContent:
                    msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  className={clsx(
                    "rounded-xl relative",
                    msg.role === "user"
                      ? "px-4 py-3 bg-blue-100 dark:bg-blue-900 text-right text-gray-800 dark:text-gray-200 inline-block max-w-xl"
                      : msg.role === "ai"
                      ? msg.status === "pending"
                        ? "px-6 py-4.5 bg-white/80 dark:bg-gray-800 text-left text-gray-800 dark:text-gray-200 inline-block max-w-max"
                        : "px-6 py-4.5 bg-white/80 dark:bg-gray-800 text-left text-gray-800 dark:text-gray-200 w-full md:max-w-full"
                      : ""
                  )}
                >
                  {isAIComplete && (
                    <button
                      onClick={() => navigator.clipboard.writeText(msg.content)}
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 cursor-copy"
                    >
                      <Copy size={16} />
                    </button>
                  )}

                  {msg.role === "ai" && msg.status === "pending"
                    ? "Generating your post..."
                    : msg.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Prompt Box */}
      <div className="w-full flex justify-center pb-6 px-4 z-10">
        <div className="w-full max-w-4xl bg-white/80 dark:bg-gray-950/50 backdrop-blur-md rounded-xl shadow-xl p-4 border border-gray-200 dark:border-blue-900 flex flex-col gap-4">
          <textarea
            rows={4}
            placeholder="Enter a prompt to modify or add to your post..."
            className="w-full resize-none bg-transparent text-base placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={generating}
          />

          {/* Bottom section */}
          <div className="flex justify-between items-center flex-wrap gap-3">
            <div className="flex gap-3 flex-wrap">
              {supportedPlatforms.map((platform) => (
                <button
                  key={platform.name}
                  onClick={() => setSelectedPlatform(platform.name)}
                  className={clsx(
                    "w-10 h-10 rounded-lg p-1 transition hover:scale-105 bg-white dark:bg-gray-800 shadow",
                    selectedPlatform === platform.name
                      ? "ring-2 ring-blue-500"
                      : "opacity-70"
                  )}
                  disabled={generating}
                >
                  <Image
                    src={platform.icon}
                    alt={platform.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </button>
              ))}
            </div>

            {/* Send button */}
            <button
              onClick={handleSubmit}
              disabled={!prompt.trim() || !selectedPlatform || generating}
              className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {generating ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin " />
                  <span className="text-sm hidden sm:block">Generating...</span>
                </div>
              ) : (
                <SendHorizonal className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
