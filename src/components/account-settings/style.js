import styled from 'styled-components';

export const AccountSettings = styled.section`
	width: 380px;
	min-height: 260px;
	background-color: rgba(255, 255, 255);
	position: absolute;
	top: calc(50% - 130px);
	
	svg {
		width: 30px;
		height: 30px;
		cursor: pointer;
	}

	.container__iconUser {
		width: 100px;
		height: 100px;

		svg {
			width: 85px;
			height: 85px;
		}
	}

	@media (max-width: 767px) {
		background-color: rgba(255, 255, 255, .85);
		top: 50px;
		left: calc(50% - 190px);
	}

	@media (max-width: 399px) {
		width: 300px;
		left: calc(50% - 150px);
	}
`;