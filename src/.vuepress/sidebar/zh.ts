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
      children: ['literal.md', 'identifier.md', 'keyword.md', 'relation.md', 'comment.md', 'escape.md', 'punc.md']
    },
    {
      text: '语法与结构',
      prefix: 'structure',
      children: ['statement.md', 'dec_and_def.md', 'codeblock.md', 'condition.md', 'loop.md', 'function.md', '过程', 'namespace.md', 'class.md', 'enum.md']
    },// 抽象层，作用域，生命周期
    {
      text: '（基本）数据类型',
    },
    {
      text: '包管理（系统）'
    },
    {
      text: '多范式',
      children: [
        {
          text: '面向对象' // 泛型
        }
      ]
    }
  ],
});
// 基础算法

// 其他文档