import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://ktpumd.github.io',
    base: '/new/',
    build: {
        assets: 'assets'
    },
    vite: {
        build: {
            cssMinify: true
        }
    }
});
