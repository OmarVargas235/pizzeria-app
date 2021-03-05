import React, { useState, useEffect, useContext } from 'react';
import { ContextAuth } from '../auth/ContextAuth';

export const ContextEditUser = React.createContext();

const ContextEditUserProvider = ({ children }) => {
	
	const { auth } = useContext( ContextAuth );

	const [img, setImg] = useState('');
	const [dataUser, setDataUser] = useState({});

	useEffect(() => {
		
		async function getDataUser() {
			
			const resp = await fetch(`http://localhost:5000/get-user/${auth.token}`, {
				headers: {
					'token': `${auth.token}`
				}
			});
			const result = await resp.json();
			
			console.log("resp", resp)
			console.log("result", result)

			if (resp.status === 200) {

				setImg(result.img);
				setDataUser(result.data);
			}
		}

		getDataUser();

	}, [auth]);

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