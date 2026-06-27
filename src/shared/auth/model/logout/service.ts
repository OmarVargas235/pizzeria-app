import { post } from "@shared/api";
import type { LogoutResponse } from "./types";

export const logoutRequest = () => {
    return post<LogoutResponse>("/auth/logout");
};
