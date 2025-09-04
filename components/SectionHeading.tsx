import React from "react";

interface SectionHeadingProps {
  title: string;
  highlight: string;
  description: string;
}

const SectionHeading = ({
  title,
  highlight,
  description,
}: SectionHeadingProps) => {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white/90">
        {title}{" "}
        <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 dark:from-blue-200 dark:via-blue-500 dark:to-blue-600 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
        {description}
      </p>
    </>
  );
};

export default SectionHeading;
