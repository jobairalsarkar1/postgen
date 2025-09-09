"use client";
import { useEffect, useState, useRef } from "react";
import {
  Shield,
  Lock,
  Eye,
  Share2,
  Key,
  Mail,
  CheckCircle,
  ChevronRight,
  User,
  Trash2,
  Server,
} from "lucide-react";
import Footer from "@/components/Footer";
import Link from "next/link";

const sections = [
  {
    id: "information",
    title: "Information We Collect",
    icon: <Shield size={20} />,
  },
  { id: "usage", title: "How We Use Information", icon: <Eye size={20} /> },
  { id: "sharing", title: "Information Sharing", icon: <Share2 size={20} /> },
  { id: "security", title: "Data Security", icon: <Lock size={20} /> },
  { id: "rights", title: "Your Rights", icon: <Key size={20} /> },
];

const Page = () => {
  const [active, setActive] = useState(sections[0].id);
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const addToRefs = (el: HTMLElement | null) => {
      if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
    };

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) addToRefs(el);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { root: null, rootMargin: "-30% 0px -30% 0px", threshold: 0 }
    );

    const refsSnapshot = [...sectionRefs.current];
    refsSnapshot.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      refsSnapshot.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <section className="min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-[#0e0e10] text-gray-900 dark:text-white/90 px-6 lg:px-12 pt-30 pb-12">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy{" "}
              <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 dark:from-blue-200 dark:via-blue-500 dark:to-blue-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information specifically for
              PostGen AI.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <aside className="lg:w-1/4">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg sticky top-24">
                <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                  <Lock size={20} /> Policy Sections
                </h2>
                <nav className="space-y-4">
                  {sections.map((s) => (
                    <Link
                      key={s.id}
                      href={`#${s.id}`}
                      className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${
                        active === s.id
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-md"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
                      }`}
                      onClick={() => setActive(s.id)}
                    >
                      <span
                        className={`p-2 rounded-full transition-all ${
                          active === s.id
                            ? "bg-blue-100 dark:bg-blue-900/30"
                            : "bg-gray-100 dark:bg-gray-700"
                        }`}
                      >
                        {s.icon}
                      </span>
                      <span className="font-medium">{s.title}</span>
                      <ChevronRight
                        size={16}
                        className={`ml-auto transition-transform ${
                          active === s.id ? "rotate-90" : "opacity-0"
                        }`}
                      />
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="lg:w-3/4 space-y-16">
              {/* Information We Collect */}
              <div
                id="information"
                className="scroll-mt-24 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <Shield
                      size={24}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <h2 className="text-2xl font-bold">Information We Collect</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  We collect information directly relevant to providing PostGen
                  AI services. This includes data obtained via Appwrite OAuth,
                  user prompts, generated posts, usage analytics, and support
                  communications.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <User
                      size={20}
                      className="text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Account information:</strong> Name, email (via
                      Appwrite OAuth)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Server
                      size={20}
                      className="text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Prompt and post data:</strong> User-provided
                      prompts and AI-generated posts stored in the database
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Mail
                      size={20}
                      className="text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Communications:</strong> Support messages and
                      feedback
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Server
                      size={20}
                      className="text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Usage data:</strong> Analytics to improve and
                      personalize the service
                    </span>
                  </li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div
                id="usage"
                className="scroll-mt-24 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <Eye
                      size={24}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <h2 className="text-2xl font-bold">How We Use Information</h2>
                </div>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    />
                    Generate AI posts via Cohere API
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    />
                    Account management, including deletion
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    />
                    Improving app features and performance
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    />
                    Communicating service updates and support responses
                  </li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div
                id="sharing"
                className="scroll-mt-24 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <Share2
                      size={24}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <h2 className="text-2xl font-bold">Information Sharing</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  We do not sell or trade user information. We only share data
                  when necessary for:
                </p>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    />
                    Compliance with legal requirements
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    />
                    Protecting rights or safety
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    />
                    Trusted service providers to maintain the service
                  </li>
                </ul>
              </div>

              {/* Data Security */}
              <div
                id="security"
                className="scroll-mt-24 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <Lock
                      size={24}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <h2 className="text-2xl font-bold">Data Security</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  We implement standard security practices including OAuth
                  authentication, encrypted storage for user prompts. While we
                  strive to protect your data, no system is completely
                  foolproof.
                </p>
              </div>

              {/* Your Rights */}
              <div
                id="rights"
                className="scroll-mt-24 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <Key
                      size={24}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <h2 className="text-2xl font-bold">Your Rights</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  As a user, you can:
                </p>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <li className="flex items-start">
                    <User
                      size={20}
                      className="text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    />
                    Access and view your information
                  </li>
                  <li className="flex items-start">
                    <User
                      size={20}
                      className="text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    />
                    Update or correct information
                  </li>
                  <li className="flex items-start">
                    <Trash2
                      size={20}
                      className="text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    />
                    Delete your account and associated data
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
