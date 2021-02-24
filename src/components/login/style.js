import styled from 'styled-components';

export const LoginContainer = styled.section `

	form {
		width: 300px;
	}

	input {
		height: 53px;
		border: none;

		&:focus {
			box-shadow: none;
		}
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

	.btn-login {
		width: 300px;
		padding: 10px 0;
		box-sizing: border-box;
		box-shadow: 0 4px 4px rgba(0,0,0,.15);
	}

	.btn-warning {
		background: #ffd970;
		border-color: #ffd970;

		&:active {
			background: #ffd970 !important;
			border-color: #ffd970 !important;
			box-shadow: 0 4px 4px rgba(0,0,0,.15) !important;
		}
	}

	img {
		width: 40%;
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