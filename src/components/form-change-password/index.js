import React, { useState, useEffect } from 'react';

import FormChangePasswordPage from './components/FormChangePasswordPage';
import IsForm from './components/IsForm';
import { sendDataServer } from '../../utilities/helper';

const FormChangePassword = () => {

	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [isForm, setIsForm] = useState(true);
	const [message, setMessage] = useState('');
	const [showBtn, setShowBtn] = useState(false);

	const { pathname } = window.location;
	const arrUrl = pathname.split('/');
	const tokenURL = arrUrl[ arrUrl.length - 1 ];

	// Verificar si el link ya esta vencido
	useEffect(() => {
		
		async function callAPI() {
		 	
		 	const { result } = await sendDataServer(`reset-password/${tokenURL}`);
		 	const { ok, message } = result;

		 	if (!ok) {

		 		setIsForm(false);
		 		setMessage(message);
		 	}
		 }

		 callAPI();
		
	}, []);

	const changePassword = async e => {

		e.preventDefault();

		// Enviando la data del formulario al backend

		const obj = {
			password,
			repeatPassword,
		}

		const { result } = await sendDataServer(`send-form-password/${tokenURL}`, obj);
		const { ok, message } = result;

		setIsForm(false);
		setMessage(Array.isArray(message) ? message[0] : message);

		if (ok) setShowBtn(true);
	}
	
	return (
		<React.Fragment>
			{
				isForm ? <FormChangePasswordPage
					changePassword={changePassword}
					setPassword={setPassword}
					setRepeatPassword={setRepeatPassword}
				/> : <IsForm
					message={message}
					showBtn={showBtn}
					setIsForm={setIsForm}
				/>
			}
		</React.Fragment>
	)
}

export default FormChangePassword;