import React, { useState, useContext } from 'react';
import MenuPage from '../components/MenuPage';
// import { logout } from '../../../types/types';
// import { ContextAuth } from '../../../auth/ContextAuth';
import { sendDataServer } from '../../../utilities/helper';
import { ContextTheme } from '../../../context/ContextTheme';

const Menu = ({ setIsActiveMenu }) => {
	
	// const { dispatch } = useContext( ContextAuth );
	const { themes, isDark, setIsDark } = useContext( ContextTheme );

	const [activeAnimation, setActiveAnimation] = useState(true);

	const desactiveMenuAndAnimation = () => {
		
		setTimeout(() => setIsActiveMenu(false), 800);
		setActiveAnimation(false);
	}

	const changeTheme = () => {
		
		setIsActiveMenu(true);
		setIsDark(!isDark);
	}

	const logout = async () => {

		// dispatch({ type: logout });
		const { resp, result } = await sendDataServer('logout');
		console.log(resp)
		console.log(result)
	}
	
	return (
		<MenuPage 
			desactiveMenuAndAnimation={desactiveMenuAndAnimation} 
			activeAnimation={activeAnimation} 
			logout={logout}
			themes={themes}
			isDark={isDark}
			changeTheme={changeTheme}
		/>
	)
}

export default Menu;