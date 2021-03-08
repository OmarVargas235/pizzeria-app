import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../assets/icons/arrow.svg';

const GoBackStyles = styled.div`
	cursor: ${props => !props.desactiveBtn ? 'pointer' : 'context-menu'};

	span, svg {
		color: ${props => props.themes['h3_span_svg']};
	}
`;

const GoBackArrow = ({ history, desactiveBtn, themes, isAnimation=false, setInProp }) => {
	
	const goBack = () => {

		if (isAnimation) {
						
			setInProp(false);
			setTimeout(() => history.goBack(), 700);

		} else !desactiveBtn && history.goBack();
	}

	return (
		<div className="w-100 pr-5 mb-sm-2 mb-md-4 d-flex justify-content-end align-items-center">
			<GoBackStyles
				onClick={goBack}
				themes={themes}
				desactiveBtn={desactiveBtn}
			>
				<Arrow />
			</GoBackStyles>
		</div>
	)
};

export default GoBackArrow;