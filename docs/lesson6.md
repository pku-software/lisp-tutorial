# 第六课：映射

Lisp 是一门函数式编程语言。函数式编程中的一个关键操作就是**映射**。Lisp 用 `map` 过程来表示映射。

`map` 过程接受两个实参 `f` 和 `l`。其中 `f` 是一个过程，而 `l` 则是一个列表。先来看例子：

```scheme
> (define (double x) (* x 2))
> (define my-list (list 1 2 3 4))
> (map double my-list)
'(2 4 6 8)
```

将过程 `double` 和列表 `my-list` 传递给 `map` 后，得到了一个新的列表 `'(2 4 6 8)`。从结果上不难猜到 `map` 的计算流程。很明显，`double` 过程会将传入的元素翻一倍返回，而 `(map double my-list)` 则将 `my-list` 中的每一个元素都翻了一倍，得到一个新列表——从 `'(1 2 3 4)` 到 `'(2 4 6 8)`。

所以，`(map f l)` 会将 `f` 依次作用在 `l` 的所有元素上，并将结果重新收集为一个列表作为返回值。这里不太直观的一点，是将过程 `f` （而非普通的数据变量）作为 `map` 的实参。像这样接受过程的过程在其他编程语言中是比较少见的，它们称为**高阶过程**或者高阶函数，是函数式编程的重要组成部分。

在使用高阶过程的时候，为了定义传入高阶过程的实参，我们特地编写了 `double` 过程。但是，这并不是必须的；`lambda` 特殊形式可以省略这一定义：

```scheme
> (map (lambda (x) (* x 2))
       my-list)
'(2 4 6 8)
```

这段代码使用了特殊形式 `lambda`，其含义是定义一个**匿名过程**，也被称为 **Lambda 表达式**。这个匿名过程接受形参 `x`，并返回 `(* x 2)`。事实上，用来定义过程的 `define` 特殊形式，其实是 `lambda` 特殊形式的简写：

```scheme
; 下面两行是等价的
(define (double x) (* x 2))
(define x (lambda (x) (* x 2)))
```

此外，`lambda` 特殊形式可以用来定义“局部变量”。看下面的例子：

```scheme
(if (equal? my-list '())
    '()
    ((lambda (first rest)
             (do-sth-with first rest))
     (car my-list) (cdr my-list)))
```

重点是第三行的 `lambda` 特殊形式。第三行到第五行的 Lambda 表达式接受两个形参 `first` `rest`，同时第三行的第一个括号直接以组合式的写法调用这个 Lambda 表达式，实参写在第六行，分别是 `(car my-list)` 和 `(cdr my-list)`。

其实这种写法和 `(do-sth-with (car my-list) (cdr my-list))` 效果上没有区别，只是用 `first` 名字代替了 `(car ...)`，用 `rest` 名字代替了 `(cdr ...)`。但是前者的写法可以让程序意图更明确，其效果类似于其它编程语言里的局部变量——用一个有意义的名字代替长表达式。

::: tip

此外，如果你回顾 Lisp 组合式的求值规则，就会发现如果需要多次使用 `(car ...)` 或 `(cdr ...)`，那么绑定到 `first` `rest` 两个名字的做法只需要计算一次 `car` 或 `cdr`；否则需要多次计算。

:::

由于“局部变量”这一需求非常常见，Lisp 引入了 `let` 特殊形式。刚刚的代码可以写成：

```scheme
(if (equal? my-list '())
    '()
    (let ((first (car my-list))        ; “定义局部变量” first 为 (car ...)
          (rest  (cdr my-list)))       ; “定义局部变量” rest  为 (cdr ...)
         (do-sth-with first rest)))    ; 在后面的部分使用这些局部变量
```

::: warning

为什么不用 `define` 特殊形式？因为 `define` 不能出现在 `if` 里。不同的 Scheme 方言对 `define` 出现的位置规定不同。大多数方言只允许 `define` 出现在“全局”，或者过程定义的开头部分。而 `let` 则是所有 Lisp 方言——甚至是其它函数式编程语言——在任何位置都允许出现的。

:::