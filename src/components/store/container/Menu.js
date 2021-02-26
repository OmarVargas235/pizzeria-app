import React, { useState } from 'react';
import MenuPage from '../components/MenuPage';

const Menu = ({ setIsActiveMenu }) => {

	const [activeAnimation, setActiveAnimation] = useState(true);

	const desactiveMenuAndAnimation = () => {
		
		setTimeout(() => setIsActiveMenu(false), 800);
		setActiveAnimation(false);
	}
	
	return (
		<MenuPage 
			desactiveMenuAndAnimation={desactiveMenuAndAnimation} 
			activeAnimation={activeAnimation} 
		/>
	)
}

export default Menu;