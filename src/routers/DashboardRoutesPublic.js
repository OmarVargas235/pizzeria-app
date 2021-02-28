import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../components/login/';
import RegisterUser from '../components/register-user/';

const DashboardRoutesPublic = () => {
	
	return (		
		<Switch>
			<Route exact path="/iniciar-sesion" component={Login} />
			<Route exact path="/registrar-usuario" component={RegisterUser} />

			<Redirect from="/" to="/iniciar-sesion" />
		</Switch>
	)
}

export default DashboardRoutesPublic;