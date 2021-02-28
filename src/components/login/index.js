import React, { useContext } from 'react';
import LoginPage from './LoginPage';
import { useForm } from '../../customHooks/useForm';
import { ContextAuth } from '../../auth/ContextAuth';
import { login } from '../../types/types';
import { alert } from '../../layaut/alert';
import { sendDataServer } from '../../utilities/helper';

const Login = ({ history }) => {
	
	const { dispatch } = useContext( ContextAuth );
	
	const [ loginUser, handleChange, desactiveBtn, setDesactiveBtn ] = useForm({
        email: '',
        password: '',
    });

	const handleClick = async () => {

		const { resp, result } = await sendDataServer('login', loginUser);
		
		if (resp.status !== 200) {
			
			setDesactiveBtn(true);
			setTimeout(() => setDesactiveBtn(false), 2000);
			
			return alert('error', result.message);
		}
		
		const action = {
			type: login,
			payload: result.token,
		}

		dispatch(action);
		alert('success', 'Ha iniciado seccion con exito');
	}
	
	return (
		<LoginPage 
			history={history}
			handleChange={handleChange}
			handleClick={handleClick}
			desactiveBtn={desactiveBtn}
		/>
	)
}

export default Login;