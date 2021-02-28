import React from 'react';
import { createGlobalStyle } from 'styled-components';
import './assets/bootstrap.min.css';
import PizzaSpinner from './components/pizaSpinner/';
import RouterApp from './routers/RouterApp';
import img_background from './assets/img/imagebkg.png';
import ContextAuthProvider from './auth/ContextAuth';

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

	.container__iconUser {
		border: 2px solid black;
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}

	.form-control {
		height: 53px;
		border: none;

		&:focus {
			box-shadow: none;
		}
	}

	.btn-warning {
		width: 300px;
		padding: 10px 0;
		box-sizing: border-box;
		box-shadow: 0 4px 4px rgba(0,0,0,.15);
		background: #ffd970;
		border-color: #ffd970;

		&:active, &:focus, &:hover {
			background: #ffd970 !important;
			border-color: #ffd970 !important;
			box-shadow: 0 4px 4px rgba(0,0,0,.15) !important;
		}
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
				
				<ContextAuthProvider>
					<RouterApp />
				</ContextAuthProvider>
			</div>
		</React.Fragment>
	)
}

export default App;