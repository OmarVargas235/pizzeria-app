import React, { useState, useEffect, useContext } from 'react';
import StorePage from './components/StorePage';
import { ContextTheme } from '../../context/ContextTheme';
import { ContextActiveMenu } from '../../context/ContextActiveMenu';
import { ContextuseFetch } from '../../context/ContextuseFetch';

const Store = () => {
	
	const { dataFetch:data } = useContext( ContextuseFetch );
	const { themes } = useContext( ContextTheme );
	const { 
		isActiveMenu, 
		setIsActiveMenu, 
		setActiveAnimation 
	} = useContext( ContextActiveMenu );

	const [findPizzeria, setFindPizzeria] = useState('');
	const [dataPizzas, setDataPizzas] = useState([]);
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

	const activeMenu = () => {

		setIsActiveMenu(true);
		setActiveAnimation(true);
	}
	
	return (
		<StorePage 
			data={data}
			dataPizzas={dataPizzas}
			setFindPizzeria={setFindPizzeria}
			isActiveMenu={isActiveMenu}
			activeMenu={activeMenu}
			maxWidth={maxWidth}
			themes={themes}
		/>
	)
}

export default Store;