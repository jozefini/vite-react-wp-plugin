import './assets/styles/main.css';

import { App } from './app';
import { REACT_APP_ID } from '../plugin.config';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Render.
ReactDOM.createRoot(document.getElementById(REACT_APP_ID)).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
