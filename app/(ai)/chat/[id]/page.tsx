"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SendHorizonal } from "lucide-react";
import clsx from "clsx";
import useSWR from "swr";
import { useParams } from "next/navigation";
import { useAuthGuard } from "@/hooks/useAuthGuard";

const supportedPlatforms = [
  { name: "LinkedIn", icon: "/linkedin.png" },
  { name: "Twitter", icon: "/twitter.png" },
  { name: "Reddit", icon: "/reddit.png" },
  { name: "Facebook", icon: "/facebook.png" },
];

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Page = () => {
  const authenticated = useAuthGuard({ requireAuth: true });
  const { id } = useParams(); // campaignId

  const { data, mutate } = useSWR(`/api/campaigns/${id}`, fetcher, {
    refreshInterval: 3000, // poll messages every 3s
  });

  const [prompt, setPrompt] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);

  // Auto-trigger HuggingFace generation for initial AI message
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
        await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            campaignId: data.campaign.$id,
            aiMessageId: data.aiMessage.$id,
            prompt: data.campaign.prompt,
            platform: data.campaign.platform,
          }),
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
      // 1. Add user message
      const userMessageRes = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          campaignId: data.campaign.$id,
          role: "user",
          content: prompt,
          status: "complete",
        }),
      });
      const userMessage = await userMessageRes.json();

      // 2. Add AI placeholder
      const aiMessageRes = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          campaignId: data.campaign.$id,
          role: "ai",
          content: "Generating...",
          status: "pending",
        }),
      });
      const aiMessage = await aiMessageRes.json();

      // 3. Call HuggingFace to generate post
      await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          campaignId: data.campaign.$id,
          aiMessageId: aiMessage.$id,
          prompt,
          platform: selectedPlatform,
        }),
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
  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex flex-col h-full max-h-screen">
      {/* Chat Area */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {data.messages.map((msg: any) => (
            <div
              key={msg.$id}
              className={clsx(
                "px-4 py-3 rounded-xl",
                msg.role === "user"
                  ? "ml-auto max-w-xl bg-blue-100 dark:bg-blue-900 text-right text-gray-800 dark:text-gray-200"
                  : "mr-auto max-w-full bg-gray-100 dark:bg-gray-800 text-left text-gray-800 dark:text-gray-200"
              )}
            >
              {msg.role === "ai" && msg.status === "pending"
                ? "✨ Generating your post..."
                : msg.content}
            </div>
          ))}
        </div>
      </div>

      {/* Prompt Box */}
      <div className="w-full flex justify-center pb-6 px-4 z-10">
        <div className="w-full max-w-4xl bg-white/80 dark:bg-gray-950/50 backdrop-blur-md rounded-xl shadow-xl p-4 border border-gray-200 dark:border-blue-900 flex flex-col gap-4">
          {/* Prompt Input */}
          <textarea
            rows={4}
            placeholder="Enter a prompt to modify or add to your post..."
            className="w-full resize-none bg-transparent text-base placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={generating} // disable typing if generating (optional)
          />

          {/* Bottom section */}
          <div className="flex justify-between items-center flex-wrap gap-3">
            {/* Platforms */}
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
                  disabled={generating} // disable selection while generating
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
                <span className="text-sm">Generating...</span>
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
