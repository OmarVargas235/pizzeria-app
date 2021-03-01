import styled from 'styled-components';

export const RegisterStyle = styled.section`
	form {
		// background-color: #181818;
		width: 350px;
		box-shadow: 0 -5px 20px 5px rgba(182, 182, 182);
		border-radius: 20px;
	}

	.form-control {
		height: 48px;
	}

	.goBack {
		height: 25px;
	}

	@media (max-width: 767px) {
		form {
			margin-bottom: 5rem;
		}

		.form-control {
			height: 40px;
		}
	}

	@media (max-width: 375px) {
		form {
			width: 300px;
		}
	}
`;