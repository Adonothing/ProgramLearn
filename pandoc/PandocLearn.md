---
autoEqnLabels: true #公式自动编号
tableEqns: true #使用表格形式对公式进行排版，转word效果更好
eqnBlockTemplate: |
   `<w:pPr><w:tabs><w:tab w:val="center" w:leader="none" w:pos="4325" /><w:tab w:val="right" w:leader="none" w:pos="8681" /></w:tabs></w:pPr><w:r><w:tab /></w:r>`{=openxml} $$t$$ `<w:r><w:tab /></w:r>`{=openxml} $$i$$
#1英寸相当于2.54厘米 1440 twips = one inch A4纸宽度21cm 信纸21.59
#居中pos的计算方式：(页面宽度/2-左边距)*1440/2.54 
#右边pos的计算方式：页面宽度-左边距-右边距
eqnBlockInlineMath: true
equationNumberTeX: \\tag
eqnIndexTemplate: ($$i$$) #这个是给编号加上括号
eqnPrefixTemplate: 式($$i$$) #给引用的公式编号加上括号
#我的word里是A4的，页边距为3.17cm，但是计算得到的数据是偏的
#所以结合手都调整，有两种参数：
#word自带公式的：4322     8637
#mathtype公式的：4325     8681
---

# pandoc

## 说明

&emsp;&emsp;*Pandoc*是由John MacFarlane开发的标记语言转换工具，可实现不同标记语言间的格式转换。

