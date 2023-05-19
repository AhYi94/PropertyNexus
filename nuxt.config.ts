// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Grand Dunman offers a home surrounded by nature that provides seclusion, peace, and a lavish expanse where you can relax in luxurious comfort. The land lot offers quick access to the city centre and other areas of Singapore, as Dakota MRT Station on the Circle Line is less than 100m away. This luxury development in District 15 of Singapore will include plenty of green space in addition to high-end facilities, design-forward buildings, stunning views, and top-notch services. The Dunman Road New Condo is situated near the Datoka Circle Line Station (CC8) and is close to Dunman Road in District 15 of Singapore. When fully developed, the new condo on Dunman Road will feature 1,002 residential units available.' },
                { hid: 'keywords', name: 'keywords', content: 'Grand Dunman, dunman, residences,dunman new launch, launch, new, latest Grand Dunman' },
                { name: 'format-detection', content: 'telephone=no' },
            ],
            script: [
                {
                  src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
                  integrity: 'sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=',
                  crossorigin: 'anonymous',
                },
              ],
        }
    },
    runtimeConfig: {
        email: '', // can be overridden by NUXT_API_SECRET environment variable
        title: '',
        emailUser: ''
    }
})
