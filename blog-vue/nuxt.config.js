const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css?family=Lato|Montserrat"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#48E748', height: '3px' },

  /*
  ** Global CSS
  */
  css: [
    // CSS file in the project
    // '@/assets/css/main.css',
    // SASS file in the project
    '@/assets/css/main.sass'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/core-components.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.BASE_URL || 'https://blog-vue-97.firebaseio.com/'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, {isDev, isClient}) {
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    API_KEY: 'AIzaSyB0wGR-uWLKhPJrFC1Cb6CKe136inNv0g8'
  }
}
