// 1.- libraries
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

// 2.- model
import { forgotPasswordSchema, ForgotPasswordFormValues } from "../../model/forgotPassword/schema";
import { buildForgotPasswordBody } from "../../model/forgotPassword/buildBody";
import { forgotPasswordRequest } from "../../model/forgotPassword/service";

// 3.- store
import { useUIStore } from "@shared/stores/ui";

export const useForgotPassword = () => {
    const { setLoading, showSnackbar } = useUIStore();

    const form = useForm<ForgotPasswordFormValues>({
        resolver: zodResolver(forgotPasswordSchema),
        mode: "onBlur",
    });

    const mutation = useMutation({
        mutationFn: async (data: ForgotPasswordFormValues) => {
            const body = buildForgotPasswordBody(data);
            return forgotPasswordRequest(body);
        },
        onSuccess: () => {
            showSnackbar({
                message: "Correo enviado",
                title: "",
                variant: "success",
            });
        },
        onError: () => {
            // console.log("LOGIN ERROR:", error);
            showSnackbar({
                message: "Ha ocurrido un error",
                title: "",
                variant: "error",
            });
        },
        onSettled: () => setLoading(false),
    });

    const onSubmit = (data: ForgotPasswordFormValues) => {
        setLoading(true);
        mutation.mutate(data);
    };
    return { onSubmit, form };
};
