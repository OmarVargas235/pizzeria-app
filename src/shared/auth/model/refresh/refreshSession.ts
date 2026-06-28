// 1.- store
import { useAuthStore } from "@shared/stores/auth";

// 2.- storage
import { sessionStorage } from "../../storage/sessionStorage";

// 3.- service
import { refreshRequest } from "./service";

// 4.- types
import { Session } from "@shared/types/auth.store";

let pendingRefresh: Promise<Session> | null = null;

export const refreshSession = async (): Promise<Session> => {
    if (pendingRefresh) {
        return pendingRefresh;
    }
    pendingRefresh = (async () => {
        const authStore = useAuthStore.getState();
        const refreshToken = sessionStorage.getRefreshToken();
        if (!refreshToken) {
            authStore.logout();
            throw new Error("Refresh token not found.");
        }
        try {
            const { data: session } = await refreshRequest({ refreshToken });
            authStore.setSession(session);
            return session;
        } catch (error) {
            authStore.logout();
            throw error;
        } finally {
            pendingRefresh = null;
        }
    })();
    return pendingRefresh;
};
