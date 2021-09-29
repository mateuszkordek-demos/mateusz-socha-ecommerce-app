import colors from "vuetify/es5/util/colors";

export default {
    target: (process.env.TARGET === 'static') ? 'static' : 'server',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Mateusz Socha',
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: ""
            },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "stylesheet", href: "https://use.typekit.net/zpl2xkh.css" },
            {
                rel: "stylesheet",
                type: "text/css",
                href: "https://enlighten.pl/dev/files/fa/new/css/all.min.css"
            },


            {
                rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png"
            },
            {
                rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png"
            },
            {
                rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png"
            },
            {
                rel: "manifest", href: "/favicon/site.webmanifest"
            },
            {
                rel: "mask-icon", href: "/favicon/safari-pinned-tab.svg", color: "#5bbad5"
            },
            {
                rel: "shortcut icon", href: "/favicon/favicon.ico"
            },
            {
                name: "msapplication-TileColor", content: "#FCB900"
            },
            {
                name: "msapplication-config", content: "/favicon/browserconfig.xml"
            },
            {
                name: "theme-color", content: "#FCB900"
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: "#727DB8",
        height: "2px"
    },
    /*
     ** Global CSS
     */
    css: ["~assets/custom-classes.sass"],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        "@/plugins/breakpoints",
        "@/plugins/bus",
        "@/plugins/filters",
        "@/plugins/youtube",
        "@/plugins/mixins",
        "@/plugins/gallery.client"
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ["@nuxtjs/vuetify"],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        "nuxt-material-design-icons",
        "@nuxtjs/axios",
        [
            "nuxt-breakpoints",
            {
                breakpoints: {
                    // default options
                    sm: 600,
                    md: 960,
                    lg: 1264,
                    xl: 1904,
                    options: {
                        polyfill: true,
                        throttle: 200
                    }
                }
            }
        ],
        ['nuxt-facebook-pixel-module', {
            /* module options */
            track: 'PageView',
            pixelId: '285285032623435',
            autoPageView: true,
            disabled: false
        }],
    ],

    // Google Analytics
    gtm: {
        id: 'GTM-PJNGV8L'
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
        customVariables: ["~/assets/variables.sass"],
        lang: {
            current: "en"
        },
        theme: {
            themes: {
                light: {
                    primary: "#FCB900",
                    accent: "#707070",
                    secondary: "#727DB8",
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: "#5faf6f"
                }
            }
        },
        options: {
            customProperties: true
        }
    },
    /*
     ** Development server
     */
    server: {
        port: 3000, // default: 3000
        host: "0.0.0.0" // default: localhost
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) { }
    }
};
