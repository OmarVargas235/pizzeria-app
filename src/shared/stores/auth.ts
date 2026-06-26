// 1.- libraries
import { create } from "zustand";
import { persist } from "zustand/middleware";

// 2.- types
import { AuthStore } from "../types/auth.store";

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            session: null,
            setSession: (value) => set({ session: value }),
            logout: () => set({ session: null }),
        }),
        {
            name: "auth-storage",
        },
    ),
);
