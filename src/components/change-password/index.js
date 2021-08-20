import React, { useContext } from 'react';
import { useForm } from '../../customHooks/useForm';
import { alert, alertNotTime } from '../../layaut/alert';
import { sendDataServer } from '../../utilities/helper';
import ChangePasswordPage from './ChangePasswordPage';
import { ContextTheme } from '../../context/ContextTheme';

const ChangePassword = ({ history }) => {
	
	const { themes } = useContext( ContextTheme );

	const [ changePassword, handleChange, desactiveBtn, setDesactiveBtn ] = useForm({
        email: '',
    });
	
	// Enviar un link al correo del usuario
    const handleSumit = async e => {

    	e.preventDefault();

    	alertNotTime('info', 'Espera un momento');
    	setDesactiveBtn(true);

    	const { result } = await sendDataServer('change-password', changePassword);
    	const { ok, message } = result;

    	alert(ok ? 'success' : 'error', message);
    	setDesactiveBtn(false);
    }
	
	return (
		<ChangePasswordPage 
			history={history}
			handleChange={handleChange}
			handleSumit={handleSumit}
			desactiveBtn={desactiveBtn}
			themes={themes}
		/>
	)
}

export default ChangePassword;