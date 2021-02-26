import { useState, useEffect } from 'react';

export const useFetch = (url="") => {
	
	const [data, setData] = useState({ data: null, loading: true, error: null });

	useEffect(() => {
		
		async function consumeAPI() {
			
			try {

				const resp = await fetch(`http://localhost:5000/${url}`);
				const result = await resp.json();

				if (resp.status !== 200) throw new Error(result.error);
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

		consumeAPI();

	}, [url]);

	return data;
}

export default useFetch;