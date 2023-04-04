// 1.- librerias
import { useState, useEffect, useCallback, createContext } from 'react';

// 2.- components
import Loader from '../layauts/spinner/Spinner';

// 3.- interfaces
import { Props, SubmitLogin } from './interface';
import { Response } from '../services/interfaces';
import { User } from '../helpers/interface';

// 4.- services
import { auth, Event } from '../services/auth';

export interface AuthContextInterface {
	isAuth: boolean;
	submitLogin: ({ email, password }: SubmitLogin) => Promise<Response<User>>;
}

export const AuthContext = createContext<AuthContextInterface>(
	{} as AuthContextInterface
);

const AuthProvider = ({ children }: Props): JSX.Element => {

    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect((): void => {

		Promise.all([
			jwtCheck(),
		]).finally(() => setLoading(false));

	}, []);

    const jwtCheck = useCallback(async (): Promise<void> => {

		return await new Promise(resolve => {

			auth.init();

			const event: Event = auth.getEvent();

			if (event === 'onAutoLogin') {

				setIsAuth(true);
				auth.signInWithToken();
				resolve();

			} else if (event === 'onAutoLogout') {

				setIsAuth(false);
				resolve();

			} else if (event === 'onNoAccessToken') {

				setIsAuth(false);
				resolve();
			}
		});

	}, []);

	const submitLogin =
		async ({ email, password }: SubmitLogin): Promise<Response<User>> => {

			return await auth
				.signIn(email, password)
				.then((data) => {

					void jwtCheck();
					return data;
				})
				.catch((err) => {

					return err;
				});
		};

    return <AuthContext.Provider value={{
        isAuth,
		submitLogin,
    }}>
        { loading ? <Loader isLoading={true} /> : children }
    </AuthContext.Provider>;
}

export default AuthProvider;