const pkg = require('./package')
const bodyParser = require('body-parser')
module.exports = {
  mode: 'universal',
  head: {
    titleTemplate: '%s | STAR MOVIE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/movie.ico' }
    ]
  },
  loading: { color: '#FFFFFF' },

  css: [
    '~/assets/css/base.css',
    '~/assets/css/font-awesome/css/font-awesome.min.css'
  ],

  plugins: ['~plugins/vue-lazyload'],

  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'
  ],
  serverMiddleware: [
    bodyParser.json()
  ],

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:80',
    HOST: '0.0.0.0',//0.0.0.0/127.0.0.1
    PORT: '80',//80/3000
  },

  cache: true,

  build: {
    extractCSS: true,
    vendor: ['axios'],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue|json)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
