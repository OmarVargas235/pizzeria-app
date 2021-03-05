import React, { useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import AccountSettingsPage from './AccountSettingsPage';
import { ContextTheme } from '../../context/ContextTheme';
import { ContextEditUser } from '../../context/ContextEditUser';
import { alert } from '../../layaut/alert';
import { ContextAuth } from '../../auth/ContextAuth';
import { logoutAuth } from '../../types/types';
import { sendDataServerEditUser } from '../../utilities/helper';

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

	const controllerRespAPI = (resp, result, set, type="") => {
		
		if (resp.status === 200) {

			set(type === 'img' ? result.img : result.data);
			alert('success', result.message);
		
		} else if (resp.status === 401) {

			alert('error', result.message);
			dispatch({ type: logoutAuth });

		} else alert('error', result.message);
	}

	const changeImage = async e => {
		
		const formData = new FormData();
		const file = e.target.files['0'];

		formData.append('img-user', file);

		const { 
			resp, 
			result 
		} = await sendDataServerEditUser('edit-user-image', dataUser.id, formData, auth.token);
		
		controllerRespAPI(resp, result, setImg, 'img');
	}

	const editName = async () => {
		
		// Creando el modal del furmulario
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
		
		// Si se hace click fuera del modal
		if (!formValues) return;

		const [ name, lastName ] = formValues;

		if (name.trim() === '' || lastName.trim() === '') {

			return alert('error', 'Todos los campos son obligatorios');
		
		} else {
			
			const data = JSON.stringify({ name, lastName });

			const { 
				resp, 
				result 
			} = await sendDataServerEditUser('edit-user', dataUser.id, data, auth.token);

			controllerRespAPI(resp, result, setDataUser);
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