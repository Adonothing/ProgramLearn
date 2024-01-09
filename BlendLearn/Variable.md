# 基础知识

&emsp;&emsp;变量的类型有：

1. 整数类型：int
2. 浮点类型：double、float
3. 字符类型：char
4. 布尔类型：bool
5. 字符串类型：string
6. 数组类型：arry
7. 对象类型：object

# C

## 查询变量信息

```C
unsigned int * SignedIntPintC;
```

## 整型

```C
signed int SignedIntC;
signed short int SignedShortIntC;
signed short SignedShortC;
signed long int SignedLongIntC;
signed long SignedLongC;
signed long long int SignedLongLongIntC;
signed long long SignedLongLongC;

int IntC;
short int ShortIntC;
short ShortC;
long int LongIntC;
long LongC;
long long int LongLongIntC;
long long LongLongC;

unsigned int UnsignedIntC;
unsigned short int UnsignedShortIntC;
unsigned short UnsignedShortC;
unsigned long int UnsignedLongIntC;
unsigned long UnsignedLongC;
unsigned long long int UnsignedLongLongIntC;
unsigned long long UnsignedLongLongC;
```

其中，Unsigned 可以省略，默认就是无符号的。而对于长短整型，int 就可以省略。后面就不进行缩写了，写全拼，因为虽然简化了，但是可读性变差了。总结下来就是以下内容：

```C
signed int SignedIntC;
signed short int SignedShortIntC;
signed long int SignedLongIntC;
signed long long int SignedLongLongIntC;

unsigned int UnsignedIntC;
unsigned short int UnsignedShortIntC;
unsigned long int UnsignedLongIntC;
unsigned long long int UnsignedLongLongIntC;
```

四个有符号的，四个无符号的。核心是四个。