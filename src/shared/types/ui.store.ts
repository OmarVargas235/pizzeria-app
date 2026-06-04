export type SnackbarVariant = "success" | "error" | "warning" | "info";
export type Theme = "light" | "dark";

export interface SnackbarState {
    open: boolean;
    title: string;
    message: string;
    variant: SnackbarVariant;
    duration?: number;
}

export interface UIStore {
    loading: boolean;
    snackbar: SnackbarState;
    timeoutId: ReturnType<typeof setTimeout> | null;
    theme: Theme;
    setLoading: (value: boolean) => void;
    showSnackbar: (data: Omit<SnackbarState, "open">) => void;
    hideSnackbar: () => void;
    toggleTheme: () => void;
}
