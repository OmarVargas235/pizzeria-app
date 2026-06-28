import { post } from "@shared/api";
import { RefreshRequest, RefreshResponse } from "./types";

export const refreshRequest = (body: RefreshRequest): Promise<RefreshResponse> => {
    return post("/auth/refresh", body);
};
