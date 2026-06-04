import { createRoute, Outlet } from "@tanstack/react-router";
import { appLayoutRoute } from "./app-layout.route";
import { requireAuth } from "../guards/requireAuth";
import PrivateLayout from "@shared/layouts/PrivateLayout";

export const privateRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    id: "private",
    component: PrivateLayout,
    beforeLoad: requireAuth,
});

export const privateOutletRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    id: "private-outlet",
    component: Outlet,
    beforeLoad: requireAuth,
});
