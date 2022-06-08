export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Frontier Task',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
      {
        rel: 'stylesheet',
        href: 'https://unicons.iconscout.com/release/v2.1.11/css/unicons.css',
      },
    ],
  },

  // extend router
  router: {
    extendRoutes(routes) {
      routes.push({
        path: '/',
        redirect: '/auth/login',
      })
    },
  },

  // Style resources
  styleResources: {
    scss: ['~/assets/scss/variables.scss'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // custom
    '~assets/scss/styles.scss',
    '~assets/scss/components.scss',
    '~assets/scss/header.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/axios.js' },
    { src: '~plugins/date.js' },
    { src: '~plugins/utils.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    // auth
    '~/components/auth',
    // ui
    '~/components/ui',
    // products
    '~/components/products',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // environemnt variables
    '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // style resources
    '@nuxtjs/style-resources',
  ],

  eslint: {
    fix: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // buefy
    'nuxt-buefy',
    // axios
    '@nuxtjs/axios',
  ],

  // buefy opts
  buefy: {
    css: false,
    materialDesignIcons: false,
    defaultIconPack: 'uil',
    customIconPacks: {
      uil: {
        sizes: {
          default: 'is-size-5',
          'is-small': '',
          'is-medium': 'is-size-3',
          'is-large': 'is-size-1',
        },
        iconPrefix: 'uil-',
        internalIcons: {
          'eye-off': 'eye-slash',
          'chevron-left': 'angle-left',
          'chevron-right': 'angle-right',
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [],
  },
}
