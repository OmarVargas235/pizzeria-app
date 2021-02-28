export const sendDataServer = async (url="", data={}) => {

	const resp = await fetch(`http://localhost:5000/${url}`, {
		method: 'POST',
		headers: {
	      'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	const result = await resp.json();

	return {
		resp,
		result
	}
}