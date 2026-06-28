export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface RequestConfig {
    endpoint: string;
    method: HttpMethod;
    body?: unknown;
    signal?: AbortSignal | undefined;
    api?: string;
    headers?: HeadersInit;
    skipAuthRefresh?: boolean;
}

export interface RequestError extends Error {
    status?: number;
    data?: unknown;
}
