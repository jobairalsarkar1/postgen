"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SendHorizonal } from "lucide-react";
import clsx from "clsx";

const supportedPlatforms = [
  { name: "LinkedIn", icon: "/linkedin.png" },
  { name: "Twitter", icon: "/twitter.png" },
  { name: "Reddit", icon: "/reddit.png" },
  { name: "Facebook", icon: "/facebook.png" },
];

// type Message = {
//   role: "user" | "ai";
//   content: string;
// };

const Page = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [prompt, setPrompt] = useState("");
  // const [messages, setMessages] = useState<Message[]>([]);

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  const handleSubmit = () => {
    if (!prompt.trim() || selectedPlatforms.length === 0) return;

    // Sample logic for later:
    // const newMessages: Message[] = [
    //   ...messages,
    //   { role: "user", content: prompt },
    //   { role: "ai", content: "Generating..." },
    // ];
    // setMessages(newMessages);
    // setPrompt("");
  };

  return (
    <div className="flex flex-col h-full max-h-screen">
      {/* Chat Area */}
      <div className="flex-1 p-6 overflow-y-auto space-y-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Static Example Messages */}
          <div className="max-w-md ml-auto bg-blue-100 dark:bg-blue-900 text-right px-4 py-3 rounded-xl">
            <p className="text-sm text-gray-800 dark:text-gray-200">
              Write a social media post announcing our new product launch next
              week.
            </p>
          </div>
          <div className="max-w-md mr-auto bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-xl mt-4">
            <p className="text-sm text-gray-800 dark:text-gray-200">
              🚀 Exciting news! We’re launching our new product next week – stay
              tuned for the reveal. 🎉 #LaunchAlert #ComingSoon
            </p>
          </div>
          {/* Static Example Messages */}
          <div className="max-w-md ml-auto bg-blue-100 dark:bg-blue-900 text-right px-4 py-3 rounded-xl">
            <p className="text-sm text-gray-800 dark:text-gray-200">
              Write a social media post announcing our new product launch next
              week.
            </p>
          </div>
          <div className="max-w-md mr-auto bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-xl mt-4">
            <p className="text-sm text-gray-800 dark:text-gray-200">
              🚀 Exciting news! We’re launching our new product next week – stay
              tuned for the reveal. 🎉 #LaunchAlert #ComingSoon
            </p>
          </div>
        </div>
      </div>

      {/* Prompt Box */}
      <div className="w-full flex justify-center pb-6 px-4">
        <div className="w-full max-w-4xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-md rounded-xl shadow-xl p-4 md:p-6 border border-gray-200 dark:border-gray-800 flex flex-col gap-4">
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
                  onClick={() => togglePlatform(platform.name)}
                  className={clsx(
                    "w-10 h-10 rounded-lg p-1 transition hover:scale-105 bg-white dark:bg-gray-800 shadow",
                    selectedPlatforms.includes(platform.name)
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
              disabled={!prompt.trim() || selectedPlatforms.length === 0}
              className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <SendHorizonal className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
