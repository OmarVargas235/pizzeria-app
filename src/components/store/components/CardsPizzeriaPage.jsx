import React from 'react';

const CardPizzeriaPage = ({ data }) => (
	
	<div className="row">
		{
			data.map((pizzeria, index) => (
				<div 
					className="card-pizzeria col-6 col-lg-4 mb-4 text-center" 
					key={pizzeria.id}>
			    	<img 
			    		className="img-fluid" 
			    		src={`http://localhost:5000/${pizzeria.img}`} 
			    		alt={pizzeria.name} 
			    	/>

					<h6 className="card-title mb-0">{pizzeria.name}</h6>
					<p className={`card-text`}>{pizzeria.direction}</p>
				</div>
			))
		}
	</div>
)

export default CardPizzeriaPage;