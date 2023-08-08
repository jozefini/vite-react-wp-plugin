import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// All entry points must be defined here.
// The value of each entry (without the `./`) is also the key
// used in manifest.json, that is used to generate the
// php file with versioned assets to be enqueued in WordPress.
const entry = {
	main: './index.html',
	front: './scripts/front.js',
};

// Vite configuration.
export default defineConfig({
	plugins: [
		// Enables React support.
		react(),
		// Turns SVGs files into React components.
		svgr({
			exclude: ['node_modules', 'build'],
		}),
	],
	build: {
		outDir: './build',
		manifest: true,
		rollupOptions: {
			input: entry,
		},
	},
	server: {
		port: 3000, // Adjust the port number as needed
	},
});
