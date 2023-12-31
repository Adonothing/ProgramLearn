# LaTex

&emsp;&emsp;LaTex语法

## 文件夹说明

1. 
2. []()：。

## 语法

### 希腊字母

$$
αA \alpha A \\
β B \beta B \\
γ Γ \gamma \Gamma \\
δ Δ \delta \Delta \\
ϵ ε E \epsilon \varepsilon E \\
ζ Z \zeta Z \\
ηH \eta H \\
θ ϑ Θ \theta \vartheta \Theta \\
ι I \iota I \\
κ K \kappa K \\
λ Λ \lambda \Lambda \\
μ M \mu M \\
ν V \nu V \\
ξ Ξ \xi \Xi \\
ο O o O \\
π Π \pi \Pi \\
ρ ϱ P \rho \varrho P \\
σ Σ \sigma \Sigma \\
τ T \tau T \\
υ Υ \upsilon \Upsilon \\
ϕ φ Φ \phi \varphi \Phi \\
χ X \chi X \\
ψ Ψ \psi \Psi \\
ω Ω \omega \Omega \\
$$

### 不等于

$$
\neq
$$

### 点乘

$$
\cdot
$$

### 叉乘

$$
\times
$$

### 分式

$$
\frac{a}{b}
$$

### 加粗

$$
\mathbf{dT(P)}
$$

### 单括号

$$
\left\{
\right.
$$

一般情况下，括号是成对使用的，用一半的话需要手动取消。其中`\right.`就是手动取消的表达式。

### 矢量

&emsp;&emsp;向右箭头，这个不标准。

$$
\overrightarrow{a}
$$

矢量，正确的表达：

$$
\vec{a}
$$

### 对齐

1. 左对齐
2. 右对齐
3. 等号处对齐align，在&处对齐

### 上下标

$$
\mathop{\sum}_{a=\frac{1}{2} \times 10}^{b=\frac{4}{5}}c \cdot d
$$

$$
\mathop{\sum}\limits_{a=\frac{1}{2} \times 10}^{b=\frac{4}{5}}c \cdot d
$$

### 省略号

$$
Y=\{y_1, y_2, \ldots, y_n\},
\begin{bmatrix}
    x_{11} & x_{12}  & \cdots   & x_{1m}   \\
    x_{21} & x_{22}  & \cdots   & x_{2m}  \\
    \vdots & \vdots  & \ddots   & \vdots  \\
    x_{n1} & x_{n2}  & \cdots\  & x_{nm}  \\
\end{bmatrix}
$$

### 公式编号

#### 无

$$
d\overrightarrow{a} 
        = \overrightarrow{v} 
        \cdot d\tau \\
    = {\overrightarrow{e}}_{1 \times 3} 
        \cdot \left\lbrack 
            \begin{array}{r}
                da_{1} \\
                da_{2} \\
                da_{3}
            \end{array} 
        \right\rbrack_{3 \times 1} 
        = {\overrightarrow{e}}_{1 \times 3} 
        \cdot \left\lbrack 
            \begin{array}{r}
                dx \\
                dy \\
                dz
            \end{array} 
        \right\rbrack_{3 \times 1} \\
    = \overrightarrow{e} \cdot da
$$

#### equation

$$
\begin{equation}
    d\overrightarrow{a} 
        = \overrightarrow{v} 
        \cdot d\tau \\
    = {\overrightarrow{e}}_{1 \times 3} 
        \cdot \left\lbrack 
            \begin{array}{r}
                da_{1} \\
                da_{2} \\
                da_{3}
            \end{array} 
        \right\rbrack_{3 \times 1} 
        = {\overrightarrow{e}}_{1 \times 3} 
        \cdot \left\lbrack 
            \begin{array}{r}
                dx \\
                dy \\
                dz
            \end{array} 
        \right\rbrack_{3 \times 1} \\
    = \overrightarrow{e} \cdot da
\end{equation}
$$

#### align

$$
\begin{align}
    d\overrightarrow{a} 
        &= \overrightarrow{v} 
        \cdot d\tau \\
    &= {\overrightarrow{e}}_{1 \times 3} 
        \cdot \left\lbrack 
            \begin{array}{r}
                da_{1} \\
                da_{2} \\
                da_{3}
            \end{array} 
        \right\rbrack_{3 \times 1} 
        = {\overrightarrow{e}}_{1 \times 3} 
        \cdot \left\lbrack 
            \begin{array}{r}
                dx \\
                dy \\
                dz
            \end{array} 
        \right\rbrack_{3 \times 1} \\
    &= \overrightarrow{e} \cdot da
\end{align}
$$

#### align*

$$
\begin{align*}
    d\overrightarrow{a} 
        &= \overrightarrow{v} 
        \cdot d\tau \\
    &= {\overrightarrow{e}}_{1 \times 3} 
        \cdot \left\lbrack 
            \begin{array}{r}
                da_{1} \\
                da_{2} \\
                da_{3}
            \end{array} 
        \right\rbrack_{3 \times 1} 
        = {\overrightarrow{e}}_{1 \times 3} 
        \cdot \left\lbrack 
            \begin{array}{r}
                dx \\
                dy \\
                dz
            \end{array} 
        \right\rbrack_{3 \times 1} \\
    &= \overrightarrow{e} \cdot da
\end{align*}
$$

#### aligned

$$
\begin{aligned}
    d\overrightarrow{a} 
        &= \overrightarrow{v} 
        \cdot d\tau \\
    &= {\overrightarrow{e}}_{1 \times 3} 
        \cdot \left\lbrack 
            \begin{array}{r}
                da_{1} \\
                da_{2} \\
                da_{3}
            \end{array} 
        \right\rbrack_{3 \times 1} 
        = {\overrightarrow{e}}_{1 \times 3} 
        \cdot \left\lbrack 
            \begin{array}{r}
                dx \\
                dy \\
                dz
            \end{array} 
        \right\rbrack_{3 \times 1} \\
    &= \overrightarrow{e} \cdot da
\end{aligned}
$$

#### equation和aligned

$$
\begin{equation}
\begin{aligned}
    d\overrightarrow{a} 
        &= \overrightarrow{v} 
        \cdot d\tau \\
    &= {\overrightarrow{e}}_{1 \times 3} 
        \cdot \left\lbrack 
            \begin{array}{r}
                da_{1} \\
                da_{2} \\
                da_{3}
            \end{array} 
        \right\rbrack_{3 \times 1} 
        = {\overrightarrow{e}}_{1 \times 3} 
        \cdot \left\lbrack 
            \begin{array}{r}
                dx \\
                dy \\
                dz
            \end{array} 
        \right\rbrack_{3 \times 1} \\
    &= \overrightarrow{e} \cdot da
\end{aligned}
\end{equation}
$$

#### arry

$$
\begin{array}{r}
    d\overrightarrow{a} 
        &= \overrightarrow{v} 
        \cdot d\tau \\
    &= {\overrightarrow{e}}_{1 \times 3} 
        \cdot \left\lbrack 
            \begin{array}{r}
                da_{1} \\
                da_{2} \\
                da_{3}
            \end{array} 
        \right\rbrack_{3 \times 1} 
        = {\overrightarrow{e}}_{1 \times 3} 
        \cdot \left\lbrack 
            \begin{array}{r}
                dx \\
                dy \\
                dz
            \end{array} 
        \right\rbrack_{3 \times 1} \\
    &= \overrightarrow{e} \cdot da
\end{array}
$$