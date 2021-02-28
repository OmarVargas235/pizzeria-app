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

	@media (min-width: 450px) {		
		img {
			width: 30%;
		}
	}

	@media (min-width: 576px) {		
		img {
			width: 20%;
		}
	}

	@media (min-width: 768px) {		
		img {
			width: 40%;
		}
	}
`;