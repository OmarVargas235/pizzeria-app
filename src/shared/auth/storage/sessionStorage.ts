import { useAuthStore } from "@shared/stores/auth";

export const sessionStorage = {
    getAccessToken: () => {
        return useAuthStore.getState().session?.accessToken;
    },
    getRefreshToken: () => {
        return useAuthStore.getState().session?.refreshToken;
    },
    hasSession: () => {
        return Boolean(sessionStorage.getAccessToken());
    },
    clear: () => {
        useAuthStore.getState().logout();
    },
};
