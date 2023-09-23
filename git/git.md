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

## 克隆仓库

```bash
# 初始化
git init
# 查看状态
git status
# 克隆代码到当前目录下
git clone GitHub网址
# 有些git仓库内嵌其他git仓库，普通克隆无法下载
# 克隆当前仓库以及所有子仓库
git clone --recursive Github网址
# 就算没有下载子仓库也有其他方法：
# 更新子模块下载地址
git submodule sync
# 更新子模块或下载子模块
git submodule update --init --recursive
# 从网上更新代码到本地
git pull
```

克隆很容易失败，出现问题，应该先设置代理，就不会有问题。特别是子模块的克隆，出现其他问题就全部删除，配置好网络后重新克隆。

## 提交仓库

&emsp;&emsp;提交仓库的方法如下：

```bash
git add . #添加修改的内容
git commit -m ‘添加子模块’ #对修改的内容备注
git push #提交修改的内容
```

注意这里不能省略commit，提交后应该在网页上看看提交结果。

## 添加子仓库

&emsp;&emsp;如何使用其他子仓库呢？

&emsp;&emsp;参考[git 添加子模块(submodule)](http://t.csdn.cn/7xSBA)。

```bash
# step1：添加子仓库。从源到本地路径。
git submodule add https://github.com/Akagi201/learning-cmake.git ./docs/learning-cmake #这时候文件夹下会产生一个文件.gitmodules用于记录子仓库的源地址和本地路径。要不然就认为添加子仓库失败。
# git submodule add https://github.com/microsoft/vscode-docs.git ./VSC/extern/vscode-docs #添加VSCode官方文档
# step2：推送到父仓库。
git add . #添加修改的内容
git commit -m ‘添加子模块’ #对修改的内容备注
git push #提交修改的内容
```

这样就成功了，在网页上就会找到子仓库的链接，能直接进入子仓库的源地址。但是有时会产生bug，在第一步子仓库全部克隆下来时，命令端口不会自动退出，不会产生`.gitmodules`文件，这时需要我们手动添加：

```
[submodule "docs/learning-cmake"]
	path = docs/learning-cmake
	url = https://github.com/Akagi201/learning-cmake.git
```

再继续走第二步就可以了。在.git/modules/路径下会产生同样名称的文件夹，都删除，应该就可以了吧？是的，就是这样，修改和删除的时候，更改这三个地方即可。

当你输入git add . 后又手动删除了子模块的文件，再次克隆子模块git submodule add url_to_repo projectfolder会报错：

```bash
'projectfolder' already exists in the index"
```

这是由于本地git里的index文件已经记录更改，所以办法时删除掉：

```bash
# 显示索引
git ls-files --stage projectfolder #你将看到类似于：160000 d00cf29f23627fc54eb992dde6a79112677cd86c 0   projectfolder
# 删除掉即可
git rm --cached projectfolder
```

好了，现在可以重新添加子模块了。

## 图片

&emsp;&emsp;一般的克隆是不会下载图片的。需要递归克隆：

```bash
# 更新子模块或下载子模块
git submodule update --init --recursive
```

## issues问题

&emsp;&emsp;issues是代码讨论问题的地方，非常重要，有任何bug都可以在这里询问或者找到答案。

## 大文件问题

&emsp;&emsp;无法存储大文件，报错内容如下：

```bash
remote: error: Trace: b2adcbab0bce9ebf02ba45cb38ed13ae62fe226a26341ec1e7cb4db00774fb3a
remote: error: See https://gh.io/lfs for more information.
remote: error: File C/docs/C++ 标准库参考 (STL).pdf is 109.78 MB; this exceeds GitHub's file size limit of 100.00 MB
remote: error: GH001: Large files detected. You may want to try Git Large File Storage - https://git-lfs.github.com.
To https://github.com/Adonothing/ProgramLearn.git
 ! [remote rejected] main -> main (pre-receive hook declined)
```

所以建议不要使用大文件。

&emsp;&emsp;可是我们在这里直接在文件系统中删除这个大的文件，然后再次提交，会发现这个问题并未得到解决。我把尝试的解决方法删除了，因为并没有成功，还带来了一堆问题，结果是我重新找地方克隆项目到本地，然后再重新向其中添加文件，再上传。
