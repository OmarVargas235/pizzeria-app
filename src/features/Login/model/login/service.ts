import { post } from "@shared/api";
import { LoginFormValues } from "./schema";
import { loginSuccess } from "../mocks/success";
import { loginErrorInvalidCredentials, loginErrorServer } from "../mocks/error";
import { ResponsesSuccess } from "../../model/login/types";

type MockMode = "success" | "error401" | "error500";

const MOCK_MODE: MockMode = "success";
const useMock = true;

export const loginRequest = async (body: LoginFormValues): Promise<ResponsesSuccess> => {
    if (useMock) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                switch (MOCK_MODE) {
                    case "success":
                        resolve(loginSuccess);
                        break;

                    case "error401":
                        reject(loginErrorInvalidCredentials);
                        break;

                    case "error500":
                        reject(loginErrorServer);
                        break;
                }
            }, 500);
        });
    }
    return post("/auth/login", body);
};
