import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://ktpumd.github.io',
    build: {
        assets: 'assets'
    },
    vite: {
        build: {
            cssMinify: true
        }
    }
});
