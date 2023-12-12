import { defineUserConfig } from "vuepress"
import theme from "./theme.js"
import { searchProPlugin } from "vuepress-plugin-search-pro"

export default defineUserConfig({
  base: "/my-docs/",

  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "太元量子云平台使用文档",
      description: "vuepress-theme-hope 的文档演示",
    },
    "/": {
      lang: "en-US",
      title: "Docs Taiyuan",
      description: "A docs demo for vuepress-theme-hope",
    },
  },

  theme,

  plugins: [
    searchProPlugin({
      indexContent: true,
      hotReload: true,
      customFields: [
        {
          getter: ({ frontmatter }) => frontmatter.tag as string[],
          formatter: `Tag: $content`,
        },
      ],
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
})
