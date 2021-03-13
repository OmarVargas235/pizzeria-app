import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import './assets/bootstrap.min.css';
import PizzaSpinner from './components/pizaSpinner/';
import RouterApp from './routers/RouterApp';
import img_background from './assets/img/imagebkg.png';
import ContextAuthProvider from './auth/ContextAuth';
import { ContextTheme } from './context/ContextTheme';
import { useResizeMedia } from './customHooks/useResizeMedia';

const Body = createGlobalStyle`
	body {
		min-height: 100vh;
		background: url(${img_background});
	}

	p, h2 {
		color: ${props => props.themes['p_h2']};
	}

	h3 {
		color: ${props => props.themes['h3_span_svg']};
	}

	.input-group {
		border: 1px solid #909090;
		border-radius: .25rem;
	}

	.background-white {
		background-color: ${props => props.themes['backgroundWhite']};
		padding-top: 24px;
		min-height: 100vh;
	}

	.container__iconUser {
		border: 2px solid ${props => props.themes['containerIconUser']};
		width: 40px;
		height: 40px;
		border-radius: 50%;
		overflow: hidden;

		img {
			width: 50px;
			height: 50px;
		}
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

	.accountSettings-enter-exit {
		transform: scale(0);
		transition: transform .5s;
	}

	.accountSettings-enter, .accountSettings-exit-done {
		transform: scale(0);
	}

	.accountSettings-enter-done, .accountSettings-exit {
		transform: scale(1);
	}
	

	${props => {
		
		// const maxWith = window.matchMedia('(max-width: 767px').matches;

		if (props.maxWidth) {
			
			return (`
				
				.animation-enter-exit {
					position: relative;
					top: 100%;
					transition: top .5s;
				}

				.store-enter, .store-exit-done {
					top: 100%;
				}

				.store-enter-done, .store-exit {
					top: 0;
				}
			`);
		
		} else {

			return (`
				
				.animation-enter-exit {
					position: relative;
					left: 100%;
					transition: left .5s;
				}

				.store-enter, .store-exit-done {
					left: 100%;
				}

				.store-enter-done, .store-exit {
					left: 0;
				}
			`);
		}
	}}
`;

const App = () => {
	
	const { themes } = useContext( ContextTheme );

	const [maxWidth] = useResizeMedia(767);

	return (
		<React.Fragment>
			<Body themes={themes} maxWidth={maxWidth} /> {/* Estilos globales */}
		
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