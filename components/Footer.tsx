import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Sparkles,
  MoveRight,
  SquareSquare,
} from "lucide-react";
import ThemeToggle from "./theme/ThemeToggle";
import CustomBadge from "./CustomBadge";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-[#0e0e10] text-gray-900 dark:text-white/90 pt-24">
      {/* CTA Section */}
      <div className="text-center px-4 mb-24">
        <CustomBadge text="Get Started Today" icon={Sparkles} />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to&nbsp;
          <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Transform
          </span>
          &nbsp;Your Social Media?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Join thousands of creators and developers who save hours every week by
          creating smarter with AI.
        </p>
        <div className="flex flex-row justify-center gap-3 flex-wrap">
          <Link
            href="/chat"
            className="inline-flex items-center justify-center tracking-wide font-semibold px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-white text-base sm:text-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-500 shadow-lg transition"
          >
            Start Creating Free
            <MoveRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Link>
        </div>
      </div>

      {/* Separator */}
      <div className="mx-auto my-12 h-0.5 w-80 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/70 to-blue-500/0" />
      {/* shadow-[0_0_12px_rgba(59,130,246,0.6)] */}

      {/* Main Footer */}
      <div className="mx-auto px-6 lg:px-12 xl:px-20 text-center space-y-8">
        {/* Brand */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-tr from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
            <SquareSquare className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl tracking-tight font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            PostGen AI
          </span>
          <p className="text-sm leading-snug text-gray-500 dark:text-gray-400 max-w-sm">
            AI-powered platform that creates social media posts tailored to your
            voice. Save time, boost engagement, and grow your audience
            effortlessly.
          </p>
          <div className="flex items-center gap-4 mt-2">
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

        <div className="flex justify-center gap-6">
          <Link
            href="#featurs"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 transition"
          >
            Features
          </Link>
          <Link
            href="/chat"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 transition"
          >
            Get Started
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 transition"
          >
            Contact
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 py-4">
          <p>© {currentYear} PostGen AI. All rights reserved.</p>

          <div className="flex items-center gap-4">
            Theme:
            <ThemeToggle showText direction="up" />
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/privacy" className="hover:text-blue-500 transition">
              Privacy Policy
            </Link>
            <span className="text-gray-400">|</span>
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