&emsp;&emsp;&emsp;&emsp;[官网](https://www.pandoc.org/)

&emsp;&emsp;&emsp;&emsp;[用户手册](https://www.pandoc.org/MANUAL.html)

&emsp;&emsp;&emsp;&emsp;[用户手册具体节的方法](https://www.pandoc.org/MANUAL.html#atx-style-headings)

&emsp;&emsp;&emsp;&emsp;[下载网址](https://github.com/jgm/pandoc/releases)

安装位置：无法更改；

添加环境变量：[C:\Program Files\Pandoc](file://C:/Program Files/Pandoc)，不用手动添加，安装时已自动添加。

&emsp;&emsp;我是从这篇[文章](http://t.csdn.cn/JOJcK)开始pandoc的旅程的，谢谢。

## pandoc md转word

### 基础转换

&emsp;&emsp;除了安装*pandoc*以外，还要安装*pandoc-crossref*，在windows下把pandoc-crossref.exe放在和要转化的.md一个文件夹下即可，或者加入到环境变量，要不然后面无法调用pandoc-crossref功能。

&emsp;&emsp;我采取的方法是把*pandoc-crossref.exe*放在pandoc的安装目录下。

#### pandoc-crossref

&emsp;&emsp;pandoc-crossref 是一个 pandoc 过滤器，用于对图形、方程、表格及其交叉引用进行编号。

&emsp;&emsp;&emsp;&emsp;[用户手册](http://lierdakil.github.io/pandoc-crossref/)

&emsp;&emsp;&emsp;&emsp;[源码及安装包](https://github.com/lierdakil/pandoc-crossref)

##### 第一步制作模板

```bash
pandoc -o custom-reference.docx --print-default-data-file reference.docx
```
custom-reference.docx就是我们的样式模板，只更改自己想要的样式，名称不变。把它和要转化的md文件放在一起。

##### 将md转化为docx

```bash
pandoc -s Readme.md --reference-doc custom-reference.docx -o Readme.docx
#或者
pandoc -s --reference-doc custom-reference.docx Readme.md -o Readme.docx
#或者在typora-偏好设置-导出-word-添加样式文件
```
我们一般选用第二种命令格式，方便后面添加其他参数命令。这样公式是不会有编号的，想要编号，需要加入pandoc-crossref编号索引功能

### 手动确定word样式

&emsp;&emsp;在:::块之间是设定的样式：

::: {custom-style="Figure"}

:::

参考于[用户手册的输入](https://www.pandoc.org/MANUAL.html#input)和[用户手册的word](https://www.pandoc.org/MANUAL.html#options-affecting-specific-writers)。

### 公式编号转换

```bash
# 只有加入标签的才能编号 {#eq:eq3}
pandoc -F pandoc-crossref --reference-doc custom-reference.docx Readme.md -o Readme.docx
# 加入章编号
pandoc -F pandoc-crossref -M chapters --reference-doc custom-reference.docx Readme.md -o Readme.docx
# 加入节编号，目前还不会
```

我是从这篇[文章](使用Markdown搭配Pandoc撰写学术论文的详细指南 - colordi的文章 - 知乎
https://zhuanlan.zhihu.com/p/395193554)知道加入章的，谢谢。

&emsp;&emsp;我不想每次都手动输入编号，而且编号还不在最右边，方法就是在md文件前添加yaml标签：

```yaml
---
autoEqnLabels: true #公式自动编号
tableEqns: true #使用表格形式对公式进行排版，转word效果更好
eqnBlockTemplate: |
   `<w:pPr><w:tabs><w:tab w:val="center" w:leader="none" w:pos="4325" /><w:tab w:val="right" w:leader="none" w:pos="8681" /></w:tabs></w:pPr><w:r><w:tab /></w:r>`{=openxml} $$t$$ `<w:r><w:tab /></w:r>`{=openxml} $$i$$
#1英寸相当于2.54厘米 1440 twips = one inch A4纸宽度21cm 信纸21.59
#居中pos的计算方式：(页面宽度/2-左边距)*1440/2.54 
#右边pos的计算方式：页面宽度-左边距-右边距
eqnBlockInlineMath: true
equationNumberTeX: \\tag
eqnIndexTemplate: ($$i$$) #这个是给编号加上括号
eqnPrefixTemplate: 式($$i$$) #给引用的公式编号加上括号
#我的word里是A4的，页边距为3.17cm，但是计算得到的数据是偏的
#所以结合手都调整，有两种参数：
#word自带公式的：4322     8637
#mathtype公式的：4325     8681
#转word是用自带公式，有时我想要mathtype，在word插件mathtype转换就行了
---
```

我是从这篇[文章](http://t.csdn.cn/mpGm7)知道方程靠右编号，谢谢。

### 章节编号转换

&emsp;&emsp;其实我是用不到的，因为编号是在word里添加多级列表到样式里的，这里记录一下方法：

```bash
pandoc -F pandoc-crossref -M chapters --number-sections --reference-doc custom-reference.docx Readme.md -o Readme.docx
# -- 和 -- 之间不用添加\
```

我是从这篇[文章](https://sspai.com/post/64842)知道转文档时标题编号的，谢谢。

#### 方程编号测试

&emsp;&emsp;这个是用来测试公式的，吧啦啦啦啦[@eq:eq3]

$$
\begin{equation}
x+y=1
\end{equation}
$$

这个是用来测试公式的

$$
x+y=z
$$ {#eq:eq3}

这个是用来测试公式的

$$
x+y=z
$$ {#eq:eq2}

# 新章

&emsp;&emsp;新章用来测试，公式是否关联章编号 ，这里的\label{eq2}和{#eq:eq3}不同，{#eq:eq3}属于pandoc识别的，而\label{eq2}属于公式的。

测试不同公式格式

$$
\mathcal L U = F \tag{1.1}  \label{eq2}
$$

测试不同公式格式

$$
\begin{equation}
\begin{aligned}
e^{i\pi}+1=0 \label{eq:euler}           %这里定义方程标号 
\end{aligned}
\end{equation}
$$

不同公式格式不会在word中产生影响。

### 样式特注

&emsp;&emsp;模板样式有的不会生成的，所以直接无法控制样式，比如说代码样式；但是可以在word里把样式拷贝到模板里以后，再更改，测试成功。

这里准备了一些参考：

&emsp;&emsp;[Markdown pandoc-crossref自定义图表前缀（解决figureTitle和tableTitle被XeLaTex忽略的问题 ）](http://t.csdn.cn/Yb33N)。

&emsp;&emsp;[使用Markdown搭配Pandoc撰写学术论文的详细指南](https://zhuanlan.zhihu.com/p/395193554)，这是网页[备份文件](html/使用Markdown搭配Pandoc撰写学术论文的详细指南.htm)。

&emsp;&emsp;[设置 word 模板，Markdown 也能自动转换为美观规范的 Word 文档](https://zhuanlan.zhihu.com/p/581000852)，这是网页[备份文件](html/设置 word 模板，Markdown 也能自动转换为美观规范的 Word 文档.htm)。

&emsp;&emsp;[Markdown 写作，Pandoc 转换：我的纯文本学术写作流程](https://sspai.com/post/64842)，这是网页[备份文件](html/Markdown 写作，Pandoc 转换：我的纯文本学术写作流程.htm)。

### 图片样式
&emsp;&emsp;图片会被识别为正文文本或者首段样式，和文字一样。解决方法就是在word里查找替换，选择特殊格式-图形，然后替换成样式即可。最新，这个不用在word里改了，因为这个加入图像标签以后就会匹配图像样式了。

&emsp;&emsp;对于流程图flow如何渲染为图像呢？

&emsp;&emsp;meirmaid过滤器，对meirmaid代码作的图片可以过滤为图像。[源码](https://github.com/raghur/mermaid-filter)，安装方法为npm。安装好以后用这个代码：

```bash
pandoc -F mermaid-filter.cmd -F pandoc-crossref -M chapters --reference-doc custom-reference.docx MdLearn.md -o MdLearn.docx
```
但是导出到word里的图像很模糊，所以不用这个方法。将代码图片保存为图片后再从markdown里引用

&emsp;&emsp;[low的源代码地址](https://github.com/adrai/flowchart.js.git)在Windows上安装失败，并且没有提供Windows的使用说明。meirmaid和flowchar源码都保存在pandoc软件目录下

#### 图片标签

&emsp;&emsp;图片标签是在图片后面加入{#fig:图1}，引用为[#fig:图1]，和公式的标签类似。

```bash
pandoc --filter pandoc-fignos wenxianzongshu.md -o p3.docx

pandoc --filter pandoc-fignos -F pandoc-crossref -M chapters --reference-doc custom-reference.docx MdLearn.md -o MdLearn.docx
```
这个功能完全在[pandoc-crossref](#pandoc-crossref)里提供，不用再去下载[pandoc-fignos源码](https://github.com/dazeGitHub/pandoc-fignos.git)了。

&emsp;&emsp;输入-M linkReferences=true，引用就具有超链接的功能里，目前图片有bug，bug在于图片的标签加不进去。

##### rsvg-convert警告

> [WARNING] Could not convert image 837b9e973ddfecdb93dde935b5d46d21b024ad1a.svg: "check that rsvg-convert is in path.\nrsvg-convert: createProcess: does not exist (No such file or directory)"

可以无视。图片依旧放进word了。

#### 标签中文

&emsp;&emsp;默认是英文的，更改成中文的办法见md题头的yaml。

&emsp;&emsp;bash中pandoc命令的 -M 参数全部可以写入到yaml中，从=号变成: 。

&emsp;&emsp;bash命令很长，想要分行写，中间可以加入符号/ 。

#### 标签超链接

&emsp;&emsp;公式、图片和表格默认没有超链接，我也不用添加了，原因可能是是因为没有必要吧，毕竟编号都已经打上了。但是文献有超链接的。

&emsp;&emsp;图片超链接有bug，在源码的问题中有提及：[Docx: Figure reference link not working #147](https://github.com/lierdakil/pandoc-crossref/issues/147)和[DOCX 中的错误：无法正确创建指向图形的超链接 第374章](https://github.com/lierdakil/pandoc-crossref/issues/374)，所以添加的文件名为：fix-image-links.lua，内容为：

```c
local function starts_with(str, start)
   return str:sub(1, #start) == start
end
function Figure(el)
  return pandoc.Div(el, pandoc.Attr(el.identifier))
end
```

命令更新为：

```bash
pandoc --reference-doc -MlinkReferences --lua-filter=fix-image-links.lua --toc custom-reference.docx -s MdLearn.md -o MdLearn.docx
# note that --lua-filter must come after -F pandoc-crossref!
```

### 表格样式
&emsp;&emsp;表格样式是个怎么个事儿，还不太明白，开整。样式名称必须为Table，这个名称隐藏了，在样式-管理样式里调用，必须在这里改，我的方法是先在表设计里添加一个自定义的三段式表，然后再修改Table基于三段式，这样Table只用选Table样式即可。

&emsp;&emsp;注意选中表格时，显示样式是和实际样式不匹配的，它的实际样式为表格样式。他的所有属性都是在表格样式里修改的。

&emsp;&emsp;可惜有个bug，再转成table时，表示没用居中，而是靠左。解决方法是在word里手动修改，参考[【【工作指导】如何同时选中文档中所有表格的教程！】](https://www.bilibili.com/video/BV1Yt411p7FL/?share_source=copy_web&vd_source=6b55cb6788b1952e04c06b095d772810)选中所有表格，这是核心的vbs代码。

```vbscript
Sub 批量修改表格()
Dim tempTable As Table
Application.ScreenUpdating = False
If ActiveDocument.ProtectionType = wdAllowOnlyFormFields Then
MsgBox "编辑权限不足，无法选中"
Exit Sub
End If
ActiveDocument.DeleteAllEditableRanges wdEditorEveryone
For Each tempTable In ActiveDocument.Tables
tempTable.Range.Editors.Add wdEditorEveryone
Next
ActiveDocument.SelectAllEditableRanges wdEditorEveryone
ActiveDocument.DeleteAllEditableRanges wdEditorEveryone
Application.ScreenUpdating = True
End Sub
```

修改章节标题和项目标题之间的符号：

```bash
pandoc -F pandoc-crossref -MlinkReferences --lua-filter=fix-image-links.lua -M chapDelim='-' --toc --reference-doc custom-reference.docx -s MdLearn.md -o MdLearn.docx
```

参数-M chapDelim: -不能直接写在yaml中，需要写在字块儿中，目前还不会，但是可以放在命令里，也无妨。

### 生成目录

&emsp;&emsp;开始简单的指令能生成目录，加了过滤器反而不行了？

```bash
#生成目录
pandoc --toc --reference-doc custom-reference.docx -s MdLearn.md -o MdLearn.docx

# 例子，没参考文献的版本

pandoc -F pandoc-crossref -MlinkReferences --lua-filter=fix-image-links.lua --toc --reference-doc custom-reference.docx -s MdLearn.md -o MdLearn.docx


pandoc -F pandoc-crossref -MlinkReferences --lua-filter=fix-image-links.lua --toc --reference-doc custom-reference.docx -s README.md -o README.docx
```

发现目录标题和标题一样会编号，原来目录标题以标题一为基础样式了，所以也会带有章编号，只要改基础样式就行了。

### 参考文献

&emsp;&emsp;首先是下载文献管理工具zotero，生成文献库.bib，参考我的[文章](file:\\D:\BaiduSyncdisk\01_Adunas\03_软件安装\01_办公\11_文献管理\01_zotero\03_说明文档\Readme.md)。建议在vscode里写文献引用相关的，因为插件[Pandoc Citer](https://marketplace.visualstudio.com/items?itemName=notZaki.pandocciter)很好用，根据使用说明，知道在yaml里再添加一句：

```yaml
bibliography: [path/to/.bib]
```
即可，在正文中调用@会提示相关的参考文献。同时准备一个参考文献格式.csl，参考我的[文章](file:\\D:\BaiduSyncdisk\01_Adunas\03_软件安装\01_办公\11_文献管理\01_zotero\03_说明文档\Readme.md)。然后输入以下命令转word，注意编号过滤器pandoc-crossref先进行过滤，才能保证参考文献引用不会被吞。

```bash
pandoc -F pandoc-crossref --toc --citeproc --csl=china-national-standard-gb-t-7714-2015-author-date.csl --reference-doc custom-reference.docx -s MdLearn.md -o MdLearn.docx

pandoc -F pandoc-crossref --toc --reference-doc custom-reference.docx -s 1.md -o 1.docx
```

### yaml参数汇表

&emsp;&emsp;一定要注意，---和后面的代码文字不要空行，最后的---也不要和前面的代码文字空行。

```yaml
---
#文章封面
title: "This is the title: it contains a colon"
titleDelim: s
abstract: |
  This is the abstract.

  It consists of two paragraphs.
author:
- Author One
- Author Two
keywords:
- nothing
- nothingness

#添加章编号
chapters: true
linkReferences: true
nameInLink: true

#图编号
figureTitle: 图  #图标题名称
figPrefix: 图  #交叉引用名称
#titleDelim: s  #默认为冒号：:
figureTemplate: $$figureTitle$$$$i$$ $$t$$  #去除titleDelim
#figLabels: arabic #默认为阿拉伯数字
figPrefixTemplate: $$p$$$$i$$ #去除引用名字,default $$p$$&nbsp;$$i$$

#表编号
tableTitle: 表
tblPrefix: 表
tableTemplate: $$tableTitle$$$$i$$ $$t$$
tblPrefixTemplate: $$p$$$$i$$ #去除引用名字

#方程编号
autoEqnLabels: true #公式自动编号
tableEqns: true #使用表格形式对公式进行排版，转word效果更好
eqnBlockTemplate: |
   `<w:pPr><w:tabs><w:tab w:val="center" w:leader="none" w:pos="4325" /><w:tab w:val="right" w:leader="none" w:pos="8681" /></w:tabs></w:pPr><w:r><w:tab /></w:r>`{=openxml} $$t$$ `<w:r><w:tab /></w:r>`{=openxml} $$i$$
#1英寸相当于2.54厘米 1440 twips = one inch A4纸宽度21cm 信纸21.59
#居中pos的计算方式：(页面宽度/2-左边距)*1440/2.54 
#右边pos的计算方式：页面宽度-左边距-右边距
eqnBlockInlineMath: true
equationNumberTeX: \\tag
eqnIndexTemplate: ($$i$$) #这个是给编号加上括号
eqnPrefixTemplate: 式&nbsp;($$i$$) #给引用的公式编号加上括号
#我的word里是A4的，页边距为3.17cm，但是计算得到的数据是偏的
#所以结合手都调整，有两种参数：
#word自带公式的：4322     8637
#mathtype公式的：4325     8681

#参考文献
bibliography: [time.bib]
link-citations: true
reference-section-title: "参考文献"
---
```

 # 总结文案
&emsp;&emsp;用文本进行学术写作的方法。我们准备好我们的写好的markdown文本，这个文档和txt其实是一样的，你可以直接在记事本里编辑，所以这个文件非常小，不会卡顿。我们可以选择更好的编辑器，在Typora或者vscode中编辑和预览，高亮非常舒服，之所以能够呈现这样的效果是因为所有外部的附件都是通过链接的形式指向，然后编辑器渲染得到的，所以跳转控制都很方便。然后准备一个word模板，模板的样式可以随意更改，比如这个三段式的表格。然后再利用文献管理工具zotero，选择你要用的文献，生成文献库.bib。然后再准备一个参考文献规范，比如毕业论文常用的国标7714-2015。然后启用命令，直接生成。我们来看看效果吧。格式、排版、引用和超链接，几乎完美。
