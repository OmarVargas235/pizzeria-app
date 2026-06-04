import { JSX } from "react";

import Input from "@shared/components/atoms/Input";
import Button from "@shared/components/atoms/Button";
import GoBack from "@shared/components/atoms/GoBack";

import { useSignUp } from "../../../controller/signUp";
import { FormValues } from "../../../model/signUp/types";

const SignUp = (): JSX.Element => {
    const { form, onSubmit } = useSignUp();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = form;

    return (
        <div
            className="
            w-full min-h-screen
            flex flex-col items-center
            py-10 px-5
            bg-gray-50
            dark:bg-[#1F1F23]
            transition-colors duration-300
        "
        >
            <div className="w-full max-w-md flex justify-end mb-6">
                <GoBack />
            </div>
            <div className="w-full max-w-md bg-white dark:bg-[#1F1F23] rounded-2xl shadow-lg dark:shadow-[0_0_40px_rgba(0,0,0,0.6)] p-8 border border-gray-100 dark:border-white/5 backdrop-blur transition-all duration-300">
                <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
                    Formulario de registro
                </h2>
                <p className="text-center mt-2 text-sm text-gray-500 dark:text-zinc-400">
                    Crea tu cuenta para continuar
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    <Input<FormValues>
                        name="name"
                        register={register}
                        placeholder="Nombre"
                        containerClassName="mt-4 w-full"
                        error={errors.name?.message}
                    />
                    <Input<FormValues>
                        name="lastName"
                        register={register}
                        placeholder="Apellido"
                        containerClassName="mt-4 w-full"
                        error={errors.lastName?.message}
                    />
                    <Input<FormValues>
                        name="email"
                        register={register}
                        placeholder="Email"
                        containerClassName="mt-4 w-full"
                        error={errors.email?.message}
                    />
                    <Input<FormValues>
                        name="password"
                        register={register}
                        placeholder="Contraseña"
                        type="password"
                        containerClassName="mt-4 w-full"
                        error={errors.password?.message}
                    />
                    <Input<FormValues>
                        name="repeatPassword"
                        register={register}
                        placeholder="Repetir contraseña"
                        type="password"
                        containerClassName="mt-4 w-full"
                        error={errors.repeatPassword?.message}
                    />
                    <Button
                        type="submit"
                        className="w-full mt-6 text-white transition-colors bg-amber-400 hover:bg-amber-500 dark:bg-lavender-500 dark:hover:bg-lavender-600"
                    >
                        Crear cuenta
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
