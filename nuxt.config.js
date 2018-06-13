module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | STAR MOVIE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css'},
    ]
  },
  css: [
    '~/assets/css/base.css',
    '~/assets/font-awesome/css/font-awesome.min.css'
  ],
  modules: [
    'bootstrap-vue/nuxt',
    // Or if you have custom bootstrap CSS...
    ['bootstrap-vue/nuxt', { css: false }],
  ],

  loading: {
    color: '#3B8070',
    height: '5px'
  },
  build: {
    extractCSS: true,
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
