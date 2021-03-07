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
		right: 0;

		.pr-5 {
			padding-right: 0 !important;
		}
	}

	.container-pizza {
		overflow-y: scroll;
		max-height: 200px;
		
		img {
			width: 30%;
			box-shadow: 0 5px 5px rgba(0,0,0,.2), 0 0 5px rgba(0,0,0,.2);
		}

		.container-text {
			background-color: #ffd970;
			box-shadow: 0 5px 5px rgba(0,0,0,.2), 0 0 5px rgba(0,0,0,.2);
		}
	}
	
	@media (min-width: 992px) {
  		.containerGoBack {
  			padding-right: 4rem !important;
		}
	}

	@media (min-width: 425px) and (max-width: 767px) {
  		.containerGoBack {
  			padding-right: 2rem !important;
		}
	}

	@media (max-width: 767px) {
  		.card-pizzeria {
  			min-height: 275px;
  		}
	}
	
	@media (min-width: 501px) and (max-width: 575px) {
		.container-pizza {
			img {
				width: 20%;
			}
		}
	}

	@media (min-width: 405px) and (max-width: 500px) {
		.container-pizza {
			img {
				width: 25%;
			}
		}
	}
	
	@media (min-height: 760px) {
		.container-pizza {
			max-height: 300px;
		}
	}

	@media (max-height: 576px) {
		.container-pizza {
			max-height: 125px;
		}
	}

	@media (max-height: 576px) and (min-width: 768px) {
		.container-pizza {
			max-height: 120px;
		}
	}
`;