import { Session } from "@shared/types/auth.store";

export type RefreshRequest = {
    refreshToken: string;
};

export type RefreshResponse = {
    data: Session;
    message: string;
};
