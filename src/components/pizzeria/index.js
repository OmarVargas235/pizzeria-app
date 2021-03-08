import React, { useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import PizzeriaPage from './components/PizzeriaPage';
import { ContextTheme } from '../../context/ContextTheme';
import { useFetch } from '../../customHooks/useFetch';
import { useInProp } from '../../customHooks/useInProp';

const Pizzeria = ({ match, history }) => {
	
	const [inProp, setInProp] = useInProp();

	const { themes } = useContext( ContextTheme );

	const data = useFetch('get-pizzeria', match.params.id);

	return (
		<CSSTransition 
			in={inProp}
			timeout={100}
			classNames="store"
		>
			<PizzeriaPage
				history={history}
				themes={themes}
				data={data}
				setInProp={setInProp}
			/>
		</CSSTransition>
	)
}

export default Pizzeria;