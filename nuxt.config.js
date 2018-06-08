module.exports = {
  head: {
    title: 'Cybelien',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxtent project' }
    ],
    link: [
      { rel: 'stylesheet', href: '//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  build: {
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    'nuxt-buefy',
    ['nuxtent']
  ],
  loading: { color: '#3B8070' }
}
