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
                message: "Usuario creado con éxito",
                title: "",
                variant: "success",
            });
            navigate({ to: "/login" });
        },
        onError: () => {
            // console.log("LOGIN ERROR:", error);
            // showSnackbar({
            //     message: "Ha ocurrido un error",
            //     title: "",
            //     variant: "error",
            // });
        },
        onSettled: () => setLoading(false),
    });

    const onSubmit = (data: SignUpFormValues) => {
        setLoading(true);
        mutation.mutate(data);
    };
    return { onSubmit, form };
};
