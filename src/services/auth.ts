import axios, { AxiosError, AxiosResponse } from 'axios';
import jwtDecode from 'jwt-decode';

import { Response } from './interfaces';
import { generateError } from './utils';
import { User } from '../helpers/interface';

interface IToken {
	email: string;
	exp: number;
	iat: number;
}

export type Event = 'onAutoLogin' | 'onAutoLogout' | 'onNoAccessToken' | '';

const ednpoint = '/auth';

class Auth {
	private typeEvent: Event = '';

	public init = (): void => {
		this.handleAuthentication();
	};

	private readonly on = (event: Event): void => {
		this.typeEvent = event;
	};

	public getEvent = (): Event => {
		return this.typeEvent;
	};

	public signIn = async (email: string, password: string): Promise<Response<{token: string; email: string;}>> => {

		return await new Promise((resolve) => {
			axios
				.post(ednpoint, {
					email,
					password,
				})
				.then(({ data:resp }: AxiosResponse) => {

					const { status, data, message } = resp as Response<{token: string; email: string;}>;

					this.setSession(data === null ? null : data.token);

					resolve({ data, message, status });
				})
				.catch(({ response }: AxiosError) => {

					const error = response !== undefined ? generateError(response) : generateError(null);

					resolve(error);
				});
		});
	};

	public setSession = (ACCESS_TOKEN: string | null): void => {

		if (ACCESS_TOKEN !== null) {

			window.localStorage.setItem('jwt_access_token', ACCESS_TOKEN);
			axios.defaults.headers.common.Authorization = `Bearer ${ACCESS_TOKEN}`;

		} else {

			localStorage.removeItem('jwt_access_token');
			delete axios.defaults.headers.common.Authorization;
		}
	};

	public signInWithToken = async (): Promise<Response<User>> => {

		return await new Promise((resolve) => {
			axios
				.get('/users/session-info')
				.then(({ data:resp }: AxiosResponse) => {

					const { status, data, message } = resp as Response<User>;

					this.setSession(this.getAccessToken());

					resolve({ data, message, status });
				})
				.catch(({ response }: AxiosError) => {

					this.setSession(null);

					const error = response !== undefined ? generateError(response) : generateError(null);
					resolve(error);
				});
		});
	};

	public getAccessToken = (): string => {

		return window.localStorage.getItem('jwt_access_token') ?? '';
	};

	public logout = (): void => this.setSession(null);

	private readonly handleAuthentication = (): void => {

		const ACCESS_TOKEN = this.getAccessToken();

		if (ACCESS_TOKEN === '') {
			this.on('onNoAccessToken');

			return;
		}

		if (this.isAuthTokenValid(ACCESS_TOKEN)) {

			this.setSession(ACCESS_TOKEN);
			this.on('onAutoLogin');

		} else {

			this.setSession(null);
			this.on('onAutoLogout');
		}
	};

	public isAuthTokenValid = (ACCESS_TOKEN: string): boolean => {

		if (ACCESS_TOKEN === '') return false;

		const decoded: IToken = jwtDecode(ACCESS_TOKEN);

		const currentTime = Date.now() / 1000;

		if (decoded.exp < currentTime) {
            
			console.warn('access token expired');
			return false;
		}

		return true;
	};

	public sendEmail = async (email: string): Promise<Response<string>> => {

		return await new Promise((resolve) => {
			axios
				.post(`${ednpoint}/send-email`, { email })
				.then(({ data:resp }: AxiosResponse) => {

					const { status, data, message } = resp as Response<string>;

					resolve({ data, message, status });
				})
				.catch(({ response }: AxiosError) => {

					const error = response !== undefined ? generateError(response) : generateError(null);
					resolve(error);
				});
		});
	};

	public resetPassword = async (body: { tokenURL: string; password: string; }): Promise<Response<string>> => {

		return await new Promise((resolve) => {
			axios
				.put(`${ednpoint}/reset-password`, body)
				.then(({ data:resp }: AxiosResponse) => {

					const { status, data, message } = resp as Response<string>;

					resolve({ data, message, status });
				})
				.catch(({ response }: AxiosError) => {

					const error = response !== undefined ? generateError(response) : generateError(null);
					resolve(error);
				});
		});
	};

	public validateTokenURL = async (token: string): Promise<Response<null>> => {

		return await new Promise((resolve) => {
			axios
				.post(`${ednpoint}/validate-tokenURL`, { tokenURL: token })
				.then(({ data:resp }: AxiosResponse) => {

					const { status, data, message } = resp as Response<null>;

					resolve({ data, message, status });
				})
				.catch(({ response }: AxiosError) => {

					const error = response !== undefined ? generateError(response) : generateError(null);
					resolve(error);
				});
		});
	};
}

export const auth = new Auth();