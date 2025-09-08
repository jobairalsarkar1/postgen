"use client";

import React, { useState, useRef, useEffect } from "react";
import { useUserStore } from "@/stores/userStore";
import { logout } from "@/lib/appwrite";
import { useRouter } from "next/navigation";

interface UserAvatarProps {
  showInfo?: boolean;
  placement?: "bottom" | "top-right" | "top-center";
}

export default function UserAvatar({
  showInfo = false,
  placement = "bottom",
}: UserAvatarProps) {
  const user = useUserStore((state) => state.user);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    useUserStore.getState().setUser(null); // clear Zustand store
    router.push("/sign-in");
  };

  if (!user) return null;

  return (
    <div className="relative flex items-center gap-2" ref={ref}>
      {/* Avatar button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm hover:scale-105 transition"
      >
        {user.name ? user.name.charAt(0).toUpperCase() : "G"}
      </button>

      {showInfo && (
        <div className="flex flex-col">
          <span className="text-sm font-medium truncate max-w-[160px]">
            {user.name}
          </span>
          <span className="text-xs text-gray-500 truncate max-w-[180px]">
            {user.email}
          </span>
        </div>
      )}

      {/* Modal */}
      {open && (
        <div
          className={`absolute z-50 w-56 sm:w-64 p-2 sm:p-4 rounded-xl shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-blue-900 transition-transform duration-200 ${
            placement === "bottom"
              ? "top-full mt-2 right-0"
              : placement === "top-right"
              ? "bottom-full mb-3 left-2"
              : placement === "top-center"
              ? "bottom-full mb-3 left-1/2 -translate-x-1/2"
              : ""
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
              {user.name ? user.name.charAt(0).toUpperCase() : "G"}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base truncate max-w-[120px]">
                {user.name}
              </span>
              <span className="text-xs text-gray-500 truncate max-w-[140px]">
                {user.email}
              </span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full py-1.5 px-4 text-center bg-[#171515] hover:bg-neutral-800 dark:hover:bg-neutral-900/70 dark:bg-neutral-800 text-white rounded-md transition duration-200 cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
