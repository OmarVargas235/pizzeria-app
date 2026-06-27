// 1.- libraries
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

// 2.- model
import { loginSchema, LoginFormValues } from "../../model/login/schema";
import { buildLoginBody } from "../../model/login/buildBody";
import { loginRequest } from "../../model/login/service";

// 3.- shared
import { useUIStore } from "@shared/stores/ui";
import { useAuthStore } from "@shared/stores/auth";
import { profileQuery } from "@shared/auth/queries/profile";

// 4.- i18n
import { getResponseMessage } from "@shared/i18n";
import { loginLocale } from "../../i18n";

export const useLogin = () => {
    const navigate = useNavigate();
    const { setLoading, showSnackbar } = useUIStore();
    const queryClient = useQueryClient();
    const { setSession } = useAuthStore();

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        mode: "onBlur",
    });

    const mutation = useMutation({
        mutationFn: async (data: LoginFormValues) => {
            const body = buildLoginBody(data);
            return loginRequest(body);
        },
        onSuccess: async (data) => {
            setSession({ ...data.data });
            await queryClient.ensureQueryData(profileQuery);
            showSnackbar({
                message: loginLocale.messages.success,
                title: "",
                variant: "success",
            });
            navigate({ to: "/home" });
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

    const onSubmit = (data: LoginFormValues) => {
        setLoading(true);
        mutation.mutate(data);
    };

    return { onSubmit, form, navigate };
};
