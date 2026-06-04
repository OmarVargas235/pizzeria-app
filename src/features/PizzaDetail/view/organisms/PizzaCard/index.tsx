// import { useRef, MouseEvent } from "react";

import facebook from "@assets/icons/facebook.svg";
import instagram from "@assets/icons/instagram.svg";

const PizzaCard = () => {
    // const cardRef = useRef<HTMLDivElement | null>(null);

    // const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    //     const card = cardRef.current;
    //     if (!card) return;
    //     const rect = e.currentTarget.getBoundingClientRect();
    //     const x = e.clientX - rect.left;
    //     const y = e.clientY - rect.top;
    //     const centerX = rect.width / 2;
    //     const centerY = rect.height / 2;
    //     const rotateY = ((x - centerX) / centerX) * 50;
    //     const rotateX = -((y - centerY) / centerY) * 50;
    //     card.style.transform = `
    //         rotateX(${rotateX}deg)
    //         rotateY(${rotateY}deg)
    //         scale(1.05)
    //     `;
    // };

    // const handleMouseLeave = () => {
    //     const card = cardRef.current;
    //     if (!card) return;
    //     card.style.transform = `
    //         rotateX(0deg)
    //         rotateY(0deg)
    //         scale(1)
    //     `;
    // };

    return (
        <div
            className="flex justify-center"
            // onMouseMove={handleMouseMove}
            // onMouseLeave={handleMouseLeave}
        >
            <div className="w-[300px] h-[350px] rounded-[15px] bg-white dark:bg-[#1F1F23] border border-gray-200 dark:border-[#2A2A32] shadow-xl transition-transform duration-200 ease-out">
                <div className="flex flex-col items-center p-6 h-full">
                    <div className="relative w-[220px] h-[220px] rounded-full bg-amber-300 dark:bg-lavender-500 flex flex-col items-center justify-center">
                        <div className="absolute top-1.5 w-[120px] h-[120px] rounded-sm border border-gray-500 dark:border-[#3A3A45] overflow-hidden">
                            <img
                                src="https://dummyimage.com/600x400/E0E1DE/fff"
                                alt="pizza"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="mt-28 text-xl font-bold dark:text-slate-100">
                            Pizza Italiana
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-slate-400">Calle 2 #3-4</p>
                    </div>
                    <p className="text-center text-gray-500 dark:text-slate-300 text-sm mt-2">
                        Hecha con amor en horno de piedra, esto es una description de la pizzeria
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
