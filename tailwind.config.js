import { REACT_APP_ID } from './plugin.config';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	important: `#${REACT_APP_ID}`,
	theme: {
		extend: {},
	},
	plugins: [],
};
