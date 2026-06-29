// 1.- libraries

// 2.- components
import GoBack from "@shared/components/atoms/GoBack";
import EmptyState from "@shared/components/molecules/EmptyState";
import QueryBoundary from "@shared/components/organisms/QueryBoundary";
import Image from "@shared/components/atoms/Image";
import PizzaDetailSkeleton from "../../template/PizzaDetailSkeleton";
import PizzaCard from "../../organisms/PizzaCard";

// 3.- controller
import { usePizzaDetail } from "../../../controller/pizzerias";

// 4.- config
import { ENV } from "@config/env";

// 5.- icons
import { FireIcon } from "@heroicons/react/24/outline";

const PizzaDetail = () => {
    const { isError, isPending, store, isEmpty } = usePizzaDetail();
    return (
        <div className="p-6 space-y-10">
            <QueryBoundary
                loading={isPending}
                error={isError}
                loadingFallback={<PizzaDetailSkeleton />}
            >
                <div>
                    <div className="flex justify-end w-full mb-6">
                        <GoBack />
                    </div>
                    <PizzaCard store={store} />
                </div>
                {isEmpty ? (
                    <EmptyState
                        icon={<FireIcon className="w-16 h-16 text-gray-400" />}
                        title="No hay pizzas disponibles"
                        description="Esta pizzería todavía no ha agregado pizzas."
                    />
                ) : (
                    <div className="grid grid-cols-2 gap-4 max-h-[200px] overflow-y-auto">
                        {store.pizzas.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 bg-white dark:bg-[#2A2A32] border border-transparent dark:border-[#3A3A45] rounded-xl p-3 shadow-sm dark:shadow-none transition dark:hover:bg-[#2E2E38] dark:hover:border-cyan-400/30"
                            >
                                <Image
                                    src={`${ENV.API_BASE_URL}${item.imageUrl}`}
                                    alt={store.name}
                                    className="w-12 h-12 rounded-lg object-cover dark:ring-1 dark:ring-[#3A3A45]"
                                    objectFit="cover"
                                />
                                <div>
                                    <p className="text-sm font-semibold dark:text-slate-100">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-slate-400">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </QueryBoundary>
        </div>
    );
};

export default PizzaDetail;
