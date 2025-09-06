"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveLeft, SquareSquare } from "lucide-react";

const SignInPage = () => {
  const handleSocialLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`);
    // Integrate with next-auth or similar here
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 bg-gradient-to-br from-white to-blue-50/50 dark:from-[#0e0e10] dark:to-blue-900/20">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-transparent to-cyan-100/10 dark:from-blue-900/20 dark:via-transparent dark:to-cyan-900/20" />

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-36 h-36 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-blue-700/30 dark:to-cyan-700/30 blur-3xl animate-pulse" />
      <div className="absolute top-40 right-20 w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 dark:from-cyan-700/30 dark:to-blue-700/30 blur-2xl animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 dark:from-blue-800/40 dark:to-cyan-800/40 blur-xl animate-pulse delay-500" />

      <div className="w-full max-w-md z-10">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 mb-6 transition-colors"
        >
          <MoveLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <div className="bg-white/80 dark:bg-[#0e0e10]/90 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 space-y-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
                  <SquareSquare className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Welcome to&nbsp;
                  <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                    PostGen AI
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Sign in to continue and start generating amazing social media
                  content
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => handleSocialLogin("Google")}
                className="w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg py-3 px-4 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm cursor-pointer"
              >
                <div className="relative w-5 h-5">
                  <Image
                    src="/google.png"
                    alt="Google"
                    fill
                    className="object-contain"
                  />
                </div>
                Continue with Google
              </button>

              <button
                onClick={() => handleSocialLogin("GitHub")}
                className="w-full flex items-center justify-center gap-3 bg-gray-900 border border-gray-900 rounded-lg py-3 px-4 text-white font-medium hover:bg-gray-800 transition-all duration-300 shadow-sm cursor-pointer"
              >
                <div className="relative w-5 h-5">
                  <Image
                    src="/github.png"
                    alt="GitHub"
                    fill
                    className="object-contain"
                  />
                </div>
                Continue with GitHub
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-700" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white/80 dark:bg-[#0e0e10]/90 px-2 text-gray-500 dark:text-gray-400">
                    Secure & Fast Login
                  </span>
                </div>
              </div>

              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                By continuing, you agree to our{" "}
                <a
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm">
          <Link
            href="/contact"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Having issues? Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
