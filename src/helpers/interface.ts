interface IUser {
    name: string;
    lastName: string;
    email: string;
    img: string;
}

export type User = Readonly<IUser>;