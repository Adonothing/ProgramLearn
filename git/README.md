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