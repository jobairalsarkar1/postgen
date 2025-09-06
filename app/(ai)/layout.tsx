import ChatSidebar from "@/components/ChatSidebar";
import React from "react";

export default function AiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
      <ChatSidebar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
