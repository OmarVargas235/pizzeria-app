import React, { useState, useContext } from 'react';
import MenuPage from '../components/MenuPage';
import { alert } from '../../../layaut/alert';
import { logoutAuth } from '../../../types/types';
import { ContextAuth } from '../../../auth/ContextAuth';
import { sendDataServer } from '../../../utilities/helper';
import { ContextTheme } from '../../../context/ContextTheme';

const Menu = ({ setIsActiveMenu }) => {
	
	const { dispatch } = useContext( ContextAuth );
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
		
		dispatch({ type: logoutAuth });
		const getToken = JSON.parse(window.localStorage.getItem('userPizza')) || null;
		
		if (!getToken) return;
		
		const { resp, result } = await sendDataServer('logout', {}, getToken.token);

		if (resp.status !== 200) alert('error', result.message);
		else if (resp.status === 200) alert('success', result.message);
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