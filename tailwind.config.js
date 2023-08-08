require('dotenv').config();

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {},
	},
	plugins: [],
	// In WordPress, is important to prefix the classes to avoid conflicts.
	// This adds the REACT_APP_ID as a prefix to all classes.
	important: `#${process.env.VITE_REACT_APP_ID}`,
};
