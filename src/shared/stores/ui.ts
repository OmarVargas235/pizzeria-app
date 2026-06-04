// 1.- libraries
import { create } from "zustand";
import { persist } from "zustand/middleware";

// 2.- types
import { UIStore } from "../types/ui.store";

const DURATION_SNACKBAR = 2500;

const applyThemeDOM = (theme: "light" | "dark") => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
};

export const useUIStore = create<UIStore>()(
    persist(
        (set, get) => ({
            loading: false,
            snackbar: {
                message: "",
                open: false,
                title: "",
                variant: "info",
                duration: DURATION_SNACKBAR,
            },
            timeoutId: null,
            theme: "light",

            setLoading: (value) => set({ loading: value }),
            showSnackbar: (data) => {
                const { timeoutId } = get();
                if (timeoutId) clearTimeout(timeoutId);
                set({ snackbar: { open: true, ...data } });
                const id = setTimeout(() => {
                    get().hideSnackbar();
                }, data.duration ?? DURATION_SNACKBAR);
                set({ timeoutId: id });
            },
            hideSnackbar: () => {
                const { timeoutId } = get();
                if (timeoutId) clearTimeout(timeoutId);
                set({
                    snackbar: { ...get().snackbar, open: false },
                    timeoutId: null,
                });
            },
            toggleTheme: () => {
                const next = get().theme === "dark" ? "light" : "dark";
                set({ theme: next });
                applyThemeDOM(next);
            },
        }),
        {
            name: "ui-store",
            partialize: (state) => ({
                theme: state.theme,
            }),
            onRehydrateStorage: () => (state) => {
                if (state?.theme) {
                    applyThemeDOM(state.theme);
                }
            },
        },
    ),
);
