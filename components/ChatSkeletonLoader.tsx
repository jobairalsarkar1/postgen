import React from "react";
import clsx from "clsx";

const ChatSkeletonLoader = () => {
  return (
    <div className="flex flex-col h-full max-h-screen">
      {/* Chat Area */}
      <div className="flex-1 p-6 overflow-y-auto flex flex-col justify-end gap-4">
        <div className="max-w-4xl mx-auto w-full space-y-4 animate-pulse">
          {[...Array(6)].map((_, i) => {
            const isUser = i % 2 === 0;
            const lines = isUser ? 1 : 3;

            return (
              <div
                key={i}
                className={`flex w-full ${
                  isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={clsx(
                    "rounded-xl px-4 py-3",
                    isUser
                      ? "bg-blue-100 dark:bg-blue-900 text-right max-w-xl w-fit"
                      : "bg-white/80 dark:bg-gray-800 text-left w-full md:max-w-full"
                  )}
                >
                  {[...Array(lines)].map((_, idx) => (
                    <div
                      key={idx}
                      className={clsx(
                        "h-4 rounded mb-2 last:mb-0",
                        isUser
                          ? "bg-blue-200 dark:bg-blue-700 w-3/4"
                          : "bg-gray-300 dark:bg-gray-700 w-full"
                      )}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Prompt Box Skeleton */}
      <div className="w-full flex justify-center pb-6 px-4 z-10">
        <div className="w-full max-w-4xl bg-white/80 dark:bg-gray-950/50 backdrop-blur-md rounded-xl shadow-xl p-4 border border-gray-200 dark:border-blue-900 flex flex-col gap-4 animate-pulse">
          <div className="h-20 rounded-lg bg-gray-200 dark:bg-gray-800" />
          <div className="flex justify-between items-center gap-3">
            <div className="flex gap-3">
              {[...Array(4)].map((_, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800"
                />
              ))}
            </div>
            <div className="w-20 h-10 rounded-lg bg-blue-200 dark:bg-blue-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSkeletonLoader;
