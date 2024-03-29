---
title: 字面量
---

如果你暂未了解字面量，请先看几个例子
```lit
2024        ;; 数字型字面量
'你好，世界' ;; 字符型字面量
true        ;; 布尔型字面量
```

字面量(literal)是一门语言中最基本的元素。具有以下特点：

1. 所见即所得：如`2024`，无需解释，你可以一眼知道这是一个数字。
2. 上下文无关：无论这个`2024`出现在什么地方，它始终代表一个值为2024的整数。
3. 可预处理：如果一个地方出现了`2024 + 1`这样的表达式，它可以被立刻处理为`2025`。
4. 不可赋值：字面量异于标识符，例如`2024 = '你好'`是非法的。

## 数字字面量

### 整型、浮点型
整、浮点型字面量的书写与数学上的形式相同。
```lit
2024 ;; 是一个整数字面量
3.14 ;; 是一个浮点数（小数）字面量
```
:::warning
请注意，目前的 Lit 不支持诸如`.3` `2.` 这样的小数写法。也不支持`0b101`这样的其他进制。

为了代码风格的统一，Lit 不会添加指数字面量写法。例如`2e8`是不合法的。请写作`2*10^8`。不过不用担心，纯字面量的运算是经过预处理的，不用担心性能问题。
:::

### 极限
Lit 使用 `inf` 表示数学中的 `∞`

### 非数（Beta）
Lit 使用 `nan` 作为非数的字面量。


## 字符字面量

字符串（String）是0或多个单字符组成的的有序序列。  
在 Lit 中，字符字面量 和 字符串字面量 共用 4 种书写方式。

1. `'内容'`  
  用单引号包围。内容中不可包含换行符（就是内容只可占据一行）。不进行转义。
  ```lit
'c'
'string'
```
2. `"内容"`  
  用双引号包围。内容中不可包含换行符。进行转义。
  ```lit
"c"
"string"
"escaped`nstring"
```
3. `'''内容'''`  
  用前后三个单引号包围。内容中可包含换行符。不进行转义。
  ```lit
'''multi
line
string
'''
```
4. `"""内容"""`  
  用前后三个双引号包围。内容中可包含换行符。进行转义。
  ```lit
"""multi
line`nescaped
string
"""
```

关于转义的详细内容，请参见<>

## 布尔字面量

布尔（Boolean）是一种特殊的数据类型，只有true（真）、false（假）两种状态。
::::warning
与大多数编程语言不同的是，Lit 中的 bool 并不是 int 的子类。将 bool 和 int 比较的结果永远是 false。  
以下是两种语言的对比：

:::tabs
@tab Python
```python
False == 0 # 结果： True
```

@tab Lit
```lit
false == 0 ;; 结果： false
```
:::
::::

---
高级内容

## 空值

空值只有一个实例： null  
如果一个函数没有指定返回值，那么它将返回 null

## 未定义（beta）

未定义（Undefined）也只有一个实例： void  
如果出现访问越界，则返回void（beta）
当一个标识符被赋值为 void 时，代表这条语句仅为声明语句。