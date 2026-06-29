import { queryOptions } from "@tanstack/react-query";
import { getPizzeriasRequest } from "./service";
import { PizzeriasRequest } from "./contracts";

export const pizzeriasQuery = (params: PizzeriasRequest = {}) =>
    queryOptions({
        queryKey: ["pizzerias", params],
        queryFn: () => getPizzeriasRequest(params),
        staleTime: 5 * 60 * 1000,
    });
