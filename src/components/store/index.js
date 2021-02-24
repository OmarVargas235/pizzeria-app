import React, { useState, useEffect } from 'react';
import StorePage from './StorePage';
import { useFetch } from '../../customHooks/useFetch';

const Store = () => {
	
	const data = useFetch('data-pizzerias');

	const [findPizzeria, setFindPizzeria] = useState('');
	const [dataPizzas, setDataPizzas] = useState([]);

	useEffect(() => {

		// Filtro de las pizzerias
		if (data.data) {

			const filter = data.data.filter(pizzeria => pizzeria.name.toLowerCase().indexOf(findPizzeria) === 0);
			
			setDataPizzas(filter);	
		}

	}, [findPizzeria, data]);
	
	return (
		<StorePage 
			data={data}
			dataPizzas={dataPizzas}
			setFindPizzeria={setFindPizzeria}
		/>
	)
}

export default Store;