import './assets/styles/main.css';

import { REACT_APP_ID } from '../plugin.config';
import React from 'react';
import ReactDOM from 'react-dom/client';

// App.
function App() {
	return (
		<div>
			<h1 className="text-red-500 text-5xl font-bold">Hello World</h1>
		</div>
	);
}

// Render.
ReactDOM.createRoot(document.getElementById(REACT_APP_ID)).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
