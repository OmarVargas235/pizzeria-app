import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root.route";

import PizzaLayout from "@shared/layouts/AppLayout";

export const appLayoutRoute = createRoute({
    getParentRoute: () => rootRoute,
    id: "app-layout",
    component: PizzaLayout,
});
