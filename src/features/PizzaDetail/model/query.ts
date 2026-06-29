import { queryOptions } from "@tanstack/react-query";
import { getPizzeriaDetailRequest } from "./service";
import { PizzeriaDetailRequest } from "./contracts";

export const pizzaDetailQuery = (params: PizzeriaDetailRequest) =>
    queryOptions({
        queryKey: ["pizzeria-detail", params],
        queryFn: () => getPizzeriaDetailRequest(params),
        staleTime: 5 * 60 * 1000,
    });
