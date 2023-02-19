# 第二课：组合式

叮叮咚！计算 4 × (2 + 3) 的写法是这样的：

```scheme
> (* 4 (+ 2 3))
20
```

你猜对了吗？

Lisp 中，表达式的范围用小括号 `(` `)` 界定。而 Lisp 总是使用前缀表达式，所以表达式 `(+ 2 3)` 的意思就是计算 2 + 3 了。此外，表达式可以嵌套，就像刚刚所展示的那样：`(* 4 (+ 2 3))`，外侧的 `(* ...)` 表达式嵌套了一个子表达式 `(+ 2 3)`。只要你愿意，你完全可以嵌套很多很多层：

```scheme
(+ (* 3 (+ (* 2 4) (+ 3 5))) (+ (- 10 7) 6))
```

Lisp 对空格不敏感。所以可以写成下面这种美观形式：

```scheme
(+ (* 3
      (+ (* 2 4)
         (+ 3 5)))
   (+ (- 10 7)
      6))
```

可以看出，Lisp 不需要考虑运算符优先级（即“先乘除、后加减”等规定），所有运算符都是通过括号来界定范围并组合在一起的。Lisp 称这种表达式为 **组合式**。组合式中包含一系列有序元素；最左侧的元素称为 **运算符**，后续的元素称为 **运算对象** 或者 **实参**。

组合式的写法可以很轻松地支持带有多个实参的运算。比如计算 1 + 3 + 5 可以写成：

```scheme
> (+ 1 3 5)
9
```

Scheme 中，减法和除法也允许只带一个实参；计算的分别是负数和倒数。

```scheme
> (- 4)
-4
> (/ 5)
1/5
```

很简单，对吧？你可以自己试试多个实参的乘法，猜一下它的含义。[接下来](./lesson3.md) 的难度开始升级了！