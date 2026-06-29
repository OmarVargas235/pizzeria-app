import { get } from "@shared/api";
import { PizzeriasRequest, PizzeriasResponse } from "./contracts";

export const getPizzeriasRequest = async ({
    page = 1,
    limit = 10,
}: PizzeriasRequest = {}): Promise<PizzeriasResponse> => {
    return get(`/store?page=${page}&limit=${limit}`);
};
