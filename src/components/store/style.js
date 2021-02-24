import styled from 'styled-components';

export const ContainerStore = styled.section `

	.container__iconUser {
		border: 2px solid black;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		cursor: pointer;
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
`;