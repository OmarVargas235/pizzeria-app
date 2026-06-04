import { post } from "@shared/api";
import { ForgotPasswordFormValues } from "./schema";
import { forgotPasswordSuccess } from "../mocks/success";
import { forgotPasswordErrorInvalidCredentials, forgotPasswordErrorServer } from "../mocks/error";

type MockMode = "success" | "error401" | "error500";

const MOCK_MODE: MockMode = "success";
const useMock = true;

export const forgotPasswordRequest = async (body: ForgotPasswordFormValues) => {
    if (useMock) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                switch (MOCK_MODE) {
                    case "success":
                        resolve(forgotPasswordSuccess);
                        break;

                    case "error401":
                        reject(forgotPasswordErrorInvalidCredentials);
                        break;

                    case "error500":
                        reject(forgotPasswordErrorServer);
                        break;
                }
            }, 500);
        });
    }
    return post("/auth/forgot-passwordRequest", body);
};
