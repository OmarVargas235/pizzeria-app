import React from 'react';
import {ReactComponent as UserIcon} from '../../assets/icons/user.svg';
import {ReactComponent as SeacrhIcon} from '../../assets/icons/search.svg';
import { ContainerStore } from './style';
import Spinner from '../../layaut/Spinner';
import CardPizzeriaPage from './CardPizzeriaPage';

const StorePage = ({ data, dataPizzas, setFindPizzeria }) => (
	<ContainerStore className="px-5">
		<div className="d-flex justify-content-end">
			<div className="container__iconUser d-flex justify-content-center align-items-center">
				<UserIcon />
			</div>
		</div>

		<div className="container-search mb-4">
			<p className="text-center w-25">Pizzerías</p>
			<h2>Tiendas</h2>
			<p>Escoge tu pizzería favorita</p>
			
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
			{ data.loading ? <Spinner /> : <CardPizzeriaPage data={dataPizzas} /> }
		</div>

	</ContainerStore>
);

export default StorePage;