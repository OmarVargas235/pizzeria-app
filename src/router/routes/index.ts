import { createRouter } from "@tanstack/react-router";

// routes
import { rootRoute } from "./root.route";
import { appLayoutRoute } from "./app-layout.route";

// (los crearemos después)
import { publicRoute } from "./public.route";
import { privateRoute } from "./private.route";

// features (ejemplo)
import LoginFeature from "@features/Login";
import HomeFeature from "@features/Home";

// pages
import { createRoute } from "@tanstack/react-router";

//
// PUBLIC PAGES
//
const loginRoute = createRoute({
    getParentRoute: () => publicRoute,
    path: "/login",
    component: LoginFeature,
});

//
// PRIVATE PAGES
//
const homeRoute = createRoute({
    getParentRoute: () => privateRoute,
    path: "/home",
    component: HomeFeature,
});

//
// ROUTE TREE (ORQUESTADOR REAL)
//
const routeTree = rootRoute.addChildren([
    appLayoutRoute.addChildren([
        publicRoute.addChildren([loginRoute]),
        privateRoute.addChildren([homeRoute]),
    ]),
]);

//
// ROUTER FINAL
//
export const router = createRouter({
    routeTree,
});
