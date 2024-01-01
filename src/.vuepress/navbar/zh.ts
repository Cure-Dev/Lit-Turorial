import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh-cn/",
  {
    text: "章节", // 快速索引
    icon: "lightbulb", // 指南针
    prefix: "/zh-cn/",
    children: [
      
    ],
  },
  {
    text: "Lit 官网/下载/进阶文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
