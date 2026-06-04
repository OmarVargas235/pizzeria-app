import { post } from "@shared/api";
import { SignUpFormValues } from "./schema";
import { signUpFormValuesSuccess } from "../mocks/success";
import { signUpErrorServer, signUpErrorInvalidCredentials } from "../mocks/error";

type MockMode = "success" | "error401" | "error500";

const MOCK_MODE: MockMode = "success";
const useMock = true;

export const signUpRequest = async (body: SignUpFormValues) => {
    if (useMock) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                switch (MOCK_MODE) {
                    case "success":
                        resolve(signUpFormValuesSuccess);
                        break;

                    case "error401":
                        reject(signUpErrorInvalidCredentials);
                        break;

                    case "error500":
                        reject(signUpErrorServer);
                        break;
                }
            }, 500);
        });
    }
    return post("/auth/sign-up", body);
};
