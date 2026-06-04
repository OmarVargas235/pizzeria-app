// 1.- libraries
// import { ArrowLeftIcon, HomeIcon } from "@heroicons/react/24/outline";
// import { Instagram, Facebook } from "@heroicons/react/24/outline";

// 2.- components
import GoBack from "@shared/components/atoms/GoBack";
import PizzaCard from "../../organisms/PizzaCard";

const PizzaDetail = () => {
    return (
        <div className="p-6 space-y-10">
            <div>
                <div className="flex justify-end w-full mb-6">
                    <GoBack />
                </div>
                <PizzaCard />
            </div>
            <div className="grid grid-cols-2 gap-4 max-h-[200px] overflow-y-auto">
                {[
                    { name: "Pizza Pepperoni", description: "Clásica y picante" },
                    { name: "Pizza BBQ", description: "Sabor ahumado" },
                    { name: "Pizza BBQ", description: "Sabor ahumado" },
                    { name: "Pizza BBQ", description: "Sabor ahumado" },
                    { name: "Pizza BBQ", description: "Sabor ahumado" },
                    { name: "Pizza BBQ", description: "Sabor ahumado" },
                    { name: "Pizza BBQ", description: "Sabor ahumado" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 bg-white dark:bg-[#2A2A32] border border-transparent dark:border-[#3A3A45] rounded-xl p-3 shadow-sm dark:shadow-none transition dark:hover:bg-[#2E2E38] dark:hover:border-cyan-400/30"
                    >
                        <img
                            src="https://via.placeholder.com/50"
                            className="w-12 h-12 rounded-lg object-cover dark:ring-1 dark:ring-[#3A3A45]"
                        />
                        <div>
                            <p className="text-sm font-semibold dark:text-slate-100">{item.name}</p>
                            <p className="text-xs text-gray-500 dark:text-slate-400">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PizzaDetail;
