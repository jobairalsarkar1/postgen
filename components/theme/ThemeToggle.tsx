"use client";

import { useEffect, useRef, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";

type Theme = "light" | "dark" | "system";

interface ThemeToggleProps {
  showText?: boolean;
  direction?: "up" | "down"; // new prop
}

const ThemeToggle = ({
  showText = false,
  direction = "down",
}: ThemeToggleProps) => {
  const [theme, setTheme] = useState<Theme>("system");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme("system");
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    }
  }, []);

  // Close dropdown if click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const applyTheme = (selectedTheme: Theme) => {
    setTheme(selectedTheme);

    if (selectedTheme === "system") {
      localStorage.removeItem("theme");
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    } else {
      localStorage.setItem("theme", selectedTheme);
      document.documentElement.classList.toggle(
        "dark",
        selectedTheme === "dark"
      );
    }

    setOpen(false);
  };

  const getThemeIcon = (t: Theme) => {
    switch (t) {
      case "light":
        return <Sun className="h-4 w-4 text-gray-800 dark:text-yellow-400" />;
      case "dark":
        return <Moon className="h-4 w-4 text-gray-200" />;
      case "system":
        return <Monitor className="h-4 w-4 text-blue-500" />;
    }
  };

  const getThemeLabel = (t: Theme) => {
    switch (t) {
      case "light":
        return "Light";
      case "dark":
        return "Dark";
      case "system":
        return "System";
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-3 rounded-lg border border-gray-300 bg-white dark:bg-[#020817] dark:border-[#1e283a] hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer ${
          showText ? " py-1.5" : " py-2.5"
        }`}
      >
        {getThemeIcon(theme)}
        {showText && <span className="text-sm">{getThemeLabel(theme)}</span>}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute right-0 w-36 rounded-lg shadow-lg bg-white dark:bg-[#020817] border border-gray-200 dark:border-[#1e283a] z-50
            ${direction === "up" ? "bottom-full mb-2" : "mt-2"}`}
        >
          <ul className="px-1.5 py-1.5">
            <li>
              <button
                onClick={() => applyTheme("light")}
                className="flex items-center w-full px-3 py-2 text-sm rounded-lg hover:bg-blue-400 dark:hover:bg-gray-700 cursor-pointer"
              >
                <Sun className="h-4 w-4 mr-2 text-yellow-400" /> Light
              </button>
            </li>
            <li>
              <button
                onClick={() => applyTheme("dark")}
                className="flex items-center w-full px-3 py-2 text-sm rounded-lg hover:bg-blue-400 dark:hover:bg-gray-700 cursor-pointer"
              >
                <Moon className="h-4 w-4 mr-2 text-gray-800 dark:text-gray-200" />{" "}
                Dark
              </button>
            </li>
            <li>
              <button
                onClick={() => applyTheme("system")}
                className="flex items-center w-full px-3 py-2 text-sm rounded-lg hover:bg-blue-400 dark:hover:bg-gray-700 cursor-pointer"
              >
                <Monitor className="h-4 w-4 mr-2 text-blue-500" /> System
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
