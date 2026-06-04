// 1.- libraries
import {
    CheckCircleIcon,
    ExclamationTriangleIcon,
    XCircleIcon,
    InformationCircleIcon,
} from "@heroicons/react/24/solid";

// 2.- stores
import { SnackbarVariant } from "@shared/types/ui.store";

interface SnackbarProps {
    title: string;
    message: string;
    variant: SnackbarVariant;
}

const variantConfig = {
    success: {
        icon: CheckCircleIcon,
        iconColor: "text-green-500",
    },
    error: {
        icon: XCircleIcon,
        iconColor: "text-red-500",
    },
    warning: {
        icon: ExclamationTriangleIcon,
        iconColor: "text-yellow-500",
    },
    info: {
        icon: InformationCircleIcon,
        iconColor: "text-blue-500",
    },
};

const Snackbar = ({ title, message, variant = "success" }: SnackbarProps) => {
    const config = variantConfig[variant];
    const Icon = config.icon;

    return (
        <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5 fixed top-0 left-1/2 -translate-x-1/2">
            <div className="p-4">
                <div className="flex items-start">
                    <div className="shrink-0">
                        <Icon className={`size-6 ${config.iconColor}`} aria-hidden="true" />
                    </div>

                    <div className="ml-3 flex-1 pt-0.5">
                        <p className="text-sm font-semibold text-gray-900">{title}</p>

                        <p className="mt-1 text-sm text-gray-500">{message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Snackbar;
