"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
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

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (requireAuth && !user) {
      router.replace(redirectPath || "/sign-in");
    }

    if (redirectIfAuth && user) {
      router.replace(redirectPath || "/chat");
    }
  }, [user, router, requireAuth, redirectIfAuth, redirectPath]);

  return user;
};
