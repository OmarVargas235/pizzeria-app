import React, { useContext } from 'react';
import MenuPage from '../components/MenuPage';
import { alert } from '../../../layaut/alert';
import { logoutAuth } from '../../../types/types';
import { sendDataServer } from '../../../utilities/helper';
import { ContextAuth } from '../../../auth/ContextAuth';
import { ContextTheme } from '../../../context/ContextTheme';
import { ContextActiveMenu } from '../../../context/ContextActiveMenu';
import { ContextEditUser } from '../../../context/ContextEditUser';

const Menu = () => {
	
	const { img, dataUser } = useContext( ContextEditUser );
	const { auth, dispatch } = useContext( ContextAuth );
	const { themes, isDark, setIsDark } = useContext( ContextTheme );
	const {
		activeAnimation,
		setIsActiveMenu, 
		setActiveAnimation
	} = useContext( ContextActiveMenu );

	const desactiveMenuAndAnimation = () => {
		
		setTimeout(() => setIsActiveMenu(false), 700);
		setActiveAnimation(false);
	}

	const changeTheme = () => {
		
		setActiveAnimation(null);
		setTimeout(() => setIsDark(!isDark), 310);
	}

	const logout = async () => {
		
		dispatch({ type: logoutAuth });
		
		const { resp, result } = await sendDataServer('logout', {}, auth.token);
		
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
			dataUser={dataUser}
			img={img}
		/>
	)
}

export default Menu;