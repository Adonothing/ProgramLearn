# Python

&emsp;&emsp;Python是一种常用的编程语言。

## 语法

### 字符串拼接

&emsp;&emsp;在 Python 中字符串`str`拼接不是用`&`符号，而是用`+`号：

```python
img_model_path = './picture'
img_model_name = 'BaiduFanyi.jpg'
img_screenshot = cv2.imread(img_model_path + "/" + "screenshot.jpg")
img_model = cv2.imread(img_model_path + "/" + img_model_name)
```

### 多行注释

```python
"""
三对双引号中间可以多行注释；
这是第二行；
这是第三行；
"""
```

### 函数功能注释

&emsp;&emsp;在pycharm编译器中，在函数下键入三次`"`会产生三对双引号，再键入回车符，会自动生成函数注释：

```python
def get_xy(img_model_path):
    """

    :param img_model_path:
    :return:
    """
```

我们可以添加相关说明，完善注释：

```python
def get_xy(img_model_path):
    """
    这个函数的功能是xxx
    :param img_model_path:输入参数的含义是xxx
    :return:返回值为xxx
    """
```

好了。