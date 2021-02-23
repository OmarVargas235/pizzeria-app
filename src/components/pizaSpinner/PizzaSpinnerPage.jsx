import React from 'react';
import pizza from '../../assets/img/Pizza.png';
import { Background, Img } from './style';

const PizzaSpinnerPage = () => {
	
	return (
		<Background className="d-flex align-items-center justify-content-center">
			<Img src={pizza} alt='pizza' className="img-fluid" />
		</Background>
	)
}

export default PizzaSpinnerPage;