// 1.- libraries

// 2.- components
import Avatar from "@shared/components/atoms/Avatar";
import Input from "@shared/components/atoms/Input";
import Button from "@shared/components/atoms/Button";

// 3.- controller
import { useEditProfile } from "../../../controller/editProfile";

// 4.- model
import { EditProfileValues } from "../../../model/editProfile/schema";

// 5.- utils
import { classNames } from "@shared/utils";

type EditProfileModalProps = {
    open: boolean;
    onClose: () => void;
};

const EditProfileModal = ({ open, onClose }: EditProfileModalProps) => {
    const { form, onSubmit, animated, mounted } = useEditProfile({ onClose, open });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = form;

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
            <div
                className={classNames(
                    "fixed flex items-center justify-center bg-black/40 w-full h-full transition-opacity duration-300 ease-out",
                    animated ? "opacity-100" : "opacity-0 pointer-events-none",
                )}
                onClick={onClose}
            />
            <div
                className={classNames(
                    "w-full max-w-md rounded-2xl bg-white dark:bg-[#1F1F23] p-6 shadow-xl dark:shadow-2xl border border-transparent dark:border-[#2A2A32] transition-all duration-300 ease-out",
                    animated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10",
                )}
            >
                <div className="mb-6 text-center">
                    <h2 className="text-lg font-semibold dark:text-slate-100">Editar perfil</h2>
                    <p className="text-sm text-gray-500 dark:text-slate-400">
                        Actualiza tu información
                    </p>
                </div>
                <div className="flex justify-center mb-6">
                    <Avatar size="xl" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="mx-auto w-full max-w-xs space-y-5">
                        <Input<EditProfileValues>
                            name="name"
                            register={register}
                            placeholder="Nombre"
                            error={errors.name?.message}
                        />
                        <div className="flex gap-3">
                            <Button
                                type="button"
                                onClick={onClose}
                                className="flex-1 bg-gray-100 dark:bg-[#2A2A32] text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-[#2E2E38] dark:hover:text-slate-100"
                            >
                                Cancelar
                            </Button>
                            <Button
                                type="submit"
                                className="flex-1 text-white bg-amber-400 hover:bg-amber-500 dark:bg-lavender-500 dark:hover:bg-lavender-600"
                            >
                                Guardar
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfileModal;
