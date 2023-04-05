// 1.- librerias
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// 2.- components
import { BtnToggleStyles } from '../styled';

// 3.- iconos
import { ReactComponent as Sun } from '../../../assets/icons/sun.svg';
import { ReactComponent as Moon } from '../../../assets/icons/moon.svg';

// 4.- redux
import { setActiveDark, IInitState } from '../../../redux/reducers/reducerTheme';
import { RootState } from '../../../redux/store';

const BtnToggle = (): JSX.Element => {

	const dispatch = useDispatch();
	const { isDark } = useSelector<RootState, IInitState>(state => state.theme);

	const switchTheme = (): void => {

		window.localStorage.setItem('theme', JSON.stringify(!isDark));
		dispatch(setActiveDark(!isDark));
	}

	return (
		<BtnToggleStyles>
			<input 
				type="checkbox"
				className="checkbox"
				id="button-toggle"
				checked={isDark}
				onChange={()=>{}}
			/>
	
			<label
				htmlFor="button-toggle"
				className="label"
				onClick={switchTheme}
			>
				<Sun className="sun" />
				<Moon className="moon" />
			</label>
		</BtnToggleStyles>
	);
}

export default React.memo(BtnToggle);