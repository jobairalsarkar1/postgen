"use client";

import React, { useState, useRef, useEffect } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import CustomBadge from "./CustomBadge";
import { faqs } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20 bg-gray-50 dark:bg-[#0e0e10] text-gray-900 dark:text-white/90 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <CustomBadge icon={HelpCircle} text="FAQ" />
          <SectionHeading
            title="Frequently Asked"
            highlight="Questions"
            description="Answers to common questions about how PostGen AI helps you create platform-ready content effortlessly."
          />
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AccordionItem key={index} {...{ faq, isOpen, toggle, index }} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({
  faq,
  isOpen,
  toggle,
  index,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  toggle: (index: number) => void;
  index: number;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`transition-all duration-300 ease-in-out border border-gray-200 dark:border-white/10 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-sm dark:shadow-none group ${
        isOpen
          ? "ring-2 ring-blue-500/50 dark:ring-blue-500/30"
          : "hover:ring-1 hover:ring-blue-400/30 dark:hover:ring-white/10"
      }`}
    >
      <button
        onClick={() => toggle(index)}
        className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-semibold text-gray-800 dark:text-white tracking-tight transition-colors duration-300 cursor-pointer"
      >
        <span className="transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 transform transition-transform duration-300 text-gray-400 dark:text-white ${
            isOpen ? "rotate-180 text-blue-500" : ""
          }`}
        />
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out text-base text-gray-600 dark:text-gray-400 px-6"
        style={{ height: `${height}px` }}
      >
        <div className="py-4 leading-relaxed">{faq.answer}</div>
      </div>
    </div>
  );
};

export default FAQSection;
