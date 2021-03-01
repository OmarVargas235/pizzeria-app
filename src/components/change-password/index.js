import React from 'react';
import { useForm } from '../../customHooks/useForm';
import { alert, alertNotTime } from '../../layaut/alert';
import { sendDataServer } from '../../utilities/helper';
import ChangePasswordPage from './ChangePasswordPage';

const ChangePassword = ({ history }) => {

	const [ changePassword, handleChange, desactiveBtn, setDesactiveBtn ] = useForm({
        email: '',
    });
	
    const handleSumit = async e => {

    	e.preventDefault();

    	alertNotTime('info', 'Espera un momento');
    	setDesactiveBtn(true);
    	setTimeout(() => setDesactiveBtn(false), 2000);

    	const { resp, result } = await sendDataServer('change-password', changePassword);

    	if (resp.status !== 200) alert('error', result.message);
		else if (resp.status === 200) alert('success', result.message);
    }
	
	return (
		<ChangePasswordPage 
			history={history}
			handleChange={handleChange}
			handleSumit={handleSumit}
			desactiveBtn={desactiveBtn}
		/>
	)
}

export default ChangePassword;