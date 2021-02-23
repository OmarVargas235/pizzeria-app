import styled from 'styled-components';
import img_background from '../../assets/img/imagebkg.png';

export const Background = styled.section `
	
	background: url(${img_background});
	min-height: 100vh;
`;

export const Img = styled.img `
	
	animation: spin 15s linear infinite;
	width: 80%;

	@keyframes spin {
		from { transform: rotateZ(0) }
		to { transform: rotateZ(360deg) }
	}

	@media (max-width: 767px) {
		position: absolute;
		top: 0%;
		width: 60%;
	}
`;