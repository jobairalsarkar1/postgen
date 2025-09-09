import { Sparkles, FileText, Globe, Lock } from "lucide-react";

export const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Content",
      description:
        "Generate social media posts with AI tailored to your brand voice and tone, like casual, professional, or witty.",
    },
    {
      icon: Globe,
      title: "Platform Adaptability",
      description:
        "Create content optimized for multiple platforms like Twitter, LinkedIn, Facebook, and Reddit from prompt.",
    },
    {
      icon: FileText,
      title: "Multiple Formats & Customization",
      description:
        "Generate posts for promotional, educational, or entertaining purposes, and easily customize them before publishing.",
    },
    {
      icon: Lock,
      title: "Privacy & Personalization",
      description:
        "Your content stays private, while your preferences like dark/light mode and platform selection are remembered for a personalized experience.",
    },
];

export const faqs = [
  {
    question: "How does PostGen AI work?",
    answer:
      "PostGen AI transforms a single prompt into tailored content for platforms like Twitter, LinkedIn, Facebook, and Reddit. Just type your idea, choose the platform, and let the AI generate a polished post.",
  },
  {
    question: "What platforms are supported?",
    answer:
      "PostGen AI currently supports content generation for Twitter, LinkedIn, Facebook, and Reddit. We plan to add more platforms soon based on user feedback.",
  },
  {
    question: "Is PostGen AI free to use?",
    answer:
      "Yes, it's completely free during the early access period. You'll be the first to know when we introduce any plans or pricing.",
  },
  {
    question: "Can I control the tone or style of the content?",
    answer:
      "Absolutely. You can choose from different tones like casual, professional, witty, or inspirational, helping your content match your personal style or brand voice.",
  },
  {
    question: "Do I need an account to use PostGen AI?",
    answer:
      "Yes, creating a free account lets you save your generated posts, select platforms.",
  },
  {
    question: "Is my content private?",
    answer:
      "Yes. Everything you generate is private and only visible to you. We don’t share your content with anyone.",
  },
  {
    question: "Does PostGen AI store cookies or preferences?",
    answer:
      "Yes, PostGen AI uses cookies to remember your preferences, like selected platform and dark/light mode, ensuring a seamless experience.",
  },
];

// Cookies Policy
export const cookieDetails = [
  {
    category: "Essential",
    cookies: [
      {
        name: "auth-token",
        purpose: "Authentication session (OAuth login with Google or GitHub)",
        duration: "Session",
      },
      {
        name: "csrf-token",
        purpose: "Security protection against cross-site request forgery",
        duration: "Session",
      },
    ],
  },
  {
    category: "Performance",
    cookies: [
      {
        name: "_ga",
        purpose: "Google Analytics tracking to understand user interactions",
        duration: "2 years",
      },
      {
        name: "_gid",
        purpose: "Google Analytics tracking to monitor user behavior",
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
      {
        name: "platform-selection",
        purpose: "Stores selected platform for AI post generation (e.g., Twitter, LinkedIn)",
        duration: "Persistent (stored in localStorage until cleared)",
      },
    ],
  },
];
