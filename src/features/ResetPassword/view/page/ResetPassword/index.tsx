// 1.- libraries
import { JSX } from "react";

// 2.- components
import Input from "@shared/components/atoms/Input";
import Image from "@shared/components/atoms/Image";
import Button from "@shared/components/atoms/Button";

// 3.- controller
import { useResetPassword } from "../../../controller/resetPassword";

// 4.- model
import { ResetPasswordFormValues } from "../../../model/resetPassword/schema";

// 5.- assets
import Logo from "@assets/img/logo.png";

const ResetPassword = (): JSX.Element => {
    const { form, onSubmit } = useResetPassword();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = form;

    return (
        <div className="w-full min-h-screen bg-gray-50 dark:bg-[#1F1F23] transition-colors duration-300">
            <div className="flex flex-col items-center justify-center min-h-screen px-5">
                <div className="w-full max-w-md">
                    <div className="flex justify-center mb-6">
                        <Image alt="logo" src={Logo} width={200} height={200} objectFit="contain" />
                    </div>

                    <div className="bg-white dark:bg-[#25252B] rounded-2xl shadow-lg dark:shadow-black/50 p-8 border border-gray-100 dark:border-white/5 transition-colors duration-300">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input<ResetPasswordFormValues>
                                name="password"
                                register={register}
                                placeholder="Contraseña"
                                containerClassName="mt-2 w-full"
                                error={errors.password?.message}
                                type="password"
                            />
                            <Input<ResetPasswordFormValues>
                                name="repeatPassword"
                                register={register}
                                placeholder="Repetir contraseña"
                                containerClassName="mt-2 w-full"
                                error={errors.repeatPassword?.message}
                                type="password"
                            />
                            <Button
                                type="submit"
                                className="w-full mt-4 text-white transition-colors bg-amber-400 hover:bg-amber-500 dark:bg-lavender-500 dark:hover:bg-lavender-600"
                            >
                                Cambiar contraseña
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
