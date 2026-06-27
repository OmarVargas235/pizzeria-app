// 1.- libraries
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

// 2.- model
import { logoutRequest } from "../model/logout/service";
import { useAuthStore } from "@shared/stores/auth";

// 3.- query
import { queryClient } from "@shared/query/queryClient";

type Props = {
    onSuccess: () => void;
    onError?: () => void;
    onSettled?: () => void;
};

export const useLogout = ({ onSuccess, onError = () => {}, onSettled = () => {} }: Props) => {
    const navigate = useNavigate();
    const { logout: clearSession } = useAuthStore();

    const mutation = useMutation({
        mutationFn: logoutRequest,
        onSuccess: () => {
            clearSession();
            queryClient.clear();
            onSuccess();
            navigate({ to: "/login" });
        },
        onError,
        onSettled,
    });

    return {
        logout: mutation.mutate,
        isPending: mutation.isPending,
    };
};
