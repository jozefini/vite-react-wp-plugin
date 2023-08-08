import './assets/styles/main.css';

import { App } from './app';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Render.
ReactDOM.createRoot(
	document.getElementById(import.meta.env.VITE_REACT_APP_ID)
).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
