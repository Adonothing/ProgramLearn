# Sql 语言学习

&emsp;&emsp;本文记录 Sql 语言学习。

# 头脑风暴

学习的目的是什么？为了对我的表格进行作图统计。

1. 需求是这样：提取 `分类` 项目，对于状态 `开始` 和 `结束` 做差，获得该分类的花费时间，按照每天来统计，得到一个新的统计表。
2. 然后按照每天分类的新的统计表再做一个扇形图。然后再生成一个周表。

怎样学习 sql 语言才能最快地满足我的需求呢？

解决这个问题就需要分解：

中间变量不需要数组，要输出的一组数据做成数组。

1. 单类统计，做差求和。
   1. 定义 `分类` 变量为 `sort`，数学符号为 $A$，不同类别用符号 $A_i$ 表示，$i$ 的取值范围为：$[1,8]$，$i$ 为整数。
   2. 定义 `状态` 变量为 `state`， 数学符号为 $B$，取值为：$-1$ 或者 $1$，开始对应 $-1$，结束对应 $1$，用符号 $B_i$ 表示，$i$ 的取值范围为：$1$ 或 $2$。这里在代码上要额外要注意的是：
      1. 进行规则检查：一个开始必须要对应一个结束。对于前一天开始的要进行检查，昨天的最后一项是否分类相同且为开始，今天的第一项是否为结束。对于明天的第一项是否为结束且分类相同，今天是否为开始。
      2. 剩下的状态，同样的分类下，要求先开始再结束，一个开始对应一个结束。
   3. 定义每个状态的时间值变量为 `time`，数学符号用 $T$ 表示。所列时间用符号 $T_i$ 表示，$i$ 的取值范围为：$[1,N_T]$，$i$ 为整数。其中 $N_T$ 为统计的时间的个数。
   4. 那么计算公式为：

$$
T_A = T_2 - T_1 + T_4 - T_3 + … 
$$

```c
for (i=0; i++; i<8)
{
  T_A = 0;
  for (j=0; j++; j<N_T)
  {
    T_A = T_A + state*T[j];
  }
  sort[i] = T_A;
}
```