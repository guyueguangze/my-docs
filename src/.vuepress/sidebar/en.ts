import { sidebar } from "vuepress-theme-hope"

export const enSidebar = sidebar({
  "/": [
    {
      text: "docs",
      icon: "laptop-code",
      prefix: "quantum/",
      link: "quantum/",
      children: "structure",
    },
    // "",
    // {
    //   text: "Demo",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "Docs",
    //   icon: "book",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // "slides",
  ],
})
