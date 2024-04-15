---
title: 转义
---

转义（Escape）是在语法层面上对特殊字符进行的可写操作。  
在 Lit 中，以 `` ` ``(反引号) 作为各种转义的先导符。

## 字符串转义

字符串转义是所有转义中最丰富的类型。要注意的是，只有在双引号包含的字符串字面量中才可进行转义。

下面是目前支持的转义列表：

| 符号 | 英文 | 中文 |
|:-:|:-:|:-:|
| \`\`| self-escape | 转义自身 |
| \`" | double_quoted | 双引号 |
| \`n | newline | 换行符 |
| \`t | tab | 制表符 |
| \`b | backspace | 退格 |
| \`u | unicode | 统一码字符 |

## 注释转义

多行注释转义仅两种：``` `` ``` 转义自身 和 `` `# `` 转义结束符。
单行注释不支持转义。

## 代码行转义

仅一种： `` `CRLF `` 转义换行符，相当于无字符。
```lit
multiline_doc = `
'''
multi
line
doc
'''
```
通过这样可以实现代码的跨行书写。