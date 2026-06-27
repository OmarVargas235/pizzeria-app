// 1.- libraries
import { createRouter, createRoute } from "@tanstack/react-router";

// 2.- routes
import { rootRoute } from "./routes/root.route";
import { appLayoutRoute } from "./routes/app-layout.route";
import { publicRoute } from "./routes/public.route";
import { privateRoute, privateOutletRoute } from "./routes/private.route";

// 3.- roots
import LoginFeature from "@features/Login";
import SignUpFeature from "@features/SignUp";
import ForgotPasswordFeature from "@features/ForgotPassword";
import ResetPasswordFeature from "@features/ResetPassword";
import HomeFeature from "@features/Home";
import ProfileFeature from "@features/Profile";
import PizzaDetail from "@features/PizzaDetail";

const loginRoute = createRoute({
    getParentRoute: () => publicRoute,
    path: "/login",
    component: LoginFeature,
});

const signUpRoute = createRoute({
    getParentRoute: () => publicRoute,
    path: "/sign-up",
    component: SignUpFeature,
});

const forgotPasswordRoute = createRoute({
    getParentRoute: () => publicRoute,
    path: "/forgot-password",
    component: ForgotPasswordFeature,
});

const resetPasswordRoute = createRoute({
    getParentRoute: () => publicRoute,
    path: "/reset-password",
    component: ResetPasswordFeature,
});

const homeRoute = createRoute({
    getParentRoute: () => privateRoute,
    path: "/home",
    component: HomeFeature,
});

const pizzaDetailRoute = createRoute({
    getParentRoute: () => privateRoute,
    path: "/home/$pizzaId",
    component: PizzaDetail,
});

const profileRoute = createRoute({
    getParentRoute: () => privateOutletRoute,
    path: "/profile",
    component: ProfileFeature,
});

const routeTree = rootRoute.addChildren([
    appLayoutRoute.addChildren([
        publicRoute.addChildren([loginRoute, signUpRoute, forgotPasswordRoute, resetPasswordRoute]),
        privateRoute.addChildren([homeRoute, pizzaDetailRoute]),
        privateOutletRoute.addChildren([profileRoute]),
    ]),
]);

export const router = createRouter({ routeTree });
