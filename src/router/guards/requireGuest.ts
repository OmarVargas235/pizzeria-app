import { redirect } from "@tanstack/react-router";
import { useAuthStore } from "@shared/stores/auth";

export const requireGuest = () => {
    const { session } = useAuthStore.getState();
    if (session?.accessToken) {
        throw redirect({ to: "/home" });
    }
};
