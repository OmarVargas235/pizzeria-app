import { useState, useEffect, useContext } from 'react';
import { ContextAuth } from '../auth/ContextAuth';
import { logoutAuth } from '../types/types';
import { alert } from '../layaut/alert';

export const useFetch = (url="", id="") => {

	const { auth, dispatch } = useContext( ContextAuth );

	const [data, setData] = useState({ data: null, loading: true, error: null });
	const [isMounted, setIsMounted] = useState( true );

	useEffect(() => {
		console.log('llamado')
		async function consumeAPI() {
			
			try {
				
				const newURL = id !== '' ? url + '/' + id : url;

				const resp = await fetch(`http://localhost:5000/${newURL}`, {
					headers: {
						'token': `${auth.token}`
					}
				});
				const result = await resp.json();
				
				if (resp.status === 401) {
					
					alert('success', 'Su seccion ha expirado');
					dispatch({ type: logoutAuth });
				}
				else if (resp.status !== 200) throw new Error(result.error);
				else {

					const { data } = result;
					setData({ data, loading: false, error: null });
				}
				
			} catch(err) {
				
				const regex = (/Failed to fetch/gi).test(err);
				const messageErr = regex ? 'server failure' : err.message;
				setData({ data: null, loading: false, error: messageErr });
			}
		}
		
		isMounted && consumeAPI();

		return () => setIsMounted(false);

	}, [url, id, auth, dispatch, isMounted]);

	return data;
}