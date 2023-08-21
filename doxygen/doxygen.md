# doxygen

&emsp;&emsp;doxygen是非常重要的代码阅读工具。按照一定的规范书写注释，能够快速帮助我们阅读代码。

## 语法

&emsp;&emsp;参考这个[【AXin带你学Doxygen 生成文档超简单！】]( https://www.bilibili.com/video/BV1ZE411F7kW/?p=4&share_source=copy_web&vd_source=6b55cb6788b1952e04c06b095d772810)视频学习基本语法。

### 具体语法

#### 在实体之前注释

```cpp
/// 简明的描述
///
/// 详细的描述
```

规范的，我们使用参数标记：

```cpp
/// @brief 简明的描
/// @return 详细的描述
```

#### 在实体之后注释

```cpp
///< 变量1注释
///< 变量2注释
```

#### 函数注释

```cpp
/// 函数注释
/// @see 函数名 //当函数名和其他函数名一致时，生成的doxygen网页能够跳转
```
doxygen网页对应 See also。

```cpp
/// 函数注释
/// @return 变量名 //当变量名和其他变量名一致时，生成的doxygen网页能够跳转
```
doxygen网页对应 Returns。

```cpp
/// 函数注释
/// @param 参数名 //当参数名和其他参数名一致时，生成的doxygen网页能够高亮
```
doxygen网页对应 Parameters。

```cpp
/// 函数注释
/// @note 注释 //doxygen网页对应 Note。
/// @attention  注意 //doxygen网页对应 Attention。
/// @warning 警告 //doxygen网页对应 Warning。
```

### 源文件和头文件

&emsp;&emsp;在头文件注释还是在源文件中注释呢？为了方便用和修改，应该这样做：

将简要的说明和必要的参数放在头文件。

```cpp
/// 函数注释
/// @see 函数名 
/// @param 参数名 
```

将详细的说明放在源文件。

```cpp
/// @note 注释 
/// @attention  注意 
/// @warning 警告 
```

当头文件和源文件中都用注释时，可以在源文件使用`@details`进行注释，这样就不会乱和冲突：
```cpp
/// @details 详细注释。 
```

## 生成方法

&emsp;&emsp;用图形化界面生成，cmake方法还不会。

### 图形化界面

#### 样式设置

