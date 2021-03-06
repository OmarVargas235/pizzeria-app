import React from 'react';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { PizzeriaStyle } from './style';
import { GoBack } from '../register-user/style';

const PizzeriaPage = ({ history, themes, data }) => (
	<PizzeriaStyle className="background-white px-4">
		<aside className="d-flex justify-content-center">
			{
				data.loading 
				? <div>Cargaando</div>
				: data.error 
					? <div>error</div>
					: <div className="card-pizzeria p-4 d-flex flex-column justify-content-center align-items-center text-center">
						<img 
							src={`http://localhost:5000/${data.data.img}`}
							alt={`${data.data.name}`}
							className="img-fluid"
						/>
						<h2>{data.data.name}</h2>
						<p>{data.data.address}</p>	
						<p>{data.data.description}</p>
						<div>
							<Instagram />
							<Facebook />
						</div>
					</div>
			}

			<div className="w-100 pr-lg-5 mb-5 mb-sm-2 mb-md-4 d-flex justify-content-end align-items-center containerGoBack">
				<GoBack
					onClick={() => history.goBack()}
					themes={themes}
				>
					<Arrow />
				</GoBack>
			</div>
		</aside>

		{ 
			data.loading ? <div>Cargando</div>
			: <React.Fragment>
				{
					data.error ? <div className="alert alert-danger">{data.error}</div>
					: <aside className="container-pizza mt-4 row">
						{ data.data.products.map(product => (
							<div 
								className="col-lg-6 my-2 d-flex" 
								key={product.description}
							>
						    	<img 
						    		className="img-fluid" 
						    		src={`http://localhost:5000/${product.img}`} 
						    		alt={product.description} 
						    	/>
					
								<div className="container-text flex-grow-1 d-flex align-items-center pl-3">
									<h6 className='card-title mb-0'>{product.description}</h6>
								</div>
							</div>
						)) }
					</aside>
				}
			</React.Fragment>	
		}
	</PizzeriaStyle>
)


export default PizzeriaPage;