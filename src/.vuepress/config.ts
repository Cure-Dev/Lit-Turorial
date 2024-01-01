import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",

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

  // theme: theme({
  //   // default detect?
  //   locales: {
  //     '/en-us/': {
  //       selectLanguageName: 'English',
  //     },
  //     '/zh-cn/': {
  //       selectLanguageName: '简体中文',
  //     },
  //   },
  // }),
  theme,

  // Enable it with pwa
  // shouldPrefetch: true,
});

// title only 'lit tutorial'
// auto detect language
