import styled from 'styled-components';

export const ContainerStore = styled.section `

	.container__iconUser {
		border: 2px solid black;
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}

	input {
		border: none;

		&:focus {
			box-shadow: none;
		}
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

	.col-left {
		min-height: 100vh;
		background-color: rgba(0, 0, 0, .5);
		position: absolute;
	}

	.col-right {
		background-color: white;
		display: none;
	}

	.option {
		cursor: pointer;
		transition: .1s ease-in-out;

		&:hover {
			background-color: #ffd970;
		}
	}
`;