import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	base: '/',
	define: {
      '__BASE_URL__': JSON.stringify('https://lithehax.se'),
    },
});
