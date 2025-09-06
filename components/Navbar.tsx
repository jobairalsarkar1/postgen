"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, SquareSquare } from "lucide-react";
import clsx from "clsx";
import ThemeToggle from "./theme/ThemeToggle";
import NavLink from "./NavLink";

export default function Navbar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50",
          "bg-white/30 dark:bg-black/30 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700",
          "md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none md:border-none"
        )}
      >
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Desktop View */}
            <div className="hidden md:flex items-center justify-between w-full gap-6">
              {/* Branding */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/50 dark:bg-white/10 backdrop-blur-md shadow-sm">
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                    <SquareSquare className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                    PostGen AI
                  </span>
                </Link>
              </div>

              {/* Navigation Links */}
              <div className="flex items-center gap-4 px-4 py-2 rounded-xl bg-white/50 dark:bg-white/10 backdrop-blur-md shadow-sm">
                <NavLink
                  href="/"
                  text="Home"
                  active={pathname === "/"}
                  desktop
                />
                <NavLink
                  href="#features"
                  text="Features"
                  active={pathname === "/#features"}
                  desktop
                />
                <NavLink
                  href="#faq"
                  text="FAQ"
                  active={pathname === "/#faq"}
                  desktop
                />
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/50 dark:bg-white/10 backdrop-blur-md shadow-sm">
                <ThemeToggle />
                <Link
                  href="/sign-in"
                  className="text-sm font-semibold px-4 py-2 rounded-md transition hover:bg-blue-100 dark:hover:bg-blue-800/30"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-in"
                  className="font-semibold text-sm px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white rounded-md"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Mobile View */}
            <div className="flex md:hidden items-center justify-between w-full">
              <Link
                href="/"
                className={clsx(
                  "flex items-center gap-2 transition-all duration-300",
                  sidebarOpen && "blur-sm opacity-30 pointer-events-none"
                )}
              >
                <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                  <SquareSquare className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  PostGen AI
                </span>
              </Link>

              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 rounded-md text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-700/20"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          {
            "opacity-100 pointer-events-auto": sidebarOpen,
            "opacity-0 pointer-events-none": !sidebarOpen,
          }
        )}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Mobile Sidebar Panel */}
      <div
        className={clsx(
          "fixed top-0 right-0 z-50 h-full w-64 bg-white/80 dark:bg-black/90 backdrop-blur-xl shadow-xl transition-transform duration-300 md:hidden",
          {
            "translate-x-0": sidebarOpen,
            "translate-x-full": !sidebarOpen,
          }
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            <Link
              href="/"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <SquareSquare className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-600">
                PostGen AI
              </span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-blue-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 flex flex-col space-y-1 p-4 overflow-y-auto">
            <NavLink
              href="/"
              text="Home"
              active={pathname === "/"}
              onClick={() => setSidebarOpen(false)}
            />
            <NavLink
              href="#features"
              text="Features"
              active={pathname === "/#features"}
              onClick={() => setSidebarOpen(false)}
            />
            <NavLink
              href="#faq"
              text="FAQ"
              active={pathname === "/#faq"}
              onClick={() => setSidebarOpen(false)}
            />
          </div>

          <div className="p-4">
            <Link
              href="/sign-in"
              className="block w-full text-center text-sm font-semibold px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-md text-white"
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
