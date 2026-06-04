// 1.- libraries
import { FieldValues, UseFormRegister, Path } from "react-hook-form";
import { ReactNode } from "react";

// 2.- utils
import { classNames } from "@shared/utils";

type InputProps<T extends FieldValues = FieldValues> = {
    name?: Path<T>;
    register?: UseFormRegister<T>;
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    placeholder?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    type?: string;
    containerClassName?: string;
    inputClassName?: string;
    error?: string | undefined;
};

export default function Input<T extends FieldValues = FieldValues>({
    name,
    register,
    value,
    onChange,
    label,
    placeholder,
    leftIcon,
    rightIcon,
    type = "text",
    containerClassName = "",
    inputClassName = "",
    error,
}: InputProps<T>) {
    const isControlled = value !== undefined && onChange;

    return (
        <div>
            {label && <label className="block text-sm">{label}</label>}

            <div className={classNames("relative mt-2", containerClassName)}>
                {leftIcon && (
                    <span className="absolute left-3 inset-y-0 flex items-center">{leftIcon}</span>
                )}

                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    {...(register && name ? register(name) : {})}
                    onChange={isControlled ? (e) => onChange(e.target.value) : undefined}
                    className={classNames(
                        "w-full border-2 rounded py-2 focus:outline-none focus:ring-1",
                        leftIcon ? "pl-10" : "pl-4",
                        rightIcon ? "pr-10" : "pr-4",
                        error
                            ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                            : "border-gray-400 dark:border-slate-600 focus:border-amber-200 dark:focus:border-lavender-200 focus:ring-amber-200 dark:focus:ring-lavender-200",
                        inputClassName,
                    )}
                />

                {rightIcon && (
                    <span className="absolute right-3 inset-y-0 flex items-center">
                        {rightIcon}
                    </span>
                )}
            </div>

            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}
