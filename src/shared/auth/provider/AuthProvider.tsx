// 1.- libraries
import { useState, useEffect, type ReactNode } from "react";
import { useQueryClient } from "@tanstack/react-query";

// 2.- session
import { restoreSession } from "../session/restoreSession";

type Props = {
    children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
    const [isInitializing, setIsInitializing] = useState(true);

    const queryClient = useQueryClient();

    useEffect(() => {
        const initialize = async () => {
            await restoreSession(queryClient);
            setIsInitializing(false);
        };
        void initialize();
    }, [queryClient]);

    if (isInitializing) {
        return null;
    }
    return children;
};
