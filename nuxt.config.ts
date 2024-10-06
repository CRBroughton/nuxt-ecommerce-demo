// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /* Modules are automatically imported from the modules directory
    See: https://nuxt.com/docs/guide/directory-structure/modules
  */
  future: {
    compatibilityVersion: 4,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        {
          name: 'viewport',
          content:
            'viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
      ],
    },
  },
  fonts: {
    families: [
      { name: 'Roboto', provider: 'google' },
    ],
  },

  imports: {
    presets: [
      {
        from: 'class-variance-authority',
        imports: ['VariantProps', 'cva'],
      },
    ],
  },

  devtools: {
    enabled: true,
  },

  tailwindcss: {
    viewer: { endpoint: '/_tailwind', exportViewer: true },
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/fonts'],
  compatibilityDate: '2024-09-30',
  extends: [
    'app/common',
  ],
})
