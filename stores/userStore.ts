import { create } from "zustand";
import { getCurrentUser } from "@/lib/appwrite";

type User = { name?: string; email?: string } | null;

interface UserState {
  user: User;
  setUser: (user: User) => void;
  refreshUser: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  refreshUser: async () => {
    try {
      const data = await getCurrentUser();
      if (data?.user) {
        set({
          user: {
            name: data.user.name || data.user.email?.split("@")[0],
            email: data.user.email,
          },
        });
      } else {
        set({ user: null });
      }
    } catch (err) {
      console.error("Failed to fetch user", err);
      set({ user: null });
    }
  },
}));

// Auto-fetch user immediately on client-side
if (typeof window !== "undefined") {
  useUserStore.getState().refreshUser();
}
