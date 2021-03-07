import React from 'react';
import { ReactComponent as Instagram } from '../../../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../../../assets/icons/facebook.svg';

const CardPizzeriaPage = ({ data, isDark }) => (
	<div className="card-pizzeria p-2 p-md-4 d-flex flex-column justify-content-center align-items-center text-center">
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
);

export default CardPizzeriaPage;