import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'pages/about.html'),
                services: resolve(__dirname, 'pages/services.html'),
                portfolio: resolve(__dirname, 'pages/portfolio.html'),
                contact: resolve(__dirname, 'pages/contact.html'),
                blog: resolve(__dirname, 'pages/blog.html'),
                // Individual blog posts
                'blog-ai-use-cases': resolve(__dirname, 'pages/blog/ai-use-cases.html'),
                'blog-design-systems': resolve(__dirname, 'pages/blog/design-systems.html'),
                'blog-ecommerce-conversion': resolve(__dirname, 'pages/blog/ecommerce-conversion-boost.html'),
                'blog-fast-mobile': resolve(__dirname, 'pages/blog/fast-mobile.html'),
                'blog-international-seo': resolve(__dirname, 'pages/blog/international-seo-2025.html'),
                'blog-pwa': resolve(__dirname, 'pages/blog/pwa-2025.html'),
                'blog-security': resolve(__dirname, 'pages/blog/security-best-practices-2025.html'),
                'blog-seo-basics': resolve(__dirname, 'pages/blog/seo-basics-2025.html'),
                'blog-trending-tools': resolve(__dirname, 'pages/blog/trending-tools-2025.html'),
                'blog-web-vs-native': resolve(__dirname, 'pages/blog/web-vs-native.html'),
            },
        },
    },
})
