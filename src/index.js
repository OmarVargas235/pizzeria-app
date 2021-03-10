import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextThemeProvider from './context/ContextTheme';
console.log(process.env.REACT_APP_BACKEND_URL)
ReactDOM.render(
	<ContextThemeProvider>
		<App />
	</ContextThemeProvider>,
	document.getElementById('root')
);