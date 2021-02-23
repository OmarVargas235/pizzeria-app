import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import './assets/bootstrap.min.css';
import Login from './components/login/';
import PizzaSpinner from './components/pizaSpinner/';

const Body = createGlobalStyle`
	body {
		min-height: 100vh;
	}
`;

const ContainerLogin = styled.div`
	box-shadow: 0 -20px 60px rgba(0,0,0,1);

	@media (max-width: 767px) {
		position: absolute;
		background: rgba(255,255,255,.95);
		top: 15%;
		border-top-right-radius: 30px;
		border-top-left-radius: 30px;
		height: 85vh;
	}
`;

const App = () => {
	
	return (
		<React.Fragment>
			<Body /> {/* Estilos globales */}
		
			<div className="row no-gutters">
				<div className="col-12 col-md-6">
					<PizzaSpinner/>
				</div>

				<ContainerLogin className="col-12 col-md-6 pt-4 d-md-flex align-items-md-center justify-content-center">
					<Login />
				</ContainerLogin>
			</div>
		</React.Fragment>
	)
}

export default App;