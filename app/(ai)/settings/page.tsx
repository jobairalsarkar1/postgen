"use client";

import React, { useState } from "react";
import { Trash2, Calendar, User, Activity as ActivityIcon } from "lucide-react";
import clsx from "clsx";

const tabs = ["Profile Settings", "Activity", "Account"];

const activityData = [
  {
    date: "2025-09-06",
    prompt: "Generated post for LinkedIn",
    platforms: ["LinkedIn", "Twitter"],
    status: "Generated",
  },
  {
    date: "2025-09-05",
    prompt: "Launch announcement post",
    platforms: ["Facebook"],
    status: "Generated",
  },
  {
    date: "2025-09-04",
    prompt: "AI industry insights",
    platforms: ["Reddit"],
    status: "Generated",
  },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile Settings");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 px-6 py-10">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        {/* Tabs */}
        <div className="mb-8">
          <div className="inline-flex max-w-full overflow-x-auto gap-2 rounded-lg bg-white dark:bg-gray-800 px-2 py-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  "whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeTab === tab
                    ? "bg-blue-600 text-white border-blue-600 shadow"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 sm:p-8">
          {activeTab === "Profile Settings" && (
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  value="jobair@example.com"
                  disabled
                  className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 cursor-not-allowed"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  defaultValue="Jobair AL Sarkar"
                  className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Save Changes
              </button>
            </div>
          )}

          {activeTab === "Activity" && (
            <div>
              <h2 className="text-lg font-semibold mb-6 flex items-center gap-2 text-gray-800 dark:text-white">
                <ActivityIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Recent Activity
              </h2>

              <div className="space-y-4">
                {activityData.map((activity, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-gray-200/50 dark:border-white/10
          bg-white/70 dark:bg-white/5
          backdrop-blur-md shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      {/* Left Side: Prompt and Metadata */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-800 dark:text-white truncate">
                          {activity.prompt}
                        </h3>
                        <div className="mt-2 flex items-center gap-3 flex-wrap text-sm text-gray-600 dark:text-white/70">
                          <span className="text-xs">{activity.date}</span>

                          <div className="flex items-center gap-2 flex-wrap">
                            {activity.platforms.map((p, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-300/20 text-blue-800 dark:text-blue-100 text-xs font-medium border border-blue-200 dark:border-blue-300/30"
                              >
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Side: Status */}
                      <div className="shrink-0">
                        <span
                          className="inline-block px-3 py-1 text-xs font-semibold rounded-full 
                bg-green-100 dark:bg-green-300/20 
                text-green-700 dark:text-green-100 
                border border-green-300 dark:border-green-400/20
                backdrop-blur-sm"
                        >
                          {activity.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Account" && (
            <div>
              <h2 className="text-lg font-semibold text-red-600 mb-4">
                Danger Zone
              </h2>
              <div className="bg-red-50 dark:bg-red-950 border border-red-300 dark:border-red-700 p-6 rounded-lg">
                <h3 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                  Delete Account
                </h3>
                <p className="text-sm text-red-600 dark:text-red-400 mb-4">
                  Deleting your account is permanent and cannot be undone. All
                  data will be lost.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition">
                  <Trash2 className="w-4 h-4" />
                  Delete Account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
