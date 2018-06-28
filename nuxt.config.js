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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#FFFFFF' },

  css: [
    '~/assets/css/base.css',
    '~/assets/css/font-awesome/css/font-awesome.min.css'
  ],

  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
  ],
  serverMiddleware: [
    bodyParser.json(),
    '~/server/api'
  ],

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