import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useFetch } from '../customHooks/useFetch';
import Store from '../components/store/';
import AccountSettings from '../components/account-settings/';

const DashboardRoutesPrivate = ({ setPath }) => {

	useFetch('data-pizzerias'); // Si no hay token o se a vencido lo saca de las rutas privadas
	
	return (		
		<Switch>
			<Route exact path="/store" component={Store} />
			<Route exact path="/account-settings" render={props => <AccountSettings setPath={setPath} {...props} />} />			
		
			<Redirect to="store" />
		</Switch>
	)
}

export default DashboardRoutesPrivate;