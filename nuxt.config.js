export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'apk-gudang',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // Menambahkan Axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://axios.nuxtjs.org/options
  axios: {
    baseURL: 'https://664307293c01a059ea212f61.mockapi.io/api/v1/' // Base URL untuk API Anda
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
