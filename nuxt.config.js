export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s',
    title: 'Portfolio • Jascha A. Quintern',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    // '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    // Doc: https://typescript.nuxtjs.org/guide/setup.html#installation
    '@nuxt/typescript-build'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/nuxt-i18n
    [
      'nuxt-i18n',
      {
        strategy: 'no_prefix',
        locales: ['en', 'de'],
        defaultLocale: 'en',
        vueI18n: {},
        vueI18nLoader: true,
        detectBrowserLanguage: false
        //  {
        //   useCookie: true,
        //   cookieKey: 'i18n_redirected',
        //   alwaysRedirect: true
        // }
      }
    ],
    // Doc: https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',
    // Doc: https://github.com/stephenkr/nuxt-password-protect
    'nuxt-password-protect'
  ],
  /*
   ** Password protect config
   */
  passwordProtect: {
    enabled: true,
    formPath: '/password',
    password: process.env.PASSWORD || 'test',
    tokenSeed: 101010,
    queryString: '_pw',
    cookieName: '_password',
    cookie: {
      prefix: '',
      expires: 5
    }
    // ignoredPaths: ['/public-page']
  },
  router: {
    middleware: ['password-protect']
  },
  /*
   ** Load webfonts
   */
  webfontloader: {
    google: {
      families: ['Montserrat:700', 'Open+Sans:400,600,700', 'Indie+Flower']
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: {
        family: 'Open Sans'
      },
      icons: 'mdi'
    },
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#0c344b',
          accent: '#0F7AD8',
          secondary: '#3d5866',
          info: '#00CCE4',
          warning: '#e86e16',
          error: '#ff4f56',
          success: '#15BD76'
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
    postcss: {
      plugins: {},
      preset: {
        autoprefixer: {}
      }
    }
  }
}
