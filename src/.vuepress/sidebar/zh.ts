import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh-cn/": [
    "",
    {
      text: "快速上手",
      prefix: 'get-start/',
      link: "get-start/",
      children: 'structure'
    },
    {
      text: '基本元素',
      prefix: 'elements/',
      link: 'elements/', //？
      children: ['literal.md', 'identifier.md', 'keyword.md', 'relation.md']
    }
  ],
});
