import React, { useState } from 'react';
import { ReactComponent as Instagram } from '../../../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../../../assets/icons/facebook.svg';
import { CardPizzaStyle } from '../style';

const CardPizzeriaPage = ({ data, isDark }) => {
	
	const [rotateX, setRotateX] = useState(0);
	const [rotateY, setRotateY] = useState(0);

	const moveYX = e => {
		
		const y = Math.floor((e.clientY - 24) * .1);
		const coordsY = (y - 30) * -1;
		setRotateX(coordsY);

		const x = Math.floor(((e.clientX ) - 430) * .081) + 15;
		setRotateY(x);
	}
	
	const resetCoords = () => {

		setRotateX(0);
		setRotateY(0);
	}

	return (
		<CardPizzaStyle 
			className="d-flex justify-content-center align-items-center"
			onMouseMove={moveYX}
			onMouseOut={resetCoords}
		>
			<div 
				className="card-pizza p-2 p-md-4 d-flex flex-column justify-content-center align-items-center text-center"
				style={{
					transition: 'transform .1s',
					transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
				}}
			>
				<img 
					src={`http://localhost:5000/${data.img}`}
					alt={`${data.name}`}
					className="img-fluid"
				/>
				<h2 className={`${isDark && 'text-dark'}`}>{data.name}</h2>
				<p className={`mb-1 mb-md-4 ${isDark && 'text-dark'}`}>{data.address}</p>	
				<p>{data.description}</p>
				<div>
					<Instagram style={{fill: isDark && 'white'}} />
					<Facebook style={{fill: isDark && 'white'}} />
				</div>
			</div>
		</CardPizzaStyle>
	)
}

export default CardPizzeriaPage;