interface IUser {
    name: string;
    lastName: string;
    email: string;
    img: string | null;
}

interface IStore {
    logo: string;
    title: string;
    descriptionStores: string;
    direction: string;
    id: number;
}

interface IStoreDetail {
    pizzeria: {
        logo: string;
        title: string;
        description: string;
        direction: string;
    };
    pizzerias: Array<{
        id: number;
        img: string;
        description: string;
    }>;
}


export type User = Readonly<IUser>;
export type Store = Readonly<IStore>;
export type StoreDetail = Readonly<IStoreDetail>;