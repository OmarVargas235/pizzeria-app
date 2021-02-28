import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Store from '../components/store/';
import AccountSettings from '../components/account-settings/';

const DashboardRoutesPrivate = ({ setPath }) => {
	
	return (		
		<Switch>
			<Route exact path="/store" component={Store} />
			<Route exact path="/account-settings" render={props => <AccountSettings setPath={setPath} {...props} />} />			
		
			<Redirect to="store" />
		</Switch>
	)
}

export default DashboardRoutesPrivate;