import React, { useEffect, useReducer } from 'react';
import { authReducer } from './authReducer';

export const ContextAuth = React.createContext();

const stateInitial = {
	isAuthenticated: false,
	token: '',
}

const init = () => {

	const user = JSON.parse( window.localStorage.getItem('user') );

	return user;
}

const ContextAuthProvider = ({ children }) => {
	
	const [ auth, dispatch ] = useReducer(authReducer, stateInitial, init);

	useEffect(() => window.localStorage.setItem('user', JSON.stringify(auth)), [auth]);

	return (
		<ContextAuth.Provider value={{
			auth,
			dispatch,
		}}>
			{ children }
		</ContextAuth.Provider>
	)
}

export default ContextAuthProvider;