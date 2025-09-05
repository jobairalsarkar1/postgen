"use client";

import React from "react";
import { PlatformIcons } from "./PlatformIcons";
import {
  FileText,
  LayoutDashboard,
  MoveRight,
  Settings,
  SquareSquare,
} from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-20 relative min-h-screen px-4 sm:px-4 md:px-6 overflow-hidden bg-white dark:bg-[#0e0e10] text-gray-900 dark:text-white">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-transparent to-cyan-100/10 dark:from-blue-900/20 dark:via-transparent dark:to-cyan-900/20" />

      {/* Circuit Pattern with Glow */}
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
        {/* Left: Text & CTAs */}
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
              Start Creating
              <MoveRight className="ml-2 w-5 h-5" />
            </button>
          </Link>

          {/* Platform Icons */}
          <div className="pt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Supported Platforms
            </p>
            <PlatformIcons
              variant="marquee"
              className="max-w-sm mx-auto lg:mx-0"
            />
          </div>
        </div>

        {/* Right: Display Placeholder */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Glowing Base */}
          <div className="absolute -bottom-[30px] left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[700px] h-[300px] rounded-full dark-glow animate-pulse-soft z-0" />
          {/* Display UI */}
          <div className="relative w-[620px] aspect-[16/9] bg-gray-900 border-8 border-gray-700 rounded-2xl shadow-2xl text-white text-xs transform scale-[0.95] origin-top z-10 hover:scale-[1] transition-transform duration-500 ease-out">
            <div className="h-full grid grid-cols-12 z-20">
              {/* Sidebar */}
              <aside className="col-span-3 bg-gray-800 flex flex-col justify-between p-3">
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
                    <div className="w-3 h-3 sm:w-5 sm:h-5 bg-gradient-to-tr from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                      <SquareSquare className="w-2 h-2 text-white" />
                    </div>
                    <span className="text-[9px] sm:text-sm tracking-tight font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                      PostGen AI
                    </span>
                  </div>
                  <nav className="space-y-2 text-gray-300 text-[8px] sm:text-[11px]">
                    <div className="flex items-center space-x-1 hover:text-white cursor-pointer">
                      <span>
                        <LayoutDashboard className="w-2 h-2 sm:w-3 sm:h-3 text-blue-400" />
                      </span>
                      <span>Dashboard</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-white cursor-pointer">
                      <span>
                        <FileText className="w-2 h-2 sm:w-3 sm:h-3 text-blue-400" />
                      </span>
                      <span>My Posts</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-white cursor-pointer">
                      <span>
                        <Settings className="w-2 h-2 sm:w-3 sm:h-3 text-blue-400" />
                      </span>
                      <span>Settings</span>
                    </div>
                  </nav>
                </div>

                {/* User Info */}
                <div className="mt-4 bg-gray-700 rounded-lg p-2 flex items-center space-x-2 text-[9px]">
                  <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center font-bold text-white text-[8px]">
                    AJ
                  </div>
                  <div>
                    <div className="font-semibold text-white leading-tight">
                      Alex J.
                    </div>
                    <div className="text-gray-300 text-[8px]">
                      Product Designer
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Area */}
              <main className="col-span-9 flex flex-col h-full">
                {/* Header */}
                <header className="px-3 py-2 bg-gray-850 border-b border-gray-700 text-[10px] flex justify-between items-center">
                  <div className="font-semibold">Create Post</div>
                  <div className="text-gray-400">LinkedIn</div>
                </header>

                {/* Content Area */}
                <div className="flex-1 px-3 py-2 space-y-2 bg-gray-850 overflow-hidden">
                  {/* Prompt */}
                  <div className="bg-gray-700 rounded p-2">
                    <div className="text-gray-400 text-[9px] mb-1">Prompt</div>
                    <p className="text-[10px]">
                      "Announce new role as Data Scientist at Google."
                    </p>
                  </div>

                  {/* Generated Post */}
                  <div className="bg-gray-800 rounded p-2 border border-gray-700 text-[10px]">
                    <div className="text-gray-400 text-[9px] mb-1">
                      Generated
                    </div>
                    <p className="leading-tight">
                      Thrilled to join{" "}
                      <span className="text-blue-400">@Google</span> as a Data
                      Scientist!
                      <br />
                      Excited for what’s ahead. #Google #NewRole
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <footer className="px-3 py-2 bg-gray-850 border-t border-gray-700">
                  <form className="flex items-center bg-gray-800 border border-gray-700 rounded px-2 py-1 space-x-2">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Type prompt..."
                      className="flex-1 bg-transparent placeholder-gray-400 text-white text-[10px] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-2 py-1 bg-indigo-600 hover:bg-indigo-700 text-[9px] rounded font-medium"
                    >
                      Generate
                    </button>
                  </form>
                </footer>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
