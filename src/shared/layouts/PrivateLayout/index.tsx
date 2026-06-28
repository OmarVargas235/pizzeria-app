// 1.- libraries
import { useState } from "react";
import { Outlet } from "@tanstack/react-router";

// 2.- components
import Avatar from "@shared/components/atoms/Avatar";
import ProfileDrawer from "@shared/components/organisms/ProfileDrawer";

// 3.- auth
import { useProfile } from "@shared/auth";

const PrivateLayout = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const { data } = useProfile();
    const { avatarUrl } = data!.data;

    return (
        <div className="h-screen flex flex-col relative dark:bg-dark">
            <header className="h-16 shrink-0 flex justify-end mr-10 mt-10">
                <Avatar
                    className="cursor-pointer"
                    onClick={() => setDrawerOpen(true)}
                    src={avatarUrl}
                />
            </header>

            <ProfileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

            <div className="flex flex-1 overflow-hidden">
                <main className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default PrivateLayout;
