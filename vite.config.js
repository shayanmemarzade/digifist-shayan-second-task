import { defineConfig } from 'vite';
import sass from 'sass';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
    plugins: [
        createHtmlPlugin({
            minify: true,
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass,
            },
        }
    }
});