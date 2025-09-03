"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Network } from "lucide-react";
import clsx from "clsx";
import ThemeToggle from "./theme/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="py-0 fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl border-b border-b-gray-300 dark:border-b-gray-800 bg-white/90 dark:bg-black/40">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="flex items-center justify-between h-16">
            {/* Logo + SearchBar */}
            <div className="flex items-center gap-12">
              <Link
                href="/"
                className={clsx(
                  "flex items-center gap-2 group transition-all duration-300 ease-in-out",
                  sidebarOpen && "opacity-40 blur-[2px]"
                )}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-orange-600">
                  <Network className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-orange-600">
                  PostGen
                </span>
              </Link>
              {/* 
              <div className="hidden md:block">
                <SearchBar />
              </div> */}
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center space-x-2">
                <NavLink href="/" text="Home" active={pathname === "/"} />
                <NavLink
                  href="/docs"
                  text="Docs"
                  active={pathname.startsWith("/docs")}
                />
              </div>
              <ThemeToggle />

              <Link
                href="/sign-in"
                className="font-semibold px-4 py-2 bg-blue-400 hover:bg-blue-500 rounded-md text-white"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Theme Toggle + Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                className="p-2 rounded-md text-orange-600 hover:bg-orange-100 dark:hover:bg-orange-700/20"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-40 transition-opacity bg-black/60 md:hidden",
          {
            "opacity-100 pointer-events-auto": sidebarOpen,
            "opacity-0 pointer-events-none": !sidebarOpen,
          }
        )}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar Panel */}
      <div
        className={clsx(
          "fixed top-0 right-0 z-50 h-full w-64 bg-white dark:bg-black shadow-lg transition-transform duration-300 md:hidden",
          {
            "translate-x-0": sidebarOpen,
            "translate-x-full": !sidebarOpen,
          }
        )}
      >
        <div className="flex flex-col h-full">
          {/* Top: Logo + Close */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setSidebarOpen(false)}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-orange-600">
                <Network className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-orange-600">PostGen</span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-orange-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Middle: Nav Links */}
          <div className="flex-1 flex flex-col space-y-1 p-4 overflow-y-scroll">
            <NavLink
              href="/"
              text="Home"
              active={pathname === "/"}
              onClick={() => setSidebarOpen(false)}
            />
          </div>

          <div className="p-4">
            <Link
              href="/sign-in"
              className="block w-full text-center text-sm font-semibold px-4 py-2 bg-orange-700 hover:bg-orange-800 rounded-md text-white"
              onClick={() => setSidebarOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function NavLink({
  href,
  text,
  active,
  onClick,
}: {
  href: string;
  text: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "px-3.5 py-1.5 text-sm flex items-center space-x-2 rounded-xl font-medium transition-colors",
        active
          ? "bg-orange-600/15 text-orange-600"
          : "text-gray-600 dark:text-gray-400 hover:bg-orange-600/30 hover:text-gray-700/80 dark:hover:text-white/80"
      )}
    >
      <span>{text}</span>
    </Link>
  );
}
