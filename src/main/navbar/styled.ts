import styled from "styled-components";

export const Container = styled.section`
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
	overflow: hidden;
`;

export const ContainerMenu = styled.div<{ isOpen: boolean; }>`
	position: relative;
	/* right: ${props => props.isOpen ? 0 : '-100%'}; */
	right: -100%;
    height: 100%;
    width: 50%;
    background-color: rgba(254, 254, 254, .9);
	animation ${props => props.isOpen ? 'into' : 'out'} .6s cubic-bezier(.8,-.5,.2,1.4) forwards;

	/*  */

	@keyframes into {
		0% { right: -100%; }
		50% { right: -50%; }
		100% { right: 0; }
	}

	@keyframes out {
		0% { right: 0%; }
		50% { right: -50%; }
		100% { right: -100; }
	}
	
	@media(max-width: 992px) {
		width: 60%;
	}

	@media(max-width: 700px) {
		width: 80%;
	}

	@media (max-width: 576px) {
		width: 100%;
		height: 100vh;
	}
`;

export const ContainerImg = styled.div`
    width: 40px;
    height: 40px;
    border: 3px solid black;
    border-radius: 50%;
    overflow: hidden;
    padding: 1px;
`;

const stylesGlobals = (w: string, h: string, p: string, background: string ="", border: string ="", t: string =""): string => (`
	width: ${w};
	height: ${h};
	position: ${p};
	background-color: ${background !== '' ? background : ''};
	border-radius: ${border !== '' ? border : ''};
	transition: ${t !== '' ? t : ''};
`);

export const BtnToggleStyles = styled.div`
    ${() => stylesGlobals('60px', '30px', 'relative')}

	.checkbox {
		display: none;
	}

	.checkbox:checked+ .label::after {
		left: 30px;
	}

	.label {
		${() => stylesGlobals('100%', '100%', 'absolute', '#CCCCCC', '25% / 50%', 'background-color .3s')}
		cursor: pointer;
	}

	.label::after {
		content: '';
		display: block;
		${() => stylesGlobals('30px', '30px', 'absolute', 'white', '50%', 'left .3s')}
		left: 0px;
	}

	.moon {
		${() => stylesGlobals('20px', '30px', 'absolute', '', '', 'opacity .3s, left .3s')};
		left: 5px;
		opacity: 0;
	}

	.sun {
		${() => stylesGlobals('30px', '30px', 'absolute', '', '', 'opacity .3s, left .3s')};
		left: 0;
		z-index: 1;
	}

	.checkbox:checked + .label .moon {
		left: 35px;
		z-index: 1;
		opacity: 1;
		fill: black;
	}

	.checkbox:checked + .label {
		background-color: #3A3C3E;
	}

	.checkbox:checked + .label .sun {
		left: 30px;
		opacity: 0;
	}
`;

export const Option = styled.div`
	cursor: pointer;
	transition: background-color .2s ease-in-out;

	&:hover {
		background-color: rgba(0, 0, 0, .3);
	}
`;