import React from 'react';

const CardsPizzaPage = ({ products }) => (
	<aside className="container-pizza mt-1 mt-2 mt-md-4 row">
		{ 
			products.map(product => (
				<div 
					className="col-sm-6 col-md-12 col-lg-6 my-2 d-flex" 
					key={product.description}
				>
			    	<img 
			    		className="img-fluid" 
			    		src={`${process.env.REACT_APP_BACKEND_URL}/${product.img}`} 
			    		alt={product.description} 
			    	/>
		
					<div className="container-text flex-grow-1 d-flex align-items-center pl-3">
						<h6 className='card-title mb-0'>{product.description}</h6>
					</div>
				</div>
			)) 
		}
	</aside>
);

export default CardsPizzaPage;