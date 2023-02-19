# 第三课：命名

说到编程语言，就不得不提到 **变量**。在 C/C++ 中，我们说变量是给内存起名字；在 Lisp 里也很类似，变量是**给值起名字**。

Scheme 使用这种写法给值 `2` 起一个叫做 `size` 的名字：

```scheme
(define size 2)
```

这样写下之后，解释器就认为名字 `size` 关联到了整数 `2`。之后的程序中所有出现 `size` 的地方，都认为它是 `2`：

```scheme
> (* 5 size)
10
```

没什么好说的，因为确实很简单：

```scheme
> (define pi 3.14159)
> (define radius (+ 3 7))
> (* pi (* radius radius))
314.159
```

大的要来了：我们还可以定义“函数”！

```scheme
(define (square x) (* x x))
```

解释一下上面这句话的含义：它定义了一个叫做 `square` 的“函数”：其接受一个运算对象 `x`，计算并“返回” `(* x x)` 的结果。当你把 `square` 放在组合式的操作数的位置的时候，就会“调用”这个函数并得到结果：

```scheme
> (square 21)
441
```

如果你学过其它编程语言，这看上去不算陌生。只是说，在 Lisp 里，他们管这种“函数”叫做 **过程**。其实指的是同一个东西。过程可以接受任意多个运算对象：

```scheme
; 猜猜这个函数在算什么？
> (define (volume h r)
          (* h
             (* r r 3.14159)))
> (volume 4 2)
50.26544
```

理所当然地，这里的 `h` `r` 叫做**形参**。总结一下语法吧：

```scheme
; 定义变量的方法：
(define 变量名 值)
; 定义函数的方法：
(define (函数名 形参...) 运算结果)
; 调用函数的方法：
(函数名 实参...)   ; 所以聪明的你就知道了，+ - * / 这些“运算符”其实就是名字比较怪的函数
```

如果你觉得没问题，那么就 [继续前进](./lesson4.md) 吧！