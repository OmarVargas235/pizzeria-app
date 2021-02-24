import React from 'react';
import { createGlobalStyle } from 'styled-components';
import './assets/bootstrap.min.css';
import PizzaSpinner from './components/pizaSpinner/';
import RouterApp from './routers/RouterApp';

const Body = createGlobalStyle`
	body {
		min-height: 100vh;
	}

	p {
		color: #909090;
	}

	.input-group {
		border: 1px solid #909090;
		border-radius: .25rem;
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
				
				<RouterApp />
			</div>
		</React.Fragment>
	)
}

export default App;