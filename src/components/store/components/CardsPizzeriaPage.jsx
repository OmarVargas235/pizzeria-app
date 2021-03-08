import React from 'react';
import { withRouter } from 'react-router-dom';

const CardsPizzeriaPage = ({ data, dark, setInProp, history }) => (
	
	<aside className="row pt-5">
		{
			data.map((pizzeria, index) => (
				<div 
					className="card-pizzeria col-6 col-sm-4 col-md-6 col-lg-4 mb-4 text-center" 
					key={pizzeria.id}
					onClick={() => {
						setInProp(false);
						setTimeout(() => history.push(`/store/${pizzeria.id}`), 700);
					}}
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
				</div>
			))
		}
	</aside>
)

export default withRouter(CardsPizzeriaPage);