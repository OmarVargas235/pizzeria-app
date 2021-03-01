import styled from 'styled-components';

export const LoginContainer = styled.section `

	form {
		width: 300px;
	}

	img {
		width: 40%;
	}

	.welcome {
		font-size: 2rem;
	}

	.welcome+p {
		font-size: 1.1rem;
	}

	.icon {
		width: 25px;
		height: 25px;
	}

	.input-group {
		background-color: white;
	}

	@media (max-width: 767px) {
		button {
			margin-bottom: 6rem;
		}

		img {
			width: 20%;
		}
	}
	
	@media (max-width: 650px) {		
		img {
			width: 30%;
		}
	}

	@media (max-width: 550px) {		
		img {
			width: 35%;
		}
	}

	@media (max-width: 400px) {		
		img {
			width: 50%;
		}
	}
`;