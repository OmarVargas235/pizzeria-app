import React from 'react';
import RegisterUserPage from './RegisterUserPage';
import { alert } from '../../layaut/alert';
import { useForm } from '../../customHooks/useForm';
import { sendDataServer } from '../../utilities/helper';

const RegisterUser = ({ history }) => {

	const [ dataUsers, handleChange, desactiveBtn, setDesactiveBtn ] = useForm({
		name: '',
		lastName: '',
		email: '',
		password: '',
		repeatPassword: '',
	});

	const handleSubmit = async e => {

		e.preventDefault();
		
		const { resp, result } = await sendDataServer('register-user', dataUsers);

		if (resp.status !== 200) {

			alert('error', result.message);
			setDesactiveBtn(true);
			setTimeout(() => setDesactiveBtn(false), 2000);
		
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
			history={history}
		/>
	)
}

export default RegisterUser;