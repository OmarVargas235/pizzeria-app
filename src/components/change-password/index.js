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
	
    const handleSumit = async e => {

    	e.preventDefault();

    	alertNotTime('info', 'Espera un momento');
    	setDesactiveBtn(true);

    	const { resp, result } = await sendDataServer('change-password', changePassword);

    	if (resp.status !== 200) {

    		alert('error', result.message);
    		setDesactiveBtn(false);
    	}
		else if (resp.status === 200) {

			alert('success', result.message);
			setDesactiveBtn(false);
		}
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