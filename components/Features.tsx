"use client";

import React from "react";
import { Sparkles, FileText, Hash, Globe } from "lucide-react";
import CustomBadge from "./CustomBadge";
import SectionHeading from "./SectionHeading";

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Content",
      description:
        "Generate engaging social media posts using advanced AI algorithms tailored to your brand voice.",
    },
    {
      icon: Globe,
      title: "Platform Adaptability",
      description:
        "Generate content optimized for different social platforms from a single input.",
    },
    {
      icon: FileText,
      title: "Multiple Formats",
      description:
        "Create posts for different purposes - promotional, educational, entertaining, and more.",
    },
    {
      icon: Hash,
      title: "Hashtag Suggestions",
      description:
        "Get relevant hashtag recommendations to increase your post's visibility and reach.",
    },
  ];

  return (
    <div className="pt-24 bg-white dark:bg-[#0e0e10] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-20 right-10 w-48 h-48 rounded-full bg-gradient-to-br from-blue-400/10 to-cyan-400/10 dark:from-blue-700/20 dark:to-cyan-700/20 blur-3xl" />
      <div className="absolute bottom-40 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-400/10 dark:from-cyan-700/20 dark:to-blue-700/20 blur-2xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <CustomBadge icon={Sparkles} text="Features" />
          <SectionHeading
            title="Powerful AI Content"
            highlight="Generation"
            description="Create engaging social media content in seconds with our specialized AI technology."
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto px-4 lg:px-12 xl:px-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-gray-200/30 dark:border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
