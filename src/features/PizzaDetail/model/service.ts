import { get } from "@shared/api";
import { PizzeriaDetailRequest, PizzeriaDetailResponse } from "./contracts";

export const getPizzeriaDetailRequest = async ({
    id,
}: PizzeriaDetailRequest): Promise<PizzeriaDetailResponse> => {
    return get(`/store/${id}`);
};
