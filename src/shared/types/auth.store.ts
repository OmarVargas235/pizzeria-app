export interface Session {
    accessToken: string;
    refreshToken: string;
}

export type AuthStore = {
    session: Session | null;
    setSession: (session: Session) => void;
    logout: () => void;
};
