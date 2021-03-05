import React, { useContext } from 'react';
import LoginPage from './LoginPage';
import { useForm } from '../../customHooks/useForm';
import { ContextAuth } from '../../auth/ContextAuth';
import { ContextTheme } from '../../context/ContextTheme';
import { login } from '../../types/types';
import { alert, alertNotTime } from '../../layaut/alert';
import { sendDataServer } from '../../utilities/helper';

const Login = ({ history }) => {

	const { dispatch } = useContext( ContextAuth );
	const { isDark } = useContext( ContextTheme );
	
	const [ loginUser, handleChange, desactiveBtn, setDesactiveBtn ] = useForm({
        email: '',
        password: '',
    });

	const handleClick = async () => {

		alertNotTime('info', 'Espera un momento');
    	setDesactiveBtn(true);

		const { resp, result } = await sendDataServer('login', loginUser);
		
		if (resp.status !== 200) {
			
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
			isDark={isDark}
		/>
	)
}

export default Login;