# pandoc
## 说明以及安装
&emsp;&emsp;*Pandoc*是由John MacFarlane开发的标记语言转换工具，可实现不同标记语言间的格式转换。

&emsp;&emsp;&emsp;&emsp;[官网](https://www.pandoc.org/)

&emsp;&emsp;&emsp;&emsp;[用户手册](https://www.pandoc.org/MANUAL.html)

&emsp;&emsp;&emsp;&emsp;[用户手册具体节的方法](https://www.pandoc.org/MANUAL.html#atx-style-headings)

&emsp;&emsp;&emsp;&emsp;[下载网址](https://github.com/jgm/pandoc/releases)

安装位置：无法更改；

添加环境变量：[C:\Program Files\Pandoc](file://C:/Program Files/Pandoc)，不用手动添加，安装时已自动添加。

&emsp;&emsp;我是从这篇[文章](http://t.csdn.cn/JOJcK)开始pandoc的旅程的，谢谢。

## pandoc-crossref
&emsp;&emsp;除了安装*pandoc*以外，还要安装*pandoc-crossref*，在windows下把pandoc-crossref.exe放在和要转化的.md一个文件夹下即可，或者加入到环境变量，要不然后面无法调用pandoc-crossref功能。

&emsp;&emsp;我采取的方法是把*pandoc-crossref.exe*放在pandoc的安装目录下。

&emsp;&emsp;pandoc-crossref 是一个 pandoc 过滤器，用于对图形、方程、表格及其交叉引用进行编号。

&emsp;&emsp;&emsp;&emsp;[用户手册](http://lierdakil.github.io/pandoc-crossref/)

&emsp;&emsp;&emsp;&emsp;[源码及安装包](https://github.com/lierdakil/pandoc-crossref)