// 1.- libraries
import { useNavigate } from "@tanstack/react-router";

// 2.- icons
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// 3.- components
import Input from "@shared/components/atoms/Input";

// 4.- controller
import { usePizzerias } from "../../../controller/pizzerias";

const Home = () => {
    const navigate = useNavigate();

    const { search, handleSearch } = usePizzerias();

    return (
        <div className="p-6">
            <div className="mb-6 w-40 flex flex-col items-center">
                <div className="text-lg font-semi-bold text-gray-600 dark:text-slate-300">
                    Pizzerías
                </div>
                <div className="w-full h-0.5 bg-amber-400 dark:bg-lavender-400 mt-1 rounded-full" />
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-slate-50">Tiendas</h2>
            <p className="text-sm text-gray-500 dark:text-slate-300 mt-1">
                Escoge tus pizzerías favoritas.
            </p>
            <Input
                name="search"
                value={search}
                onChange={handleSearch}
                placeholder="Buscar pizzerías..."
                containerClassName="mt-5 max-w-xs mb-14"
                rightIcon={<MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />}
            />
            <div className="mt-6 overflow-auto max-h-[60vh] pr-2">
                <div className="grid grid-cols-3 gap-4">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="text-center">
                            <div
                                className="h-32 rounded-lg bg-white dark:bg-[#2A2A32] border border-gray-200 dark:border-[#3A3A45] flex items-center justify-center text-gray-500 dark:text-slate-200 mb-1.5 cursor-pointer transition dark:hover:border-cyan-400/40 dark:hover:bg-[#2E2E38]"
                                onClick={() => {
                                    navigate({
                                        to: "/home/$pizzaId",
                                        params: { pizzaId: "123" },
                                    });
                                }}
                            >
                                Pizzería {i + 1}
                            </div>

                            <span className="mt-2 text-sm text-gray-600 dark:text-slate-400">
                                title
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
