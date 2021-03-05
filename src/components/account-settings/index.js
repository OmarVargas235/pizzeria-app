import React, { useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import AccountSettingsPage from './AccountSettingsPage';
import { ContextTheme } from '../../context/ContextTheme';
import { ContextEditUser } from '../../context/ContextEditUser';
import { alert } from '../../layaut/alert';
import { ContextAuth } from '../../auth/ContextAuth';
import { logoutAuth } from '../../types/types';
// import { sendDataServer } from '../../utilities/helper';

const AccountSettings = ({ match:{path}, setPath }) => {
	
	const { themes } = useContext( ContextTheme );
	const { auth, dispatch } = useContext( ContextAuth );
	const { 
		img, 
		setImg, 
		dataUser, 
		setDataUser 
	} = useContext( ContextEditUser );

	useEffect(() => setPath(path), [path, setPath]);

	const changeImage = async e => {
		
		const formData = new FormData();
		const file = e.target.files['0'];
		const idUser = dataUser.id;

		formData.append('img-user', file);

		const resp = await fetch(`http://localhost:5000/edit-user-image/${idUser}`, {
			method: 'POST',
			headers: {
				'token': `${auth.token}`
			},
		    body: formData,
		});
		const result = await resp.json();

		if (resp.status === 200) {

			setImg(result.img);
			alert('success', result.message);
		
		} else {

			dispatch({ type: logoutAuth });
			alert('error', result.message);
		}
	}

	const editName = async () => {

		const { value: formValues } = await Swal.fire({

			title: 'Edite su nombre y apellido aqui.',
			html:
			'<input id="swal-input1" class="swal2-input" placeholder="Nombre" name="name" autocomplete="off">' +
			'<input id="swal-input2" class="swal2-input" placeholder="Apellido" name="lastName" autocomplete="off">',
			focusConfirm: false,

			preConfirm: () => {
				return [
					document.getElementById('swal-input1').value,
					document.getElementById('swal-input2').value
				]
			}
		});

		if (!formValues) return;

		const [ name, lastName ] = formValues || ['empty', 'empty'];

		if (name.trim() === '' || lastName.trim() === '') {

			return alert('error', 'Todos los campos son obligatorios');
		
		} else {
			
			const idUser = dataUser.id;

			const resp = await fetch(`http://localhost:5000/edit-user/${idUser}`, {
				method: 'POST',
				headers: {
					'Content-Type':'application/json',
					'token': `${auth.token}`,
				},
			    body: JSON.stringify({ name, lastName }),
			});
			const result = await resp.json();
			
			if (resp.status === 200) {

				setDataUser(result.data);
				alert('success', result.message);
			
			} else {

				dispatch({ type: logoutAuth });
				alert('error', result.message);
			}
		}
	}

	return (
		<AccountSettingsPage 
			themes={themes}
			dataUser={dataUser}
			changeImage={changeImage}
			editName={editName}
			img={img}
		/>
	)
}

export default AccountSettings;