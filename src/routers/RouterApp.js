import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import DashboardRoutesPrivate from './DashboardRoutesPrivate';
import DashboardRoutesPublic from './DashboardRoutesPublic';
import PrivateRoute from './PrivateRouter';
import PublicRoute from './PublicRoute';
import ContextActiveMenuProvider from '../context/ContextActiveMenu';
import ContextuseFetchProvider from '../context/ContextuseFetch';
import ContextEditUserProvider from '../context/ContextEditUser';
import { ContextAuth } from '../auth/ContextAuth';

const Container = styled.div`
	max-height: 100vh;
	overflow: hidden;

	@media (max-width: 767px) {
		position: absolute;
		top: 15%;
		border-top-right-radius: 30px;
		border-top-left-radius: 30px;
		height: 85vh;
	}

	&.box-shadow {
		box-shadow: 0 -20px 60px rgba(0,0,0,1);
	}
`;

const RouterApp = () => {
	
	const { auth } = useContext( ContextAuth );

	const [path, setPath] = useState('');

	return (
		<Container className={`col-12 col-md-6 ${path === '/account-settings' ? '' : 'box-shadow'}`}>
			<Router>
				<Switch>
					{
						auth.isAuthenticated
						? <ContextActiveMenuProvider> 
						 	<ContextEditUserProvider> 
								<ContextuseFetchProvider> 
									<PrivateRoute
										component={ DashboardRoutesPrivate }
										isAuthenticated={ auth.isAuthenticated }
										setPath={setPath}
									/>
								</ContextuseFetchProvider>
							</ContextEditUserProvider>
						</ContextActiveMenuProvider>
						: 
						<PublicRoute 
							exact
							component={ DashboardRoutesPublic }
							isAuthenticated={ auth.isAuthenticated }
						/>
					}
				</Switch>
			</Router>			
		</Container>
	)
}

export default RouterApp;