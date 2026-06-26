// 1.- libraries
import { Outlet, useLocation } from "@tanstack/react-router";

// 2.- components
import Image from "@shared/components/atoms/Image";

// 3.- assets
import imagebkg from "@assets/img/imagebkg.png";
import Pizza from "@assets/img/Pizza.png";

// 4.- utils
import { classNames } from "@shared/utils";

const PizzaLayout = () => {
    const location = useLocation();
    const isProfile = location.pathname === "/profile";
    return (
        <div
            className="flex h-screen"
            style={isProfile ? { backgroundImage: `url(${imagebkg})` } : undefined}
        >
            <aside
                style={!isProfile ? { backgroundImage: `url(${imagebkg})` } : undefined}
                className="w-full h-full bg-cover bg-center flex justify-center items-center"
            >
                <Image
                    src={Pizza}
                    alt="pizza"
                    width={300}
                    height={300}
                    priority
                    objectFit="contain"
                    className="animate-spin [animation-duration:7s]"
                />
            </aside>
            <main
                className={classNames(
                    "w-full h-screen overflow-y-auto",
                    !isProfile ? "bg-gray-50" : "",
                )}
            >
                <Outlet />
            </main>
        </div>
    );
};

export default PizzaLayout;
