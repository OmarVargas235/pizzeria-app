import React from 'react';
import { useFetch } from '../customHooks/useFetch';

export const ContextuseFetch = React.createContext();

const ContextuseFetchProvider = ({ children }) => {

	const data = useFetch('data-pizzerias');
	
	return (
		<ContextuseFetch.Provider value={{
			dataFetch: data
		}}>
			{ children }
		</ContextuseFetch.Provider>
	)
}

export default ContextuseFetchProvider;