---
title: 关键字
---

## 关键字

关键字（Keyword）是编程语言的核心组成成分。

关键字具有特殊的语法性质与特殊的作用。通常作为结构的声明和元数据预处理。请看一些例子：

```lit
lit = namespace {
	io = import('lit/io')
	string = import('lit/string')
}

greeting = func(name -> lit.string) -> null {
	lit.io.outl('hello, ' + name)
}

loop(true) {
	greeting(lit.io.inl())
}
```

其中，`namespace` `import` `func` `loop` 都是关键字。关键字的用途将在后面讲到。

Lit 的关键字列表如下：

| | | | |
|:-:|:-:|:-:|:-:|
| import | if | else if | else |
| loop | if loop | else if loop | else loop |
| func | overload | class | 抽象类？ |
| namespace | mod | lib | export |

## 保留字

添加关键字可是一件麻烦事。有些关键字不知是否有必要添加，于是形成了保留字这种既没有作用又不能使用的关键字。

main do while until switch

## 局域关键字

有些关键字只在相应的作用域内有效

return
break..