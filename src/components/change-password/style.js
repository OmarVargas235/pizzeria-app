import styled from 'styled-components';

export const ChangePasswordContainer = styled.section `
	img {
		width: 50%;
	}

	@media (max-width: 767px) {
		form {
			margin-bottom: 6rem;
		}

		img {
			width: 35%;
		}
	}

	@media (max-width: 374px) {
		img {
			width: 70%;
		}
	}
`;