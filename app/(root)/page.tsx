import FAQSection from "@/components/FAQSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import React from "react";

export default function Home() {
  return (
    <>
      {/* <div className="absolute top-20 right-10 w-48 h-48 rounded-full bg-gradient-to-br from-blue-400/5 to-cyan-400/5 dark:from-blue-700/10 dark:to-cyan-700/10 blur-3xl" /> */}
      <section id="home">
        <HeroSection />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <Footer />
    </>
  );
}
