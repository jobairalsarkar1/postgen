"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Globe,
  Hash,
  Loader2,
  MessageCircle,
  Rocket,
  SendHorizonal,
} from "lucide-react";
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

const cards = [
  {
    icon: <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    title: "Multi-Platform",
    description: "Tailored content for each social platform.",
  },
  {
    icon: <Hash className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    title: "Hashtag Boost",
    description: "Smart hashtag suggestions.",
  },
  {
    icon: <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    title: "Fast Results",
    description: "Generate posts instantly.",
  },
  {
    icon: (
      <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    ),
    title: "Engagement Focused",
    description: "Optimized for interaction.",
  },
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
    <div className="flex flex-col h-screen">
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 flex justify-center items-center">
        <div className="w-full px-0 sm:px-10 max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="aspect-square p-3 flex flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-950/50 dark:to-gray-900/50 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-sm transition-all hover:shadow-md"
            >
              <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-800/40">
                {card.icon}
              </div>
              <h4 className="text-xs font-semibold text-gray-800 dark:text-gray-200 text-center">
                {card.title}
              </h4>
              <p className="text-xs text-gray-600/80 dark:text-gray-300/80 text-center leading-tight px-1">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Prompt Box at Bottom */}
      <div className="w-full px-4 pb-6 flex justify-center">
        <div className="w-full max-w-4xl bg-white/80 dark:bg-gray-950/50 backdrop-blur-md rounded-xl shadow-xl p-4 border border-gray-200 dark:border-blue-900 flex flex-col gap-4">
          <textarea
            rows={4}
            placeholder="Enter your prompt to generate social media posts..."
            className="w-full resize-none bg-transparent text-base placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
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

            <button
              onClick={handleSubmit}
              disabled={!prompt.trim() || !selectedPlatform || loading}
              className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
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
