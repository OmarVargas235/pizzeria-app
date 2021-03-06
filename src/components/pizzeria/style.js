import styled from 'styled-components';

export const PizzeriaStyle = styled.section `
	.card-pizzeria {
		box-shadow: 0 20px 20px rgba(0,0,0,.2), 0 0 50px rgba(0,0,0,.2);
  		border-radius: 12px;
  		min-height: 400px;
  		width: 300px;

  		&>* {
  			z-index: 2;
  		}

  		img {
  			width: 50%;
  		}

  		p {
  			color: #909090;
  		}
		
		svg {
			cursor: pointer;
		}

		::before {
			display: block;
			content: '';
			width: 220px;
			height: 220px;
			border-radius: 50%;
			background-color: #ffd970;
			position: absolute;
			top: 10%;
		}
	}

	.containerGoBack {
		position: absolute;
		right: 0%;
	}

	.container-pizza {
		border: 1px solid red;
		overflow-y: scroll;
		height: 200px;

		img {
			width: 30%;
			box-shadow: 0 5px 5px rgba(0,0,0,.2), 0 0 5px rgba(0,0,0,.2);
		}

		.container-text {
			background-color: #ffd970;
			box-shadow: 0 5px 5px rgba(0,0,0,.2), 0 0 5px rgba(0,0,0,.2);
		}
	}
`;