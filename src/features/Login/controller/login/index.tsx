// 1.- libraries
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

// 2.- model
import { loginSchema, LoginFormValues } from "../../model/login/schema";
import { buildLoginBody } from "../../model/login/buildBody";
import { loginRequest } from "../../model/login/service";

// 3.- store
import { useUIStore } from "@shared/stores/ui";
import { useAuthStore } from "@shared/stores/auth";

export const useLogin = () => {
    const navigate = useNavigate();
    const { setLoading, showSnackbar } = useUIStore();
    const { setToken } = useAuthStore();

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        mode: "onBlur",
    });

    const mutation = useMutation({
        mutationFn: async (data: LoginFormValues) => {
            const body = buildLoginBody(data);
            return loginRequest(body);
        },
        onSuccess: (data) => {
            // console.log(data.accessToken);
            setToken(data.accessToken);
            showSnackbar({
                message: "Sesion iniciada con exito",
                title: "",
                variant: "success",
            });
            navigate({ to: "/home" });
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

    const onSubmit = (data: LoginFormValues) => {
        setLoading(true);
        mutation.mutate(data);
    };
    return { onSubmit, form, navigate };
};
