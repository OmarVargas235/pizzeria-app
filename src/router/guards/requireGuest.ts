import { redirect } from "@tanstack/react-router";
import { useAuthStore } from "@shared/stores/auth";

export const requireGuest = () => {
    const { token } = useAuthStore.getState();
    const isAuthenticated = !!token;
    if (isAuthenticated) {
        throw redirect({ to: "/home" });
    }
};
