import { post } from "@shared/api";
import { LoginFormValues } from "./schema";
import { ResponsesSuccess } from "../../model/login/types";

export const loginRequest = async (body: LoginFormValues): Promise<ResponsesSuccess> => {
    // console.log(body);
    return post("/auth/login", body);
};
