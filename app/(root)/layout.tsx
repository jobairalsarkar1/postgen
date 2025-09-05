import Navbar from "@/components/Navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen selection:bg-blue-500/60">
      <Navbar />
      <main className="bg-black/30">{children}</main>
    </div>
  );
}
