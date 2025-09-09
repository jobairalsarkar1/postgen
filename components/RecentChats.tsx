"use client";

import React from "react";
import Link from "next/link";
import useSWR from "swr";
import { useUserStore } from "@/stores/userStore";

interface Campaign {
  $id: string;
  prompt: string;
  platform: string;
  status: string;
  userId: string;
  $createdAt: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const RecentChats: React.FC = () => {
  const user = useUserStore((state) => state.user);

  const { data, error } = useSWR(
    user?.id ? `/api/campaigns/recent?userId=${user.id}` : null,
    fetcher,
    { refreshInterval: 5000 }
  );

  const campaigns: Campaign[] = data?.campaigns || [];

  if (!user) return null;

  return (
    <div className="flex flex-col gap-0">
      <h2 className="text-xs font-semibold text-gray-500 px-2 mb-1 uppercase tracking-wide">
        Recent Chats
      </h2>
      {error && (
        <p className="text-sm mt-2 px-2 text-red-500">Failed to load chats</p>
      )}
      {!error && campaigns.length === 0 && (
        <p className="text-sm mt-2 px-2 text-gray-400">No recent chats</p>
      )}
      {campaigns.map((chat) => (
        <Link
          key={chat.$id}
          href={`/chat/${chat.$id}`}
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <span className="text-sm truncate max-w-[200px] block whitespace-nowrap overflow-hidden">
            {chat.prompt}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default RecentChats;
