import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextThemeProvider from './context/ContextTheme';

ReactDOM.render(
	<React.StrictMode>
		<ContextThemeProvider>
			<App />
		</ContextThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);