"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  SquareSquare,
  PanelLeft,
  Clock,
  SquarePlus,
  Settings,
} from "lucide-react";
import ThemeToggle from "./theme/ThemeToggle";
import { getCurrentUser } from "@/lib/appwrite";

const ChatSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [hoveringLogo, setHoveringLogo] = useState(false);
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(
    null
  );

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getCurrentUser();
      if (data?.user) {
        setUser({
          name: data.user.name || data.user.email?.split("@")[0],
          email: data.user.email,
        });
      }
    };
    fetchUser();
  }, []);

  return (
    <div
      className={`${
        collapsed ? "w-16" : "w-64"
      } flex flex-col justify-between border-r border-gray-200 dark:border-gray-800 transition-all duration-300 bg-white/70 dark:bg-gray-950/50 backdrop-blur-md`}
    >
      <div className="flex flex-col gap-6 px-3 pt-4">
        {/* Branding + Toggle */}
        <div
          className={`flex items-center ${
            collapsed ? "justify-center" : "justify-between"
          }`}
        >
          <div
            className="relative flex items-center justify-center"
            onMouseEnter={() => collapsed && setHoveringLogo(true)}
            onMouseLeave={() => collapsed && setHoveringLogo(false)}
          >
            {/* Logo */}
            <div
              className={`w-9 h-9 bg-gradient-to-tr from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md transition-opacity duration-200 ${
                hoveringLogo ? "opacity-0" : "opacity-100"
              }`}
            >
              <SquareSquare className="w-6 h-6 text-white" />
            </div>

            {/* Expand button (collapsed) */}
            {collapsed && (
              <button
                onClick={() => {
                  setCollapsed(false);
                  setHoveringLogo(false);
                }}
                className={`absolute inset-0 flex items-center justify-center rounded-md transition-opacity duration-200 cursor-e-resize ${
                  hoveringLogo ? "opacity-100" : "opacity-0"
                }`}
              >
                <PanelLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            )}
          </div>

          {/* collapse button (expanded) */}
          {!collapsed && (
            <div className="flex items-center justify-between w-full ml-2">
              <span className="text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                PostGen AI
              </span>
              <button
                onClick={() => setCollapsed(true)}
                className="p-1.5 rounded-md hover:bg-blue-500/20 dark:hover:bg-gray-700 transition cursor-e-resize"
              >
                <PanelLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          )}
        </div>

        {/* Main Nav */}
        <nav className="flex flex-col gap-1">
          {[
            {
              icon: <SquarePlus className="w-5 h-5 text-blue-500" />,
              label: "New Chat",
              href: "/chat/new",
            },
            {
              icon: <Clock className="w-5 h-5 text-blue-500" />,
              label: "History",
              href: "/history",
            },
            {
              icon: <Settings className="w-5 h-5 text-blue-500" />,
              label: "Settings",
              href: "/settings",
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`flex items-center ${
                collapsed ? "justify-center py-2" : "gap-3 px-2 py-2"
              } rounded-lg hover:bg-blue-500/10 transition`}
            >
              {item.icon}
              {!collapsed && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </Link>
          ))}
          {!collapsed && (
            <div className="px-2 mt-3 text-sm flex items-center gap-4">
              Theme:
              <ThemeToggle showText />
            </div>
          )}
        </nav>

        {/* Recent Chats */}
        {!collapsed && (
          <div className="flex flex-col gap-0">
            <h2 className="text-xs font-semibold text-gray-500 px-2 mb-1 uppercase tracking-wide">
              Recent Chats
            </h2>
            {[
              { name: "Chat with AI", href: "/chat/ai" },
              { name: "Marketing Draft", href: "/chat/marketing-draft" },
            ].map((chat, i) => (
              <Link
                key={i}
                href={chat.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {/* <MessageSquare className="w-5 h-5 text-gray-600 dark:text-gray-300" /> */}
                <span className="text-sm">{chat.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* User Info */}
      <div
        className={`flex items-center border-t border-gray-200 dark:border-gray-800 ${
          collapsed ? "justify-center py-4" : "gap-3 px-3 py-4"
        }`}
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
          {user?.name ? user.name.charAt(0).toUpperCase() : "G"}
        </div>
        {!collapsed && (
          <div className="flex flex-col">
            <span className="text-sm font-medium truncate max-w-[160px]">
              {user?.name || "Guest User"}
            </span>
            <span className="text-xs text-gray-500 truncate max-w-[180px]">
              {user?.email || "guest@example.com"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatSidebar;
