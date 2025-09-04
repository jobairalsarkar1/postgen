"use client";

import Link from "next/link";
import {
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import axios from "axios";
import ThemeToggle from "./theme/ThemeToggle";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [buttonText, setButtonText] = useState("Subscribe");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    try {
      await axios.post("/api/subscribe", { email });

      setSubscribed(true);
      setButtonText("Subscribed!");
      setEmail("");

      setTimeout(() => {
        setSubscribed(false);
        setButtonText("Subscribe");
      }, 2000);
    } catch (error) {
      console.error("Subscription failed:", error);
      setSubscribed(true);
      setButtonText("Subscribed!");
      setEmail("");
      setTimeout(() => {
        setSubscribed(false);
        setButtonText("Subscribe");
      }, 2000);
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-[#0e0e10] text-gray-900 dark:text-white/90 pt-20">
      {/* CTA Section */}
      <div className="text-center px-4 mb-24">
        <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-500/10 px-4 py-2 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            Get Started Today
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Social Media?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Join thousands of creators and developers who save hours every week
          with AI-powered tools.
        </p>
        {/* Buttons row always inline, smaller on mobile */}
        <div className="flex flex-row justify-center gap-3 flex-wrap">
          <Link
            href="/account"
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-white text-sm sm:text-base bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-500 shadow-lg hover:scale-105 transition"
          >
            Start Free
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg border border-blue-500/70 dark:border-blue-600/70 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-600/10 transition"
          >
            View Docs
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto px-6 lg:px-12 xl:px-20 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-x-24 text-center sm:text-left">
          {/* Brand Section */}
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-tr from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">PostGen</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-sm">
              AI-powered social content generation platform. Build faster,
              engage smarter, and focus on what matters most.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <Link
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 transition"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/account"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 transition"
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Get the latest news and AI tips straight to your inbox.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a1a] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className={`px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white text-sm transition cursor-pointer ${
                  subscribed ? "scale-105" : ""
                }`}
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>

        {/* Separator */}
        <div className="mt-8 mb-6 h-px bg-blue-600/30" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400 py-4">
          {/* Left */}
          <p>© {currentYear} PostGen. All rights reserved.</p>

          {/* Center - Theme Toggle */}
          <div className="flex items-center gap-4">
            Theme:
            <ThemeToggle showText direction="up" />
          </div>

          {/* Right - Policies */}
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-blue-500 transition">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-blue-500 transition">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
