# Matlab

# 实时脚本

&emsp;&emsp;切换代码和文本除了系统告诉你的，还可以用Ctrl + E快捷键。入门教程参考：[【功能强大的MATLAB实时脚本】](https://www.bilibili.com/video/BV1z34y1K7hm/?share_source=copy_web&vd_source=6b55cb6788b1952e04c06b095d772810)。

## 控制系统方框图

&emsp;&emsp;。

## 清理

关闭所有窗口：

```matlab
close all;
```

清除工作区所有变量数据变量：

```matlab
clear;
```

清除所有命令：

```matlab
clc;
```

## 矩阵相加

&emsp;&emsp;当行数不同，列数相同的矩阵相加时要非常注意！

正确的相加方法：

```matlab
A = [1, 2, 3];
B = [1, 2, 3; 4, 5, 6];
C = B;
C(1, :) = B(1, :) + A; 
```

错误的相加方法1：

```matlab
A = [1, 2, 3];
B = [1, 2, 3; 4, 5, 6];
C(1, :) = B(1, :) + A; 
```

此时矩阵$C$只有一行了。错误的相加方法2：

```matlab
A = [1, 2, 3];
B = [1, 2, 3; 4, 5, 6];
C = B + A; 
```

此时矩阵$B$的每一行都会加上矩阵$A$给到矩阵$C$。

## 文件夹说明

1. 
2.  []()：。
