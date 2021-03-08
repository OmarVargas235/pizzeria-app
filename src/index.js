import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextThemeProvider from './context/ContextTheme';

ReactDOM.render(
	<ContextThemeProvider>
		<App />
	</ContextThemeProvider>,
	document.getElementById('root')
);