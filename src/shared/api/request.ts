import { ENV } from "@config/env";
import { RequestConfig, RequestError } from "./types";
import { buildRequest } from "./buildRequest";
import { executeRequest } from "./executeRequest";
import { parseResponse } from "./parseResponse";
import { refreshSession } from "@shared/auth/model/refresh/refreshSession";

const API_BASE = ENV.API_BASE_URL;

const request = async <T>({
    endpoint,
    method,
    body,
    signal,
    api,
    headers,
    skipAuthRefresh,
}: RequestConfig): Promise<T> => {
    const url = `${api ?? API_BASE}${endpoint}`;
    const performRequest = async (): Promise<T> => {
        const options = buildRequest({
            endpoint,
            method,
            ...(api ? { api } : {}),
            body,
            ...(headers ? { headers } : {}),
            signal,
        });
        const response = await executeRequest(url, options);
        return parseResponse<T>(response);
    };
    try {
        return await performRequest();
    } catch (error) {
        const requestError = error as RequestError;
        if (requestError.status === 401 && !skipAuthRefresh) {
            await refreshSession();
            return performRequest();
        }
        throw error;
    }
};

export const get = <T>(endpoint: string, config?: Omit<RequestConfig, "endpoint" | "method">) =>
    request<T>({
        endpoint,
        method: "GET",
        ...config,
    });

export const post = <T>(
    endpoint: string,
    body?: unknown,
    config?: Omit<RequestConfig, "endpoint" | "method" | "body">,
) =>
    request<T>({
        endpoint,
        method: "POST",
        body,
        ...config,
    });

export const put = <T>(
    endpoint: string,
    body?: unknown,
    config?: Omit<RequestConfig, "endpoint" | "method" | "body">,
) =>
    request<T>({
        endpoint,
        method: "PUT",
        body,
        ...config,
    });

export const patch = <T>(
    endpoint: string,
    body?: unknown,
    config?: Omit<RequestConfig, "endpoint" | "method" | "body">,
) =>
    request<T>({
        endpoint,
        method: "PATCH",
        body,
        ...config,
    });

export const deleteRequest = <T>(
    endpoint: string,
    config?: Omit<RequestConfig, "endpoint" | "method">,
) =>
    request<T>({
        endpoint,
        method: "DELETE",
        ...config,
    });
