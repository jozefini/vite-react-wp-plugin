import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
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
