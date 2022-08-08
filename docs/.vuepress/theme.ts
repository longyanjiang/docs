import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://longyanjiang.github.io/docs/",
  author: {
    name: "Snine.jiang",
    url: "https://jiangly.com",
  },
  fullscreen: true,
  pure: true,
  iconAssets: "iconfont",
  logo: "/logo.png",
  repo: "longyanjiang",
  docsRepo: "longyanjiang/docs",
  docsDir: "docs/",
  iconAssets: "//at.alicdn.com/t/c/font_3545942_yum3m11qlg.css",
  docsBranch: "master",
  navbar: navbar,
  sidebar: sidebar,
  footer: "MIT Licensed | Copyright © 2022-present Snine.jiang",
  displayFooter: true,
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime","Word"],
  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },
  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    // comment: {
    //   /* Using Giscus */
    //   provider: "Giscus",
    //   repo: "longyanjiang/docs-comment",
    //   repoId: "R_kgDOHt8Xlg",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOHt8Xls4CQb4B",
    // },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
