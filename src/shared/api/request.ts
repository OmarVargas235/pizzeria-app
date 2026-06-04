import { RequestConfig, RequestError } from "./types";

const API_BASE = "";
const isRecord = (value: unknown): value is Record<string, unknown> =>
    typeof value === "object" && value !== null;

const getErrorMessage = (data: unknown): string | undefined => {
    if (isRecord(data) && typeof data.message === "string") {
        return data.message;
    }
    return undefined;
};

const request = async <T>({
    endpoint,
    method,
    body,
    token,
    signal,
    api,
    headers,
}: RequestConfig): Promise<T> => {
    try {
        const requestHeaders: Record<string, string> = {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...(headers as Record<string, string>),
        };
        if (token) {
            requestHeaders.Authorization = `Bearer ${token}`;
        }
        const options: RequestInit = {
            method: method,
            headers: requestHeaders,
            ...(signal ? { signal } : {}),
        };
        const hasBody = body !== undefined && ["POST", "PUT", "PATCH", "DELETE"].includes(method);
        if (hasBody) {
            options.body = JSON.stringify(body);
        }
        const response = await fetch(`${api ?? API_BASE}${endpoint}`, options);
        const contentType = response.headers.get("content-type") ?? "";
        const isJson = contentType.includes("application/json");
        let data: unknown = null;
        if (isJson) {
            data = await response.json().catch(() => null);
        }
        if (!response.ok) {
            const error = new Error(
                getErrorMessage(data) ?? response.statusText ?? "Request error",
            ) as RequestError;
            error.status = response.status;
            error.data = data;
            throw error;
        }
        if (isJson) {
            return data as T;
        }
        return { status: response.status } as T;
    } catch (err) {
        if (err instanceof Error) {
            throw err;
        }
        const error = new Error("Unknown request error") as RequestError;
        error.data = err;
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
