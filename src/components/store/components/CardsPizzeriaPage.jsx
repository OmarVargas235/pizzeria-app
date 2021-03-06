import React from 'react';
import { Link } from 'react-router-dom';

const CardPizzeriaPage = ({ data, dark }) => (
	
	<div className="row">
		{
			data.map((pizzeria, index) => (
				<Link 
					className="card-pizzeria col-6 col-lg-4 mb-4 text-center" 
					key={pizzeria.id}
					to={`/store/${pizzeria.id}`}
				>
			    	<img 
			    		className="img-fluid" 
			    		src={`http://localhost:5000/${pizzeria.img}`} 
			    		alt={pizzeria.name} 
			    	/>
		
					<h6 
						className={`card-title mb-0 ${dark=== 'black' ? 'text-dark' : 'text-light'}`}
					>{pizzeria.name}</h6>
					<p className='card-text'>{pizzeria.address}</p>
				</Link>
			))
		}
	</div>
)

export default CardPizzeriaPage;