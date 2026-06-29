type Pizzeria = {
    data: {
        id: string;
        name: string;
        imageUrl: string;
        address: string;
    }[];
    total: number;
};

export interface PizzeriasRequest {
    page?: number;
    limit?: number;
}

export interface PizzeriasResponse {
    message: string;
    data: Pizzeria;
}
