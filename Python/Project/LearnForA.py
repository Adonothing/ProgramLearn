#!/usr/bin/python3
# 定义常量
a = 1
b = 2
t_0 = 0
t_end = 100

# 定义变量
t = 0
x_t = 0

for t in range(t_0, t_end, 1):
    x_t = a * x_t + b

# 复位
t = 0