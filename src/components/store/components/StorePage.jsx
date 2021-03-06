import React from 'react';
import {ReactComponent as UserIcon} from '../../../assets/icons/user.svg';
import {ReactComponent as BtnHamburger} from '../../../assets/icons/btnHamburger.svg';
import {ReactComponent as SeacrhIcon} from '../../../assets/icons/search.svg';
import { ContainerStore } from '../style';
import Spinner from '../../../layaut/Spinner';
import CardsPizzeriaPage from './CardsPizzeriaPage';
import Menu from '../container/Menu';

const StorePage = ({ data, dataPizzas, setFindPizzeria, isActiveMenu, activeMenu, maxWidth, themes, img }) => (
	<ContainerStore className="background-white" themes={themes}>
		<aside className="px-5">
			<div className="d-flex justify-content-end">
				<div 
					className={`${maxWidth ? 'btn-hamburger' : 'container__iconUser'} d-flex justify-content-center align-items-center`} 
					style={{cursor: 'pointer'}}
					onClick={activeMenu}
				>
					{ 
						maxWidth ? <BtnHamburger className="btnHamburger" /> 
						: 
							img === '' 
							? <UserIcon />  
							: <img 
					    		className="img-fluid"
					    		src={`http://localhost:5000/${img}`}
					    		alt={img}
			    			/> 	
			    		
					}
				</div>
			</div>
			
			<div className="container-search mb-4">
				<p className="text-center w-25 mb-1 mb-md-4">Pizzerías</p>
				<h2>Tiendas</h2>
				<p className="mb-1 mb-md-4">Escoge tu pizzería favorita</p>
				
				<div className="input-group mb-3 w-75">
				    <input 
				    	type="text" 
				    	className="form-control" 
				    	placeholder="Buscar una pizzería"
				    	onChange={ e => setFindPizzeria(e.target.value.toLowerCase()) } 
				    />
			
				    <div className="input-group-prepend d-flex justify-content-center align-items-center pr-3">
						<SeacrhIcon />
				    </div>
				</div>
			</div>

			<div className="container-stores">
				{ 
					data.loading ? <Spinner />
					: <React.Fragment>
						{
							data.error ? <div className="alert alert-danger">{data.error}</div>
							: <CardsPizzeriaPage data={dataPizzas} dark={themes.containerIconUser} />
						}
					</React.Fragment>
				
				}
			</div>
		</aside>
		
		{ isActiveMenu ? <Menu /> : null }

	</ContainerStore>
);

export default StorePage;