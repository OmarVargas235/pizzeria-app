import React, { useState, useEffect } from 'react';

export const ContextTheme = React.createContext();

const getIsDarkLocalStorage = JSON.parse(window.localStorage.getItem('isDark'));

const ContextThemeProvider = ({ children }) => {
	
	const [isDark, setIsDark] = useState( getIsDarkLocalStorage );
	const [themes, setThemes] = useState([]);
	
	useEffect(() => {

		const p_h2 = isDark ? 'white' : 'black';
		const h3_span_svg = isDark ? 'white' : '#212529';
		const backgroundWhite = isDark ? '#222222' : 'rgba(255,255,255,.95)';
		const containerIconUser = isDark ? 'white' : 'black';
		const formControl = isDark ? '#222222' : 'transparent';

		setThemes({ p_h2, h3_span_svg, backgroundWhite, containerIconUser, formControl });
		window.localStorage.setItem('isDark', isDark);

	}, [isDark]);

	return (
		<ContextTheme.Provider value={{
			themes,
			isDark,
			setIsDark,
		}}>
			{ children }
		</ContextTheme.Provider>
	)
}

export default ContextThemeProvider;