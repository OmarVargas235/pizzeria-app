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

export const sendDataServerEditUser = async (url="", id="", data={}, token="") => {

	const myHeadersText = new Headers();
	const myHeadersImg = new Headers();
	
	// Cabezeras del cambio de nombre y apellido
	myHeadersText.append("Content-Type", "application/json");
	myHeadersText.append("token", token);
	
	// Cabezera del cambio de imagen
	myHeadersImg.append("token", token);

	const resp = await fetch(`http://localhost:5000/${url}/${id}`, {
		method: 'POST',
		headers: url === 'edit-user' ? myHeadersText : myHeadersImg,
	    body: data,
	});
	const result = await resp.json();
	
	return {
		resp,
		result
	}
}