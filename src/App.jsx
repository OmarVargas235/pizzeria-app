import React from 'react';
import { createGlobalStyle } from 'styled-components';
import './assets/bootstrap.min.css';
import PizzaSpinner from './components/pizaSpinner/';
import RouterApp from './routers/RouterApp';
import img_background from './assets/img/imagebkg.png';

const Body = createGlobalStyle`
	body {
		min-height: 100vh;
		background: url(${img_background});
	}

	p {
		color: #909090;
	}

	.input-group {
		border: 1px solid #909090;
		border-radius: .25rem;
	}

	.background-white {
		background-color: rgba(255,255,255,.95);
		padding-top: 24px;
		min-height: 100vh;
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