export interface AuthStore {
    token: string;
    setToken: (value: string) => void;
}
