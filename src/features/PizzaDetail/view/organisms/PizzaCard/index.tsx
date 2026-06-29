// 1.- libraries

// 2.- components
import Image from "@shared/components/atoms/Image";

// 3.- icons
import facebook from "@assets/icons/facebook.svg";
import instagram from "@assets/icons/instagram.svg";

// 4.- types
import { PizzeriaDetail } from "@features/PizzaDetail/model/contracts";

// 5.- config
import { ENV } from "@config/env";

type Props = {
    store: PizzeriaDetail;
};

const PizzaCard = ({ store }: Props) => {
    return (
        <div className="flex justify-center">
            <div className="w-[300px] h-[350px] rounded-[15px] bg-white dark:bg-[#1F1F23] border border-gray-200 dark:border-[#2A2A32] shadow-xl transition-transform duration-200 ease-out">
                <div className="flex flex-col items-center p-6 h-full">
                    <div className="relative w-[220px] h-[220px] rounded-full bg-amber-300 dark:bg-lavender-500 flex flex-col items-center justify-center">
                        <div className="absolute top-1.5 w-[120px] h-[120px] rounded-sm border border-gray-500 dark:border-[#3A3A45] overflow-hidden">
                            <Image
                                src={`${ENV.API_BASE_URL}${store.imageUrl}`}
                                alt={store.name}
                                className="w-full h-full object-cover"
                                objectFit="cover"
                            />
                        </div>
                        <h2 className="mt-28 text-xl font-bold dark:text-slate-100">
                            {store.name}
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-slate-400">{store.address}</p>
                    </div>
                    <p className="text-center text-gray-500 dark:text-slate-300 text-sm mt-2">
                        {store.description}
                    </p>
                    <div className="mt-auto flex gap-4">
                        <img
                            src={facebook}
                            alt="facebook"
                            className="w-5 h-5 opacity-70 hover:opacity-100 transition"
                        />
                        <img
                            src={instagram}
                            alt="instagram"
                            className="w-5 h-5 opacity-70 hover:opacity-100 transition"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PizzaCard;
