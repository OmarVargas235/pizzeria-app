import React, { useState, useEffect, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import StorePage from './components/StorePage';
import { ContextTheme } from '../../context/ContextTheme';
import { ContextActiveMenu } from '../../context/ContextActiveMenu';
import { ContextuseFetch } from '../../context/ContextuseFetch';
import { ContextEditUser } from '../../context/ContextEditUser';
import { useInProp } from '../../customHooks/useInProp';
import { useResizeMedia } from '../../customHooks/useResizeMedia';

const Store = () => {
	
	const [inProp, setInProp] = useInProp();
	const [maxWidth] = useResizeMedia(767);

	const { img } = useContext( ContextEditUser );
	const { dataFetch:data } = useContext( ContextuseFetch );
	const { themes } = useContext( ContextTheme );
	const { 
		isActiveMenu, 
		setIsActiveMenu, 
		setActiveAnimation,
		activeAnimation,
	} = useContext( ContextActiveMenu );

	const [findPizzeria, setFindPizzeria] = useState('');
	const [dataPizzas, setDataPizzas] = useState([]);

	useEffect(() => {

		// Filtro de las pizzerias
		if (data.data) {

			const filter = data.data.filter(pizzeria => pizzeria.name.toLowerCase().indexOf(findPizzeria) === 0);
			
			setDataPizzas(filter);	
		}

	}, [findPizzeria, data]);

	const activeMenu = () => {

		setIsActiveMenu(true);
		setActiveAnimation(true);
	}
	
	return (
		<CSSTransition 
			in={inProp}
			timeout={100}
			classNames="store"
		>
			<StorePage 
				data={data}
				dataPizzas={dataPizzas}
				setFindPizzeria={setFindPizzeria}
				isActiveMenu={isActiveMenu}
				activeMenu={activeMenu}
				maxWidth={maxWidth}
				themes={themes}
				img={img}
				setInProp={setInProp}
				activeAnimation={activeAnimation}
			/>
		</CSSTransition>
	)
}

export default Store;