import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Store from '../components/store/';
import AccountSettings from '../components/account-settings/';
import Pizzeria from '../components/pizzeria/';

const DashboardRoutesPrivate = ({ setPath }) => (		
	<Switch>
		<Route exact path="/store" component={Store} />
		<Route exact path="/account-settings" render={props => <AccountSettings setPath={setPath} {...props} />} />	
		<Route exact path="/store/:id" component={Pizzeria} />			
		
		<Redirect to="store" />
	</Switch>
);

export default DashboardRoutesPrivate;