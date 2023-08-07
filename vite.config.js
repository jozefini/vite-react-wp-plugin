import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [
		react(),
		svgr({
			exclude: ['node_modules', 'build'],
		}),
	],
	build: {
		outDir: './build',
		manifest: true,
		rollupOptions: {
			input: {
				main: './index.html',
				front: './scripts/front.js',
				// Add more entry points here.
			},
		},
	},
	server: {
		port: 3000, // Adjust the port number as needed
	},
});
