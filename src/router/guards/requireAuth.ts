import { redirect } from "@tanstack/react-router";
import { useAuthStore } from "@shared/stores/auth";

export const requireAuth = () => {
    // const { user, token, isHydrated } = useAuthStore.getState();
    const { token } = useAuthStore.getState();
    // 1. aún no se ha cargado el estado (persistencia)
    // if (!isHydrated) return;
    // 2. no autenticado
    // if (!token || !user) {
    if (!token) {
        throw redirect({ to: "/login" });
    }
};
