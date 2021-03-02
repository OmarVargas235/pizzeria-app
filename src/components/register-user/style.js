import styled from 'styled-components';

const boxShadowLight = '0 -5px 20px 5px rgba(182, 182, 182)';
const boxShadowDark = '0 1px 10px rgba(182, 182, 182)';

export const RegisterStyle = styled.section`
	form {
		width: 350px;
		box-shadow: ${props => props.themes['h3_span_svg'] === 'white' ? boxShadowDark : boxShadowLight};
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

export const GoBack = styled.div`
	cursor: ${props => !props.desactiveBtn ? 'pointer' : 'context-menu'};

	span, svg {
		color: ${props => props.themes['h3_span_svg']};
	}
`;