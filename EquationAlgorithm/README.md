# 方程和算法

&emsp;&emsp;我认为数学方程公式与程序算法是可以相互转化的。

## 算法转化为方程

```c
i = n * n;
while(i!=1)
{
    i = i/2;
}
```

给 $i$ 的初值 $i_0$ 为

::: {custom-style="Figure"}
$$
\begin{equation}
    i_0 = n^2
\end{equation}
$$ {#eq:初值}
:::

算法中每次循环，可以看作一次时间迭代，取一段时间序列 $t$，循环内容用公式表示为：

::: {custom-style="Figure"}
$$
\begin{equation}
    i_t = \frac {i_{t-1}}
        {2}
\end{equation}
$$ {#eq:迭代}
:::

显然，上式是一个等比数列，所以 $i$ 表达式为：

::: {custom-style="Figure"}
$$
\begin{equation}
\begin{aligned}
    i_t = (\frac {1}{2})^t \cdot n^2
\end{aligned}
\end{equation}
$$ {#eq:等比数列的表达式}
:::

判断条件为：

::: {custom-style="Figure"}
$$
\begin{equation}
\begin{aligned}
    i_t = 1
\end{aligned}
\end{equation}
$$ {#eq:判断条件}
:::

所以可以计算迭代次数 $t$ 为：

::: {custom-style="Figure"}
$$
\begin{equation}
\begin{aligned}
    (\frac {1}{2})^t \cdot n^2 = 1 \\
    2^t = n^2 \\
    t = log_2(n^2) = 2 \cdot log_2(n)
\end{aligned}
\end{equation}
$$ {#eq:判断条件}
:::

理论上，这样是可以的，这里也可以直接写出时间复杂度 $T(n)$ ：

::: {custom-style="Figure"}
$$
\begin{equation}
\begin{aligned}
    T(n) = O\left(log_2(n)\right)
\end{aligned}
\end{equation}
$$ {#eq:时间复杂度}
:::