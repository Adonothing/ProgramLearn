# git

## 构建仓库

&emsp;&emsp;如何构建仓库？

&emsp;&emsp;打开官网，New repository，不要建立README.md文件，会弹出下面的提示。我们是新建一个仓库，所以按照下面的方法进行操作。

```bash
echo "# ProgramLearn" >> README.md #创建README.md文件并写入内容。
git init #初始化git仓库，产生.git文件夹。
git add README.md #添加写好的README.md文件。
git commit -m "first commit" #新仓库，第一次提交代码。
git branch -M main
git remote add origin https://github.com/Adonothing/ProgramLearn.git
git push -u origin main
```

跑完了一遍以后，出现了一些错误，不用管他，打开桌面版`GitHub DeskTop`，添加本地仓以后，可以从这里push。

## 调用其他仓库

&emsp;&emsp;如何使用其他子仓库呢？

&emsp;&emsp;参考[git 添加子模块(submodule)](http://t.csdn.cn/7xSBA)。

```bash
# step1：添加子仓库。从源到本地路径。
git submodule add https://github.com/Akagi201/learning-cmake.git ./docs/learning-cmake #这时候文件夹下会产生一个文件.gitmodules用于记录子仓库的源地址和本地路径。要不然就认为添加子仓库失败。
# step2：推送到父仓库。
git add .
git commit -m ‘添加子模块’
git push
```

这样就成功了，在网页上就会找到子仓库的链接，能直接进入子仓库的源地址。如果你更改了子仓库的名称，比如把`vscode-docs`改为`VSCDocs`，你无法直接推送到父仓库，而是把第二步的三个命令再走一遍。
