import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
    app: {
        baseURL: '/lee-experience/',
        buildAssetsDir: '/static/'
    }
})