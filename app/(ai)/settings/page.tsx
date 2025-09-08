"use client";

import React, { useState } from "react";
import {
  Trash2,
  User,
  Activity as ActivityIcon,
  Save,
  AlertCircle,
} from "lucide-react";
import clsx from "clsx";
import { useAuthGuard } from "@/hooks/useAuthGuard";

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
  const authenticated = useAuthGuard({ requireAuth: true });
  const [activeTab, setActiveTab] = useState("Profile Settings");
  const [name, setName] = useState("Jobair AL Sarkar");

  if (!authenticated) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 px-4 py-8 sm:px-6 sm:py-10">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="inline-flex max-w-full overflow-x-auto gap-1 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-1.5 shadow-sm scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  "whitespace-nowrap px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl shadow-xl p-4 sm:p-6 border border-white/20 dark:border-gray-700/30">
          {activeTab === "Profile Settings" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Profile Information
                </h2>
              </div>

              <div className="space-y-5 max-w-2xl">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value="jobair@example.com"
                    disabled
                    className="w-full px-4 py-3 rounded-lg bg-gray-100/70 dark:bg-gray-800/70 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 cursor-not-allowed transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/70 dark:bg-gray-950/70 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>

                <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg">
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "Activity" && (
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <ActivityIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Recent Activity
                </h2>
              </div>

              {/* Table Format */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800 text-left">
                      <th className="w-12 px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-300 rounded-tl-xl">
                        No.
                      </th>
                      <th className="w-[45%] px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                        Prompt
                      </th>
                      <th className="w-32 px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                        Date
                      </th>
                      <th className="w-[20%] px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                        Platforms
                      </th>
                      <th className="w-28 px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-300 rounded-tr-xl">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {activityData.map((activity, i) => (
                      <tr
                        key={i}
                        className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        {/* Row number */}
                        <td className="px-3 py-2.5 text-sm font-medium text-gray-900 dark:text-gray-100">
                          {i + 1}
                        </td>

                        {/* Prompt */}
                        <td className="px-3 py-2.5 text-sm text-gray-900 dark:text-gray-100 truncate">
                          {activity.prompt}
                        </td>

                        {/* Date */}
                        <td className="px-3 py-2.5 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                          {activity.date}
                        </td>

                        {/* Platforms */}
                        <td className="px-3 py-2.5 whitespace-nowrap">
                          <div className="flex flex-wrap gap-1">
                            {activity.platforms.map((p, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 text-xs rounded-full font-semibold 
                        bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                              >
                                {p}
                              </span>
                            ))}
                          </div>
                        </td>

                        {/* Status */}
                        <td className="px-3 py-2.5 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 text-xs rounded-full font-semibold ${
                              activity.status === "Completed"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : activity.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                            }`}
                          >
                            {activity.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "Account" && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <h2 className="text-xl font-semibold text-red-700 dark:text-red-300">
                  Danger Zone
                </h2>
              </div>

              <div className="bg-red-50/80 dark:bg-red-950/20 border border-red-300/70 dark:border-red-700/50 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="font-semibold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2">
                  <Trash2 className="w-4 h-4" />
                  Delete Account
                </h3>
                <p className="text-sm text-red-600/90 dark:text-red-400/90 mb-5">
                  Deleting your account is permanent and cannot be undone. All
                  data will be lost.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg">
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
