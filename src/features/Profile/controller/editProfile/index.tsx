// 1.- libraries
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

// 2.- model
import { editProfileSchema, EditProfileValues } from "../../model/editProfile/schema";
import { buildBody } from "../../model/editProfile/buildBody";
import { loginRequest } from "../../model/editProfile/service";

// 3.- store
import { useUIStore } from "@shared/stores/ui";

type EditProfileProps = {
    onClose: () => void;
    open: boolean;
};

export const useEditProfile = ({ open, onClose }: EditProfileProps) => {
    const { setLoading, showSnackbar } = useUIStore();

    const [mounted, setMounted] = useState(open);
    const [animated, setAnimated] = useState(false);

    const form = useForm<z.input<typeof editProfileSchema>>({
        resolver: zodResolver(editProfileSchema),
    });

    const mutation = useMutation({
        mutationFn: async (data: EditProfileValues) => {
            const body = buildBody(data);
            return loginRequest(body);
        },
        onSuccess: () => {
            // console.log(data);
            showSnackbar({
                message: "Sesion iniciada con exito",
                title: "",
                variant: "success",
            });
            onClose();
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

    useEffect(() => {
        let timer;
        if (open) {
            setMounted(true);
            timer = setTimeout(() => setAnimated(true), 100);
        } else {
            setAnimated(false);
            timer = setTimeout(() => setMounted(false), 300);
        }
        return () => clearTimeout(timer);
    }, [open]);

    const onSubmit = (data: EditProfileValues) => {
        setLoading(true);
        mutation.mutate(data);
    };

    return { onSubmit, form, mounted, animated };
};
