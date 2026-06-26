// 1.- libraries
import { JSX } from "react";

// 2.- components
import Input from "@shared/components/atoms/Input";
import Image from "@shared/components/atoms/Image";
import Button from "@shared/components/atoms/Button";

// 3.- controller
import { useLogin } from "../../../controller/login";

// 4.- model
import { FormValues } from "../../../model/login/types";

// 5.- assets
import Logo from "@assets/img/logo.png";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/solid";

const Login = (): JSX.Element => {
    const { form, onSubmit, navigate } = useLogin();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = form;

    return (
        <div className="w-full">
            <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-dark text-gray-900 dark:text-text transition-colors duration-300">
                <Image alt="logo" src={Logo} width={200} height={200} objectFit="contain" />
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Bienvenido</h2>
                <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">
                    A las mejores pizzas del país
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input<FormValues>
                        name="email"
                        register={register}
                        placeholder="Usuario (email)"
                        rightIcon={
                            <UserIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        }
                        containerClassName="mt-5 w-72"
                        error={errors.email?.message}
                    />
                    <Input<FormValues>
                        type="password"
                        name="password"
                        register={register}
                        placeholder="Contraseña"
                        rightIcon={
                            <LockClosedIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        }
                        containerClassName="mt-4 w-72"
                        error={errors.password?.message}
                    />
                    <div className="text-center">
                        <p
                            className="mt-5 mb-1.5 font-bold cursor-pointer text-zinc-700 hover:text-zinc-500 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                            onClick={() => navigate({ to: "/sign-up" })}
                        >
                            Crear Cuenta
                        </p>

                        <p
                            className="mb-3 font-bold cursor-pointer text-zinc-700 hover:text-zinc-500 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                            onClick={() => navigate({ to: "/forgot-password" })}
                        >
                            ¿Olvidaste tu contraseña?
                        </p>
                    </div>
                    <Button
                        type="submit"
                        className="w-72 mt-3 flex-1 text-white bg-amber-400 hover:bg-amber-500 dark:bg-lavender-500 dark:hover:bg-lavender-600"
                    >
                        Iniciar Sesión
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
