import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "简明文档",
  description: "Snine的笔记、中文文档、前端文档、后端文档、学习资料、随笔、日常问题。",
  base: "/docs/",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  theme,
});
