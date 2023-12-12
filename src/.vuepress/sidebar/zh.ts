import { sidebar } from "vuepress-theme-hope"

export const zhSidebar = sidebar({
  "/zh/": [
    {
      text: "操作文档",
      icon: "laptop-code",
      prefix: "quantum/",
      link: "quantum/",
      children: "structure",
    },
    // {
    //   text: "案例",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "文档",
    //   icon: "book",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // "slides",
  ],
})
