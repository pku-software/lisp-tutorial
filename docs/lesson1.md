# 第一课：Lisp 介绍

Lisp 是世界上最古老的编程语言之一 。<small>（准确而言，是第二古老的语言；只有 FORTRAN 比它老。）</small>但是，与 FORTRAN、C 等编程语言不同，Lisp 不是由标准规定的一种语言，而是一大堆语言：它们长得很像，都称呼自己为“Lisp 方言”。

我们要学习的，正是这些方言中的一种——“MIT Scheme”。MIT Scheme 简称 Scheme，截止笔者撰文一共有三个标准：R5RS、R6RS 和 R7RS small。Scheme 除了这些标准之外，又衍生出一些方言，比如 GNU Guile 和 Racket。其中 [Racket](https://racket-lang.org) 发展很快、文档全面、社区也很活跃，所以我建议先 [安装一个 Racket 解释器](https://download.racket-lang.org/) 边学边试。

::: tip

因为 Racket 是 Scheme 的方言，R5RS 是 Scheme 的最普遍标准（Racket 也兼容 R5RS），而 Scheme 又是 Lisp 的方言，所以后文提到 Racket、Scheme、R5RS、Lisp 时，可以假设指代的都是同一个东西。

:::

安装好 Racket 的话，直接在命令行界面键入 `racket` 命令来启动解释器。你可以输入一些数，它会原模原样地打印出来：

```scheme
> 42  ; 你的输入
42    ; 解释器的输出
```

但是你如果输入 `(+ 1 2)`，它输出的就是 `3`。

```scheme
> (+ 1 2)
3
```

于是你就知道了，`(+ a b)` 可以计算整数 `a` `b` 的和。类似地，也有 `(- ...)` `(* ...)` 和 `(/ ...)`。

```scheme
> (+ 1 2)
3
> (- 6 10)
-4
> (* 3 4)
12
> (/ 5 2)
5/2        ; Racket 支持有理数运算，以分数的形式给出答案
```

这种将运算符写在所有操作数开头的写法称为**前缀表达式**。你可以自己猜一猜试一试，如何计算 4 × (2 + 3) ？答案会在 [第二课](./lesson2.md) 给出。