"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import clsx from "clsx";

export default function NavLink({
  href,
  text,
  active,
  onClick,
  desktop,
}: {
  href: string;
  text: string;
  active: boolean;
  onClick?: () => void;
  desktop?: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [, startTransition] = useTransition();

  const isSectionLink = href.startsWith("#");

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick();

    if (isSectionLink && pathname === "/") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (isSectionLink && pathname !== "/") {
      e.preventDefault();
      startTransition(() => {
        router.push(`/${href}`);
      });
    }
  };

  return (
    <Link
      href={isSectionLink ? `/${href}` : href}
      onClick={handleClick}
      className={clsx(
        "px-3 py-2 text-sm rounded-md font-medium transition-colors",
        desktop
          ? active
            ? "text-blue-600 dark:text-blue-400"
            : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
          : active
          ? "bg-blue-600/15 text-blue-600"
          : "text-gray-700 dark:text-gray-300 hover:bg-blue-600/10 dark:hover:bg-blue-700/30 hover:text-blue-600 dark:hover:text-white"
      )}
    >
      {text}
    </Link>
  );
}
