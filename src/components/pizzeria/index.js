import React, { useContext } from 'react';
import PizzeriaPage from './PizzeriaPage';
import { ContextTheme } from '../../context/ContextTheme';
import { useFetch } from '../../customHooks/useFetch';

const Pizzeria = ({ match, history }) => {

	const { themes } = useContext( ContextTheme );

	const data = useFetch('get-pizzeria', match.params.id);

	return (
		<PizzeriaPage
			history={history}
			themes={themes}
			data={data}
		/>
	)
}

export default Pizzeria;