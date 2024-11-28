// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    port: 3333, // default: 3000
    host: 'localhost',
  },
  runtimeConfig: {
    public: {
      wordpressUrl: process.env.WP_INTERNAL_ENDPOINT,
    },
  },
  tailwindcss: {
    cssPath: ['~/assets/css/main.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2,
    },
    config: {
      content: [
        './pages/**/**.vue',
        './layouts/**/**.vue',
        './components/**/**.{js,ts,vue}',
        './plugin/**/**.{js,ts,vue}',
        './nuxt.config.{js,ts,vue}',
        './app.vue',
      ],
    },
    viewer: true,
  },
  app: {
    head: {
      meta: [
        {
          hid: 'name',
          name: 'name',
          content:
            'Helping organisations overcome complex digital challenges | Dynamite Technology',
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content:
            'Helping organisations overcome complex digital challenges | Dynamite Technology',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'We design & develop innovative digital solutions with over two decades of experience.',
        },
        {
          hid: 'og-desc',
          property: 'og:description',
          content:
            'We design & develop innovative digital solutions with over two decades of experience.',
        },
      ],
    },
    i18n: {
      locales: [
        {
          code: 'en',
          iso: 'en-GB',
        },
      ],
      defaultLocale: 'en',
      baseUrl: 'https://dynamite-technology.com',
    },
  },

  /*
   ** all non-outputting scss dependencies
   ** defined here for use globally
   */

  //Dont need to do this in N3, Env support
  // env: {
  //   BASE_API_URL: process.env.BASE_API_URL,
  //   WP_INTERNAL_ENDPOINT: process.env.WP_INTERNAL_ENDPOINT,
  //   WP_USER: process.env.WP_USER,
  //   WP_PASS: process.env.WP_PASS,
  //   //RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
  // },
  // loading: false,

  // serverMiddleware: [
  //   '~/serverMiddleware/sitemap_generator.js',
  //   '~/serverMiddleware/redirects.js',
  //   //"~/serverMiddleware/recaptchaAuth",
  //   {
  //     path: '/api',
  //     handler: '~/server/api',
  //   },
  // ],

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  googleFonts: {
    download: true,
    display: 'swap',
    preconnect: true,
    prefetch: true,
    families: {
      'Alfa Slab One': true,
      Montserrat: {
        wght: '100..900',
        ital: '100..900',
      },
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // {
    //   src: '~/plugins/axios-cache.js',
    //   mode: 'server',
    // },
  ],
  components: [
    {
      global: true,
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],
});
