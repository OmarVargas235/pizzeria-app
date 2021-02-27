import React, { useState } from 'react';
import RegisterUserPage from './RegisterUserPage';
import { alert } from '../../layaut/alert';

const RegisterUser = ({ history }) => {

	const [dataUsers, setDataUsers] = useState({
		name: '',
		lastName: '',
		email: '',
		password: '',
		repeatPassword: '',
	});
	const [desactiveBtn, setDesactiveBtn] = useState(false);

	const handleChange = e => {

		setDataUsers({
			...dataUsers,
			[e.target.name]: e.target.value,
		});
	}

	const handleSubmit = async e => {

		e.preventDefault();
		
		const resp = await fetch('http://localhost:5000/register-user', {
			method: 'POST',
			headers: {
		      'Content-Type': 'application/json'
    		},
			body: JSON.stringify(dataUsers),
		});
		const result = await resp.json();

		if (resp.status !== 200) {

			alert('error', result.message);
			setDesactiveBtn(true);
			setTimeout(() => setDesactiveBtn(false), 3000);
		
		} else if (resp.status === 200) {
			
			alert('success', result.message);
			history.push('/');
		}
	}
	
	return (
		<RegisterUserPage 
			handleChange={handleChange}
			handleSubmit={handleSubmit}
			desactiveBtn={desactiveBtn}
		/>
	)
}

export default RegisterUser;