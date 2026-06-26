import { Session } from "./session";

export type AuthStore = {
    session: Session | null;
    setSession: (session: Session) => void;
    logout: () => void;
};
