import { get } from "@shared/api";
import type { ProfileResponse } from "./types";

export const profileRequest = () => {
    return get<ProfileResponse>("/profile/me");
};
