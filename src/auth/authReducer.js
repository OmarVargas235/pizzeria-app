import { login, logout } from '../types/types';

export const authReducer = (state, { type, payload }) => {

	switch (type) {
		
		case login:
			return {
				isAuthenticated: true,
				token: payload,
			}

		case logout:
			return {
				isAuthenticated: false,
				token: '',
			}

		default: return state;
	}
}