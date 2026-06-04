import { createRootRoute, Outlet, redirect } from "@tanstack/react-router";
import NotFound from "@shared/components/page/NotFound";
import { useAuthStore } from "@shared/stores/auth";

export const rootRoute = createRootRoute({
    component: () => <Outlet />,
    notFoundComponent: () => <NotFound />,
    loader: () => {
        const { token } = useAuthStore.getState();
        const isRoot = window.location.pathname === "/";
        if (!isRoot) return;
        if (token) {
            throw redirect({ to: "/home" });
        }
        throw redirect({ to: "/login" });
    },
});
