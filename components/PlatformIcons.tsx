"use client";

import { clsx } from "clsx";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const platforms = [
  { name: "LinkedIn", icon: Linkedin },
  { name: "Twitter/X", icon: Twitter },
  { name: "Facebook", icon: Facebook },
  { name: "Instagram", icon: Instagram },
];

interface PlatformIconsProps {
  className?: string;
  showLabels?: boolean;
  variant?: "static" | "marquee";
}

export function PlatformIcons({
  className,
  showLabels = false,
  variant = "static",
}: PlatformIconsProps) {
  const iconBgClass =
    "backdrop-blur-sm rounded-lg shadow-md transition-transform " +
    "bg-blue-200/40 border border-blue-500/50 text-blue-900 dark:bg-white/10 dark:border-white/20 dark:text-white";

  if (variant === "marquee") {
    return (
      <div className={clsx("relative w-full overflow-hidden", className)}>
        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {[...platforms, ...platforms].map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div key={index} className="flex-shrink-0 mx-4">
                <div
                  className={clsx(
                    "w-10 h-10 flex items-center justify-center",
                    iconBgClass
                  )}
                >
                  <Icon className="w-5 h-5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Static version
  return (
    <div
      className={clsx("flex items-center justify-center space-x-4", className)}
    >
      {platforms.map((platform) => {
        const Icon = platform.icon;
        return (
          <div
            key={platform.name}
            className="flex flex-col items-center space-y-2"
          >
            <div
              className={clsx(
                "w-10 h-10 flex items-center justify-center",
                iconBgClass
              )}
            >
              <Icon className="w-5 h-5" />
            </div>
            {showLabels && (
              <div className="text-center">
                <p className="text-sm font-medium">{platform.name}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
