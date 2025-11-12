import type {
    SiteConfig,
    ProfileConfig
} from "./types/config"

export const siteConfig: SiteConfig = {
    title: "风绘",
    subTitle: "欲买桂花同载酒，终不似，少年游",

    backgroundImage: {
        enabled: false, // If backgroundImage is not enabled, this will be used as the background color
        url: "assets/background.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    },

    favicon: "/favicon/favicon.png" // Path of the favicon, relative to the /public directory
}

export const profileConfig: ProfileConfig = {
    avatar: "assets/avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    name: "风绘",
    description: "欲买桂花同载酒，终不似，少年游",
    introPage: "https://fhowo.top",
    links: [
        // Visit https://icones.js.org/ for icon codes
        // You will need to install the corresponding icon set if it's not already included
        // `pnpm add @iconify-json/<icon-set-name>`
        // Then add icon to defineConfig.integrationsin.icon in astro.config.mjs
        // The colors a best to be clearly visible in both light and dark environments 
        {
          name: "Blog",
          url: "https://blog.fhowo.top",
          icon: "fa6-solid:tree",
          color: "#0dbc79", // You can find more colors here: https://zhongguose.com/
        },
        {
            name: "GitHub",
            url: "https://github.com/fhowotop",
            icon: "fa6-brands:github",
            color: "#303030ff",
        },
        {
            name: "Twitter",
            url: "https://twitter.com/fhowotop",
            icon: "ri:twitter-x-fill",
            color: "#000000ff",
        },
        {
            name: "Telegram",
            url: "https://t.me/fhowo",
            icon: "fa6-brands:telegram",
            color: "#0088ccff",
        },
        // {
        //     name: "QQ",
        //     url: "https://res.abeim.cn/api/qq/?qq=2901987386",
        //     icon: "fa6-brands:qq",
        //     color: "#10a2d7ff",
        // },
        {
            name: "Mail",
            url: "mailto:me@fhowo.top",
            icon: "fa6-solid:envelope",
            color: "#a4f39aff"
        },
    ]
}