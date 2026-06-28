import { sessionStorage } from "@shared/auth/storage/sessionStorage";
import { RequestConfig } from "./types";

export const buildRequest = ({ method, body, signal, headers }: RequestConfig): RequestInit => {
    const accessToken = sessionStorage.getAccessToken();
    const isFormData = body instanceof FormData;
    const requestHeaders: Record<string, string> = {
        Accept: "application/json",
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        ...(headers as Record<string, string>),
    };
    if (accessToken) {
        requestHeaders.Authorization = `Bearer ${accessToken}`;
    }
    const options: RequestInit = {
        method,
        headers: requestHeaders,
        ...(signal ? { signal } : {}),
    };
    const hasBody = body !== undefined && ["POST", "PUT", "PATCH", "DELETE"].includes(method);
    if (hasBody) {
        options.body = isFormData ? body : JSON.stringify(body);
    }
    return options;
};
