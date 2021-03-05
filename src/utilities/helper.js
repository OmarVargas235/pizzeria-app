export const sendDataServer = async (url="", data={}, token="") => {
	
	const resp = await fetch(`http://localhost:5000/${url}`, {
		method: 'POST',
		headers: {
	      'Content-Type':'application/json',
	      'token': `${token}`
		},
		body: JSON.stringify(data),
	});
	const result = await resp.json();

	return {
		resp,
		result
	}
}