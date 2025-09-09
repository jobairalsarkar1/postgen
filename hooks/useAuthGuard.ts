"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useUserStore } from "@/stores/userStore";

interface AuthGuardOptions {
  requireAuth?: boolean;
  redirectIfAuth?: boolean;
  redirectPath?: string;
}

export const useAuthGuard = ({
  requireAuth = false,
  redirectIfAuth = false,
  redirectPath,
}: AuthGuardOptions) => {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // user is not logged in and the route is protected
    if (requireAuth && !user) {
      router.replace(`/sign-in?redirect=${encodeURIComponent(pathname)}`);
    }

    // keeps logged in users away from auth page.
    if (redirectIfAuth && user) {
      const redirectTo = new URLSearchParams(window.location.search).get("redirect");
      router.replace(redirectTo || redirectPath || "/chat");
    }
  }, [user, router, requireAuth, redirectIfAuth, redirectPath, pathname]);

  return user;
};
