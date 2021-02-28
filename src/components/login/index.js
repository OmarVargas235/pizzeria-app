import React, { useState, useContext } from 'react';
import LoginPage from './LoginPage';
import { ContextAuth } from '../../auth/ContextAuth';
import { login } from '../../types/types';
import { alert } from '../../layaut/alert';

const Login = ({ history }) => {
	
	const { dispatch } = useContext( ContextAuth );

	const [loginUser, setLoginUser] = useState({
		email: '',
		password: '',
	});

	const handleChange = e => {

		setLoginUser({
			...loginUser,
			[e.target.name]: e.target.value,
		});
	}

	const handleClick = async e => {

		e.preventDefault();

		const resp = await fetch('http://localhost:5000/login', {
			method: 'POST',
			headers: {
		      'Content-Type': 'application/json'
    		},
			body: JSON.stringify(loginUser),
		});
		const result = await resp.json();
		
		if (resp.status !== 200) return alert('error', result.message);
		
		const action = {
			type: login,
			payload: {
				isAuthenticated: true,
				token: result.token,
			}
		}

		dispatch(action);
	}
	
	return (
		<LoginPage 
			history={history}
			handleChange={handleChange}
			handleClick={handleClick}
		/>
	)
}

export default Login;