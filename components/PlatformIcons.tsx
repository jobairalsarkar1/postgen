"use client";

import { clsx } from "clsx";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

// Theme-matching platform definitions
const platforms = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    color: "bg-blue-600",
    description: "Professional networking",
  },
  {
    name: "Twitter/X",
    icon: Twitter,
    color: "bg-black",
    description: "Microblogging platform",
  },
  {
    name: "Reddit",
    icon: Facebook,
    color: "bg-orange-600",
    description: "Community discussions",
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "bg-blue-800",
    description: "Social networking",
  },
  {
    name: "Instagram",
    icon: Instagram,
    color: "bg-pink-600",
    description: "Photo sharing",
  },
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
  if (variant === "marquee") {
    return (
      <div className={clsx("relative w-full overflow-hidden", className)}>
        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee animation container */}
        <div className="flex animate-marquee">
          {[...platforms, ...platforms].map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div key={index} className="flex-shrink-0 mx-4">
                <div
                  className={clsx(
                    "w-10 h-10 rounded-lg flex items-center justify-center text-white backdrop-blur-sm bg-white/10 border border-white/20",
                    platform.color
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
                "w-10 h-10 rounded-lg flex items-center justify-center text-white",
                platform.color
              )}
            >
              <Icon className="w-5 h-5" />
            </div>
            {showLabels && (
              <div className="text-center">
                <p className="text-sm font-medium">{platform.name}</p>
                <p className="text-xs text-muted-foreground">
                  {platform.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
