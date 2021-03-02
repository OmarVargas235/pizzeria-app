import styled from 'styled-components';

export const AccountSettings = styled.section`
	width: 380px;
	min-height: 260px;
	background-color: ${props => props.themes['backgroundWhite']};
	position: absolute;
	top: calc(50% - 130px);
	
	svg {
		width: 30px;
		height: 30px;
		cursor: pointer;

		fill: ${props => props.themes['containerIconUser']};
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
		top: 50px;
		left: calc(50% - 190px);
	}

	@media (max-width: 399px) {
		width: 300px;
		left: calc(50% - 150px);
	}
`;