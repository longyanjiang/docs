import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/guide/": [
    {
      text: "如何使用",
      icon: "creative",
      link: "",
      activeMatch: "/guide/"
    },
  ],
  "/golang/": [
    {
      text: "Go基础",
      icon: "creative",
      link: "/golang/",
      prefix: "basics/",
      collapsable: true,
      children: [
        {
          text: "为什么要学go",
          link: "为什么要学go.md"
        },
        {
          text: "go基础语法", 
          link: "go的基础语法.md"
        }
      ],
      // activeMatch: "/golang/"
    }
  ],
  "/nodejs/": [
    "one"
  ]
});
