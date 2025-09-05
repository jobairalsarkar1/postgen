"use client";

import React from "react";
import { PlatformIcons } from "./PlatformIcons";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import DisplayUI from "./DisplayUI";

const HeroSection = () => {
  return (
    <section className="pt-20 relative min-h-screen px-4 sm:px-4 md:px-6 overflow-hidden bg-white dark:bg-[#0e0e10] text-gray-900 dark:text-white">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-transparent to-cyan-100/10 dark:from-blue-900/20 dark:via-transparent dark:to-cyan-900/20" />

      {/* Circuit Pattern */}
      <div className="absolute inset-0 opacity-30 text-blue-400 dark:text-cyan-400 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] dark:drop-shadow-[0_0_12px_rgba(16,185,129,0.8)]">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="10"
                cy="10"
                r="2"
                fill="currentColor"
                className="opacity-40"
              />
              <circle
                cx="110"
                cy="110"
                r="2"
                fill="currentColor"
                className="opacity-40"
              />
              <path
                d="M10 10h40v40h40"
                stroke="currentColor"
                strokeWidth="1"
                className="opacity-30"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-36 h-36 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-blue-700/30 dark:to-cyan-700/30 blur-3xl animate-pulse" />
      <div className="absolute top-40 right-20 w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 dark:from-cyan-700/30 dark:to-blue-700/30 blur-2xl animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 dark:from-blue-800/40 dark:to-cyan-800/40 blur-xl animate-pulse delay-500" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Hero Content */}
      <div className="relative container mx-auto px-6 sm:px-8 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Text & CTAs */}
        <div className="text-center lg:text-left lg:pl-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Generate Amazing{" "}
            <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Social Media Posts
            </span>{" "}
            with AI
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
            Create engaging content for LinkedIn, Twitter, Reddit, and more in
            seconds. Let AI craft your voice while you focus on growing your
            audience.
          </p>
          <Link href="/dashboard">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-semibold text-lg px-8 py-2.5 rounded-lg shadow-lg transition duration-300 flex items-center cursor-pointer mx-auto lg:mx-0">
              Start Generating
              <MoveRight className="ml-2 w-5 h-5" />
            </button>
          </Link>

          {/* Platform Icons */}
          <div className="pt-10 lg:pt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Supported Platforms
            </p>
            <PlatformIcons
              variant="marquee"
              className="max-w-sm mx-auto lg:mx-0"
            />
          </div>
        </div>

        {/* Display Placeholder */}
        <DisplayUI />
      </div>
    </section>
  );
};

export default HeroSection;
