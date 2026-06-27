// 1.- libraries
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "@tanstack/react-router";

// 2.- model
import { resetPasswordSchema, ResetPasswordFormValues } from "../../model/resetPassword/schema";
import { buildResetPasswordBody } from "../../model/resetPassword/buildBody";
import { resetPasswordRequest } from "../../model/resetPassword/service";

// 3.- store
import { useUIStore } from "@shared/stores/ui";

// 4.- i18n
import { getResponseMessage } from "@shared/i18n";
import { resetPasswordLocale } from "../../i18n";

export const useResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setLoading, showSnackbar } = useUIStore();

    const form = useForm<ResetPasswordFormValues>({
        resolver: zodResolver(resetPasswordSchema),
        mode: "onBlur",
    });

    const mutation = useMutation({
        mutationFn: async (data: ResetPasswordFormValues) => {
            const token = new URLSearchParams(location.search).get("token");
            const body = buildResetPasswordBody({ password: data.password, token: token || "" });
            return resetPasswordRequest(body);
        },
        onSuccess: () => {
            showSnackbar({
                message: resetPasswordLocale.messages.success,
                title: "",
                variant: "success",
            });
            navigate({ to: "/login" });
        },
        onError: (error) => {
            showSnackbar({
                message: getResponseMessage(error.message),
                title: "",
                variant: "error",
            });
        },
        onSettled: () => setLoading(false),
    });

    const onSubmit = (data: ResetPasswordFormValues) => {
        setLoading(true);
        mutation.mutate(data);
    };
    return { onSubmit, form };
};
