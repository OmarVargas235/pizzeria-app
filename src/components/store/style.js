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

	@media (max-width: 768px) {
		.container-search {
			margin-top: 0rem;
		}

		.card-pizzeria {
			img {
				width: 55%;
			}
		}
	}
`;

export const Menu = styled.aside`
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

		${props => ( props.activeAnimation 
			? animationMenu('-100%', 0, .5, 'right', 'rightStart')
			: animationMenu(0, '-100%', .8, 'right', 'rightEnd')
		)}
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