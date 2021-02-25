import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../components/login/';
import Store from '../components/store/';

const Container = styled.div`
	box-shadow: 0 -20px 60px rgba(0,0,0,1);
	max-height: 100vh;
	overflow: hidden;

	@media (max-width: 767px) {
		position: absolute;
		background: rgba(255,255,255,.95);
		top: 15%;
		border-top-right-radius: 30px;
		border-top-left-radius: 30px;
		height: 85vh;
	}
`;

const RouterApp = () => {
	
	return (
		<Container className="col-12 col-md-6 pt-4">
			<Router>
				<Switch>
					<Route exact path="/home" component={Login} />
					<Route exact path="/store" component={Store} />
					
					<Redirect from="/" to="/home" />
				</Switch>

			</Router>
		</Container>
	)
}

export default RouterApp;