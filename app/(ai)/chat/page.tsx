"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SendHorizonal } from "lucide-react";
import clsx from "clsx";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/userStore";
import axios from "axios";

const supportedPlatforms = [
  { name: "LinkedIn", icon: "/linkedin.png" },
  { name: "Twitter", icon: "/twitter.png" },
  { name: "Reddit", icon: "/reddit.png" },
  { name: "Facebook", icon: "/facebook.png" },
];

const Page = () => {
  const authenticated = useAuthGuard({ requireAuth: true });
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { user } = useUserStore();

  const handleSubmit = async () => {
    if (!prompt.trim() || !selectedPlatform || !user) return;

    try {
      setLoading(true);

      const res = await axios.post("/api/campaigns", {
        prompt,
        platform: selectedPlatform,
        userId: user.id,
      });

      router.push(`/chat/${res.data.campaignId}`);
    } catch (err) {
      console.error("Error submitting prompt:", err);
    } finally {
      setLoading(false);
    }
  };

  if (!authenticated) return null;

  return (
    <div className="flex flex-col h-full max-h-screen">
      {/* Chat Area - can be left empty here */}
      <div className="flex-1 p-6 overflow-y-auto space-y-8">
        <div className="max-w-4xl mx-auto text-center text-gray-500 dark:text-gray-400">
          <p className="text-lg">
            Start by entering a prompt and selecting a platform to generate your
            post ✨
          </p>
        </div>
      </div>

      {/* Prompt Box */}
      <div className="w-full flex justify-center pb-6 px-4 z-10">
        <div className="w-full max-w-4xl bg-white/80 dark:bg-gray-950/50 backdrop-blur-md rounded-xl shadow-xl p-4 border border-gray-200 dark:border-blue-900 flex flex-col gap-4">
          {/* Prompt Input */}
          <textarea
            rows={4}
            placeholder="Enter your prompt to generate social media posts..."
            className="w-full resize-none bg-transparent text-base placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
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
              disabled={!prompt.trim() || !selectedPlatform || loading}
              className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <span className="text-sm">Creating...</span>
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
