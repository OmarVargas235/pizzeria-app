import React, { useState, useEffect } from 'react';
import StorePage from './components/StorePage';
import { useFetch } from '../../customHooks/useFetch';

const Store = () => {
	
	const data = useFetch('data-pizzerias');

	const [findPizzeria, setFindPizzeria] = useState('');
	const [dataPizzas, setDataPizzas] = useState([]);
	const [isActiveMenu, setIsActiveMenu] = useState(false);
	const [maxWidth, setMaxWidth] = useState(window.matchMedia('(max-width: 767px)').matches);

	useEffect(() => {

		// Filtro de las pizzerias
		if (data.data) {

			const filter = data.data.filter(pizzeria => pizzeria.name.toLowerCase().indexOf(findPizzeria) === 0);
			
			setDataPizzas(filter);	
		}

	}, [findPizzeria, data]);

	useEffect(() => {
		
		function resizeMedia() {
			
			setMaxWidth(window.matchMedia('(max-width: 767px)').matches);
		}
		
		window.addEventListener('resize', resizeMedia);

		return () => window.removeEventListener('resize', resizeMedia);

	}, [maxWidth]);
	
	return (
		<StorePage 
			data={data}
			dataPizzas={dataPizzas}
			setFindPizzeria={setFindPizzeria}
			isActiveMenu={isActiveMenu}
			setIsActiveMenu={setIsActiveMenu}
			maxWidth={maxWidth}
		/>
	)
}

export default Store;