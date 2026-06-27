import { createRootRoute, Outlet, redirect } from "@tanstack/react-router";
import NotFound from "@shared/components/page/NotFound";
import { useAuthStore } from "@shared/stores/auth";

export const rootRoute = createRootRoute({
    component: () => <Outlet />,
    notFoundComponent: () => <NotFound />,
    loader: () => {
        const { session } = useAuthStore.getState();
        const isRoot = window.location.pathname === "/";
        if (!isRoot) return;
        if (session?.accessToken) {
            throw redirect({ to: "/home" });
        }
        throw redirect({ to: "/login" });
    },
});
