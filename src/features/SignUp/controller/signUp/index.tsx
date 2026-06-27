// 1.- libraries
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

// 2.- model
import { signUpSchema, SignUpFormValues } from "../../model/signUp/schema";
import { buildSignUpBody } from "../../model/signUp/buildBody";
import { signUpRequest } from "../../model/signUp/service";

// 3.- store
import { useUIStore } from "@shared/stores/ui";

// 4.- i18n
import { registerLocale } from "../../i18n";
import { getResponseMessage } from "@shared/i18n";

export const useSignUp = () => {
    const navigate = useNavigate();
    const { setLoading, showSnackbar } = useUIStore();

    const form = useForm<SignUpFormValues>({
        resolver: zodResolver(signUpSchema),
        mode: "onBlur",
    });

    const mutation = useMutation({
        mutationFn: async (data: SignUpFormValues) => {
            const body = buildSignUpBody(data);
            return signUpRequest(body);
        },
        onSuccess: () => {
            showSnackbar({
                message: registerLocale.messages.success,
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

    const onSubmit = (data: SignUpFormValues) => {
        setLoading(true);
        mutation.mutate(data);
    };
    return { onSubmit, form };
};
