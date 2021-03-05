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

	h3, p {
		max-width: 250px;
		overflow: hidden;
	}

	.container__iconUser {
		width: 100px;
		height: 100px;

		svg {
			width: 85px;
			height: 85px;
		}
	}

	.changeImage {
		position: relative;

		input {
			position: absolute;
			width: 100px;
			height: 100px;
			font-size: 0px;
			border-radius: 50%;
			cursor: pointer;
			opacity: 0;

			&:focus {
				outline: none;
			}
		}

		img {
			width: 110px;
			height: 110px;
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