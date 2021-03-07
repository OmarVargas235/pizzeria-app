import React, { useState, useEffect, useContext } from 'react';
import { ContextAuth } from '../auth/ContextAuth';
import { useFetch } from '../customHooks/useFetch';

export const ContextEditUser = React.createContext();

const ContextEditUserProvider = ({ children }) => {
	
	const { auth } = useContext( ContextAuth );

	const data = useFetch('get-user', auth.token);

	const [img, setImg] = useState('');
	const [dataUser, setDataUser] = useState({
		name: '',
		lastName: '',
		email: '',
		id: ''
	});

	useEffect(() => {

		if (!data.loading) {

			setDataUser(data.data);
			setImg(data.img);
		}

	}, [data]);

	return (
		<ContextEditUser.Provider value={{
			img,
			setImg,
			dataUser,
			setDataUser,
		}}>
			{ children }
		</ContextEditUser.Provider>
	)
}

export default ContextEditUserProvider;