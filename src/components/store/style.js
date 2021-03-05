import styled from 'styled-components';

export const ContainerStore = styled.section `
	input {
		border: none;

		&:focus {
			box-shadow: none;
		}
	}

	svg {
		fill: ${props => props.themes['containerIconUser']};
	}

	.btnHamburger {
		fill: rgb(255, 217, 112);
	}

	.form-control {
		background-color: ${props => props.themes['formControl']};
	}

	.btn-hamburger {
		background-color: #323232;
		border-radius: 50%;
		width: 40px;
		height: 40px;
	}

	.container-search {
		margin-top: 6rem;

		p:first-child {
			border-bottom: 2px solid orange;
		}
	}

	.container-stores {

		.row {
			max-height: 300px;
			overflow-y: scroll;
		}

		.card-pizzeria {
			cursor: pointer;
		}
	}

	@media (max-width: 894px) {

		.card-pizzeria {
			img {
				width: 55%;
			}
		}
	}

	@media (max-width: 809px) {
		.container-search {
			margin-top: 0rem;
		}
	}

	@media (max-width: 767px) {
		.container-stores { 
			.row {
				max-height: 250px;
			}
		}
	}
`;

// =====================================
// Estilos del menu
// =====================================

export const MenuStyles = styled.aside`
	position: absolute;
	top: 0;
	width: 110%;

	.background-dark {
		background-color: rgba(0, 0, 0, .5);
		width: 100%;
		min-height: 100vh;
		position: absolute;
		${props => ( props.activeAnimation 
			? animationMenu(0, 1, .5, 'opacity', 'opacityStart')
			: animationMenu(1, 0, .8, 'opacity', 'opacityEnd')
		)}
	}
	
	.col-right {
		background-color: ${props => props.themes['backgroundWhite']};
		min-height: 100vh;

		span {
			color: ${props => props.themes['h3_span_svg']};;
		}

		${props => {
			
			if (props.activeAnimation !== null) {

				return ( props.activeAnimation 
					? animationMenu('-100%', 0, .5, 'right', 'rightStart')
					: animationMenu(0, '-100%', .8, 'right', 'rightEnd')
				)
			}
			
			return (`right: 0;`);
		}}
	}

	.option {
		cursor: pointer;
		transition: background-color .5s ease-in-out, color .5s ease-in-out;

		&:hover {
			background-color: #ffd970;

			span {
				color: #222222;
			}

			svg {
				fill: #222222;
			}
		}
	}
`;

const animationMenu = (start, end, time, property, typeAnimation) => (`
	animation: ${typeAnimation} ${time}s;

	@keyframes ${typeAnimation} {
		from {
			${property}: ${start};
		}

		to {
			${property}: ${end};
		}
	}
`);

// =====================================
// Estilos del boton toggle "dark" o "light"
// =====================================

const stylesGlobals = (w, h, p, background="", border="", t="") => (`
	width: ${w};
	height: ${h};
	position: ${p};
	background-color: ${background !== '' ? background : ''};
	border-radius: ${border !== '' ? border : ''};
	transition: ${t !== '' ? t : ''};
`);

export const BtnToggleStyles = styled.div`
	.button-toggle {
		${() => stylesGlobals('60px', '30px', 'relative')}
	}

	.checkbox {
		display: none;
	}

	.checkbox:checked+ .label::after {
		left: 30px;
	}

	.label {
		${() => stylesGlobals('100%', '100%', 'absolute', '#CCCCCC', '25% / 50%', 'background-color .3s')}
		cursor: pointer;
	}

	.label::after {
		content: '';
		display: block;
		${() => stylesGlobals('30px', '30px', 'absolute', 'white', '50%', 'left .3s')}
		left: 0px;
	}

	.moon {
		${() => stylesGlobals('20px', '30px', 'absolute', '', '', 'opacity .3s, left .3s')};
		left: 5px;
		opacity: 0;
	}

	.sun {
		${() => stylesGlobals('30px', '30px', 'absolute', '', '', 'opacity .3s, left .3s')};
		left: 0;
		z-index: 1;
	}

	.checkbox:checked + .label .moon {
		left: 35px;
		z-index: 1;
		opacity: 1;
		fill: black;
	}

	.checkbox:checked + .label {
		background-color: #3A3C3E;
	}

	.checkbox:checked + .label .sun {
		left: 30px;
		opacity: 0;
	}
`;