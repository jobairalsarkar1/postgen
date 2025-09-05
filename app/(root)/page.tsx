import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import React from "react";

export default function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <Footer />
    </>
  );
}
