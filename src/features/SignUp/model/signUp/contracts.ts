export interface SignUpRequest {
    email: string;
    password: string;
    name: string;
    lastName: string;
}

export interface SignUpResponse {
    message: string;
    data: {
        message: string;
        data: null;
    };
}
