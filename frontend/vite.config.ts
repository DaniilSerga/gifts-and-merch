import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
        @use "@/shared/styles/variables" as *;
        @use "@/shared/styles/typography" as typography;
        `,
			},
		},
	},
	resolve: {
		alias: {
			'@/shared/styles': path.resolve(__dirname, './src/shared/styles'),
		},
	},
});
