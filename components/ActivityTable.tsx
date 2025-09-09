"use client";

import React from "react";
import useSWR from "swr";
import { useUserStore } from "@/stores/userStore";
import { ActivityIcon } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface Campaign {
  $id: string;
  prompt: string;
  platform: string; // single string
  status: string;
  userId: string;
  $createdAt: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ActivityTable: React.FC = () => {
  const user = useUserStore((state) => state.user);

  const { data, error } = useSWR(
    user?.id ? `/api/campaigns/recent?userId=${user.id}` : null,
    fetcher,
    { refreshInterval: 5000 }
  );

  const campaigns: Campaign[] = data?.campaigns || [];

  if (!user) return null;

  return (
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

      {/* Table */}
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
                Platform
              </th>
              <th className="w-28 px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-300 rounded-tr-xl">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {error && (
              <tr>
                <td colSpan={5} className="px-3 py-2 text-sm text-red-500">
                  Failed to load activity
                </td>
              </tr>
            )}
            {!error && campaigns.length === 0 && (
              <tr>
                <td colSpan={5} className="px-3 py-2 text-sm text-gray-400">
                  No activity found
                </td>
              </tr>
            )}
            {campaigns.map((campaign, i) => (
              <tr
                key={campaign.$id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {/* Row number */}
                <td className="px-3 py-2.5 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {i + 1}
                </td>

                {/* Prompt */}
                <td className="px-3 py-2.5 text-sm text-gray-900 dark:text-gray-100 truncate max-w-[250px] whitespace-nowrap overflow-hidden">
                  {campaign.prompt}
                </td>

                {/* Date */}
                <td className="px-3 py-2.5 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {formatDistanceToNow(new Date(campaign.$createdAt), {
                    addSuffix: true,
                  })}
                </td>

                {/* Platform */}
                <td className="px-3 py-2.5 whitespace-nowrap">
                  <span
                    className="px-2 py-1 text-xs rounded-full font-semibold 
                  bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {campaign.platform}
                  </span>
                </td>

                {/* Status */}
                <td className="px-3 py-2.5 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-semibold ${
                      campaign.status === "Completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : campaign.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }`}
                  >
                    {campaign.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityTable;
