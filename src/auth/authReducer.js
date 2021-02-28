import { login, logout } from '../types/types';

export const authReducer = (state, { type, payload }) => {

	switch (type) {
		
		case login:
			return {
				...payload,
			}

		case logout:
			return {
				...state,
			}

		default: return state;
	}
}