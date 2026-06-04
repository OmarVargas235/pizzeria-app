import { createRoute, Outlet } from "@tanstack/react-router";
import { appLayoutRoute } from "./app-layout.route";
import { requireGuest } from "../guards/requireGuest";

export const publicRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    id: "public",
    component: Outlet,
    beforeLoad: requireGuest,
});
