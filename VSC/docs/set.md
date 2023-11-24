# 插件

## CMake Tools 

1. 在 CMake 项目目录打开时自动对其进行配置。
2. CMake 生成文件将转到其中的目录。设置为：${workspaceFolder}/build/VSC

# 字体

&emsp;&emsp;文件-首选项-设置-文本编辑器-字体-Font Size。初始为14，现在是20。

# 标题自动编号

## 参考文档

1. [官方教程](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/customize-css?id=styleless)提及更改的地方。
2. [VS CODE markdown 自动编号](https://www.jianshu.com/p/52e3030cd203)给了更改的源码。

## 具体方法

&emsp;&emsp;要自定义 Markdown 文件的 CSS，请按<kbd>cmd-shift-p</kbd>，然后运行`Markdown Preview Enhanced: Customize CSS (Global)`或`Markdown Preview Enhanced: Customize CSS (Workspace)`命令。

&emsp;&emsp;`style.less` 文件将会被打开，然后你就可以开始编写样式了：

```less

/* Please visit the URL below for more information: */
/*   https://shd101wyy.github.io/markdown-preview-enhanced/#/customize-css */

.markdown-preview.markdown-preview {
  // modify your style here
  // eg: background-color: blue;
}

/**
 * 首先在父元素中（在这里是 body 元素），初始化你想要编号的最大标题的计数。
 */
 body {
  counter-reset: hbody;
}
  
/**
 * 然后父标题初始化子标题的计数，下面以此类推。
 */
h1 {
  counter-reset: h1;
}

h2 {
  counter-reset: h2;
}

h3 {
  counter-reset: h3;
}

h4 {
  counter-reset: h4;
}

h5 {
  counter-reset: h5;
}

  
/**
 * 接着在每个标题前面自动加上编号
 *
 * 如果不想从 h1 开始自动编号，而是把 h1 当成文章题目，从 h2 开始自动编号，那么
 * 1. 把 h1:before 注释
 * 2. 从 h2:before 开始到 h6:before，把编号开头的 counter(hbody) "." 这一部分删除
 */
h1:before {
  counter-increment: hbody;
  content: counter(hbody) ". ";
}
h2:before {
  counter-increment: h1;
  content: counter(hbody) "." counter(h1) ". ";
}

h3:before {
  counter-increment: h2;
  content: counter(hbody) "." counter(h1) "." counter(h2) ". ";
}

h4:before {
  counter-increment: h3;
  content: counter(hbody) "." counter(h1) "." counter(h2) "." counter(h3) ". ";
}

h5:before {
  counter-increment: h4;
  content: counter(hbody) "." counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) ". ";
}

h6:before {
  counter-increment: h5;
  content: counter(hbody) "." counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) ". ";
}

.markdown-preview.markdown-preview {
  // modify your style here
  // eg: background-color: blue;
}
```