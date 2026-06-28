export const executeRequest = (url: string, options: RequestInit): Promise<Response> => {
    return fetch(url, options);
};
