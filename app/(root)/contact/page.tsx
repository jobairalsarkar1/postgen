import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Page = () => {
  return (
    <>
      <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 dark:bg-[#0e0e10] text-gray-900 dark:text-white/90 pt-30 pb-16">
        <div className="relative z-20 max-w-6xl w-full grid md:grid-cols-2 gap-16 px-6">
          {/* Left side */}
          <div className="flex flex-col justify-between h-full">
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left text-gray-800 dark:text-white/90">
                Contact{" "}
                <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Us
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-lg text-center md:text-left mx-auto md:mx-0">
                We&apos;d love your input: questions, feature requests, bugs, or
                compliments.
              </p>
            </div>

            {/* Socials */}
            <div>
              <h3 className="font-semibold mb-4 text-gray-800 dark:text-white/90 text-lg md:text-2xl text-center md:text-left">
                Follow us
              </h3>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-gray-500 dark:text-gray-400">
                <a
                  href="https://github.com/jobairalsarkar1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/jobairalsarkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jobair-al-sarkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:jobair.a.sarkar@gmail.com"
                  className="hover:text-blue-500"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex items-center">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
