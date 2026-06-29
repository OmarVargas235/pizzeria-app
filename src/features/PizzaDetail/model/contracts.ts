type Pizza = {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    price: number;
};

type Pizzeria = {
    id: string;
    name: string;
    imageUrl: string;
    address: string;
    description: string;
};

export type PizzeriaDetail = Pizzeria & {
    pizzas: Pizza[];
};

export interface PizzeriaDetailRequest {
    id: string;
}

export interface PizzeriaDetailResponse {
    message: string;
    data: PizzeriaDetail;
}
