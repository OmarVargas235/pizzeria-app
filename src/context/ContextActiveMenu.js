import React, { useState } from 'react';

export const ContextActiveMenu = React.createContext();

const ContextActiveMenuProvider = ({ children }) => {
	
	const [isActiveMenu, setIsActiveMenu] = useState(false);
	const [activeAnimation, setActiveAnimation] = useState(true);

	return (
		<ContextActiveMenu.Provider value={{
			isActiveMenu,
			setIsActiveMenu,
			activeAnimation,
			setActiveAnimation
		}}>
			{ children }
		</ContextActiveMenu.Provider>
	)
}

export default ContextActiveMenuProvider;