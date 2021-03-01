import React from 'react';
import RegisterUserPage from './RegisterUserPage';
import { alert, alertNotTime } from '../../layaut/alert';
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

		alertNotTime('info', 'Espera un momento');
    	setDesactiveBtn(true);
		
		const { resp, result } = await sendDataServer('register-user', dataUsers);

		if (resp.status !== 200) {

			alert('error', result.message);
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