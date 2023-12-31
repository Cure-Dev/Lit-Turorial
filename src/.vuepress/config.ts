import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/en-us/",

  locales: {
    "/en-us/": {
      lang: "en-US",
      title: "Lit Tutorial",
      description: "A Tutorial For Lit Beginners",
    },
    "/zh-cn/": {
      lang: "zh-CN",
      title: "Lit 新手教程",
      description: "Lit 初学者的新手教程",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

// title only 'lit tutorial'
// auto detect language
