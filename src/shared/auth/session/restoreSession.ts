// 1.- libraries
import { QueryClient } from "@tanstack/react-query";

import { sessionStorage } from "../storage/sessionStorage";
import { profileQuery } from "../queries/profile";

export const restoreSession = async (queryClient: QueryClient) => {
    if (!sessionStorage.hasSession()) return;
    try {
        await queryClient.ensureQueryData(profileQuery);
    } catch {
        sessionStorage.clear();
    }
};
