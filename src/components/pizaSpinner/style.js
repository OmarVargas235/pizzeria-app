import styled from 'styled-components';

export const Background = styled.section `
	min-height: 100vh;
	overflow: hidden;
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