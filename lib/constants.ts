import { BarChart3, Clock, Code2, Globe, Shield, Zap } from "lucide-react";

export const faqs = [
  {
    question: "How does PostGen AI work?",
    answer:
      "PostGen AI transforms a single prompt into tailored content for platforms like Twitter, LinkedIn, and Facebook. Just type your idea, choose the platform, and let the AI do the rest.",
  },
  {
    question: "What platforms are supported?",
    answer:
      "Right now, PostGen AI supports content generation for Twitter, LinkedIn, Facebook, and Threads — with more platforms coming soon based on user feedback.",
  },
  {
    question: "Is PostGen AI free to use?",
    answer:
      "Yes, it's completely free to use during our early access period. We're focused on making the product great, and you'll be the first to know when we introduce plans or pricing.",
  },
  {
    question: "Can I control the tone or style of the content?",
    answer:
      "Definitely. You can choose from different tones like casual, professional, witty, or even inspirational — helping your content match your voice or brand.",
  },
  {
    question: "Do I need an account to use PostGen AI?",
    answer:
      "Yes, creating a free account lets you save your generated posts, access platform-specific tools, and get personalized suggestions.",
  },
  {
    question: "Is my content private?",
    answer:
      "Yes. Everything you generate is private and only visible to you. We don’t store your prompts or share your content with anyone.",
  },
];

export const features = [
  {
    title: "Lightning Fast",
    description: "Global CDN ensures sub-100ms response times worldwide",
    icon: Zap,
    border: "border-yellow-400/30",
    hoverShadow: "hover:shadow-[0_0_20px_#facc1599]",
    iconGradient: "from-yellow-400 via-yellow-500 to-yellow-600",
  },
  {
    title: "Production Ready",
    description: "99.9% uptime with enterprise-grade infrastructure",
    icon: Shield,
    border: "border-pink-500/30",
    hoverShadow: "hover:shadow-[0_0_20px_#ec489999]",
    iconGradient: "from-pink-500 via-fuchsia-500 to-rose-500",
  },
  {
    title: "Usage Analytics",
    description: "Detailed insights into your API consumption and patterns",
    icon: BarChart3,
    border: "border-orange-400/30",
    hoverShadow: "hover:shadow-[0_0_20px_#fb923c99]",
    iconGradient: "from-orange-500 via-orange-600 to-orange-700",
  },
  {
    title: "Real-time Updates",
    description: "Fresh data every hour with realistic variations",
    icon: Clock,
    border: "border-indigo-500/30",
    hoverShadow: "hover:shadow-[0_0_20px_#6366f199]",
    iconGradient: "from-indigo-500 via-indigo-600 to-indigo-700",
  },
  {
    title: "Global Access",
    description: "CORS enabled, accessible from any domain or app",
    icon: Globe,
    border: "border-cyan-500/30",
    hoverShadow: "hover:shadow-[0_0_20px_#06b6d499]",
    iconGradient: "from-cyan-500 via-blue-500 to-blue-600",
  },
  {
    title: "Multiple Formats",
    description: "JSON, XML, CSV - choose your preferred data format",
    icon: Code2,
    border: "border-teal-500/30",
    hoverShadow: "hover:shadow-[0_0_20px_#14b8a699]",
    iconGradient: "from-teal-500 via-teal-600 to-teal-700",
  },
];

export const searchRoutes = [
  { title: "/ Home", href: "/" },
  { title: "/ Docs", href: "/docs" },
  { title: "/ Authentication Docs", href: "/docs/authentication" },
  { title: "/ Users API", href: "/docs/users-api" },
  { title: "/ Products API", href: "/docs/products" },
  { title: "/ Orders API", href: "/docs/orders" },
  { title: "/ Cart API", href: "/docs/cart" },
  { title: "/ Payment API", href: "/docs/payment" },
  { title: "/ Posts API", href: "/docs/posts" },
  { title: "/ Comments API", href: "/docs/comments" },
  { title: "/ Reviews API", href: "/docs/reviews" },
  { title: "/ Notifications API", href: "/docs/notifications" },
  { title: "/ Account", href: "/account" },
  { title: "/ API Key", href: "/account" },
  { title: "/ Settings", href: "/account" },
  { title: "/ Delete Account", href: "/account" },
  { title: "/ Contact", href: "/contact" },
  { title: "/ Privacy", href: "/privacy" },
  { title: "/ Cookies", href: "/cookies" },
];

// Cookies Policy
export const cookieDetails = [
  {
    category: "Essential",
    cookies: [
      {
        name: "auth-token",
        purpose: "Authentication session (OAuth login)",
        duration: "Session",
      },
      {
        name: "csrf-token",
        purpose: "Security protection",
        duration: "Session",
      },
    ],
  },
  {
    category: "Performance",
    cookies: [
      {
        name: "_ga",
        purpose: "Google Analytics tracking",
        duration: "2 years",
      },
      {
        name: "_gid",
        purpose: "Google Analytics tracking",
        duration: "24 hours",
      },
    ],
  },
  {
    category: "Functional",
    cookies: [
      {
        name: "theme",
        purpose: "Stores dark/light mode preference",
        duration: "Persistent (stored in localStorage until cleared)",
      },
    ],
  },
];