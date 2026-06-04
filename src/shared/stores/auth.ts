import { create } from "zustand";
import { persist } from "zustand/middleware";

// 2.- types
import { AuthStore } from "../types/auth.store";

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            token: "",
            setToken: (value) => set({ token: value }),
            logout: () => set({ token: "" }),
        }),
        {
            name: "auth-storage",
        },
    ),
);
