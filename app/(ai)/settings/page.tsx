"use client";

import React, { useState } from "react";
import { User, Save } from "lucide-react";
import clsx from "clsx";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { useUserStore } from "@/stores/userStore";
import AccountDangerZone from "@/components/AccountDangerZone";
import ActivityTable from "@/components/ActivityTable";

const tabs = ["Profile Settings", "Activity", "Account"];

export default function SettingsPage() {
  const authenticated = useAuthGuard({ requireAuth: true });
  const user = useUserStore((state) => state.user);
  const [activeTab, setActiveTab] = useState("Profile Settings");

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
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl shadow-sm dark:shadow-lg p-4 sm:p-6 border border-white/20 dark:border-gray-700/30 overflow-hidden">
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
                    value={user?.email}
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
                    value={user?.name}
                    disabled
                    className="w-full px-4 py-3 rounded-lg bg-gray-100/70 dark:bg-gray-800/70 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 cursor-not-allowed transition-colors"
                  />
                </div>

                <button
                  disabled
                  className="px-6 py-2.5 bg-gray-400 text-white rounded-lg flex items-center gap-2 shadow-md cursor-not-allowed opacity-70"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "Activity" && <ActivityTable />}

          {activeTab === "Account" && <AccountDangerZone />}
        </div>
      </div>
    </div>
  );
}
