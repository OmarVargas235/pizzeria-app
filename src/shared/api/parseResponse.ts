import { RequestError } from "./types";

const isRecord = (value: unknown): value is Record<string, unknown> =>
    typeof value === "object" && value !== null;

const getErrorMessage = (data: unknown): string | undefined => {
    if (isRecord(data) && typeof data.message === "string") {
        return data.message;
    }
    return undefined;
};

export const parseResponse = async <T>(response: Response): Promise<T> => {
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
    return {
        status: response.status,
    } as T;
};
