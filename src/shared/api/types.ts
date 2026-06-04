export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface RequestConfig {
    endpoint: string;
    method: HttpMethod;
    body?: unknown;
    token?: string;
    signal?: AbortSignal;
    api?: string;
    headers?: HeadersInit;
}

export interface RequestError extends Error {
    status?: number;
    data?: unknown;
}
