import { ResponseCode } from "@shared/types/response.codes";

export interface CommonLocale {
    buttons: {
        save: string;
        cancel: string;
        delete: string;
        edit: string;
        retry: string;
    };
    messages: {
        defaultError: string;
        networkError: string;
        queryErrorTitle: string;
        queryErrorDescription: string;
    };
}

export interface ValidationLocale {
    required: string;
    invalidEmail: string;
    minLength(length: number): string;
}

export type ResponsesLocale = Record<ResponseCode, string>;

export interface Locale {
    common: CommonLocale;
    validation: ValidationLocale;
    responses: ResponsesLocale;
}
