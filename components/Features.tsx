"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import CustomBadge from "./CustomBadge";
import SectionHeading from "./SectionHeading";
import { features } from "@/lib/constants";

const Features = () => {
  return (
    <div className="pt-24 pb-10 bg-white dark:bg-[#0e0e10] relative overflow-hidden">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto px-4 lg:px-12 xl:px-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 
             border border-gray-200/30 dark:border-white/10 
             hover:border-blue-400/50 dark:hover:border-blue-500/50
             transition-all duration-500 overflow-hidden"
            >
              {/* Directional Glow on Hover */}
              <div
                className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full 
                  bg-gradient-to-br from-blue-400/40 to-cyan-400/40 
                  blur-3xl opacity-0 group-hover:opacity-100 
                  transition-opacity duration-500 pointer-events-none"
              />

              <div
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 
                  flex items-center justify-center mb-6 
                  group-hover:scale-110 transition-transform duration-300 
                  shadow-[0_0_15px_rgba(59,130,246,0.25)] relative z-10"
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 relative z-10">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm relative z-10">
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
