// 1.- libraries
import { useRouter } from "@tanstack/react-router";

// 2.- icons
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const GoBack = () => {
    const router = useRouter();
    return (
        <button
            type="button"
            className="flex items-center text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-slate-100"
            onClick={() => router.history.back()}
        >
            <ArrowLeftIcon className="h-5 w-5" />
            <span className="text-sm">Volver</span>
        </button>
    );
};

export default GoBack;
