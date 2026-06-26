import { redirect } from "@tanstack/react-router";
import { useAuthStore } from "@shared/stores/auth";

export const requireAuth = () => {
    const { session } = useAuthStore.getState();
    if (!session?.accessToken) {
        throw redirect({ to: "/login" });
    }
};
