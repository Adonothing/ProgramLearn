# SingleSrc

## 说明

&emsp;&emsp;单源文件可运行。

## 文件夹

1. [.vscode](./.vscode/)：VSC生成。调试C/C++文件时生成。C/C++的调试配置文件夹。
2. [cmake](./cmake/)：由cmake构建的项目。
3. [build](./build/)：VSC生成。cmake。
4. [doxygen](./doxygen/)：doxygen文件。注释文档。
5. [termianl](./termianl/)：由命令端口编译生成，如shell、bash。
6. [VS](./VS/)：VS项目文件夹。
7. [VSCode](./VSCode/)：由命令端口编译生成，如shell、bash。
8. [CMakeLists.txt](./CMakeLists.txt)：cmake设计文件。
9. [main.c](./main.c/)：源代码。
10. []()：。

## 运行方法

### cmake

&emsp;&emsp;准备好CMakeLists.txt文件，利用CMakeLists.txt文件构建项目。由于安装了VS2022，cmake的时候默认调用了其MSCV编译器。在文件[VS2022](./cmake/VS2022/)路径下，输入以下命令。

```bash
cmake ./../../ #提取上两层后的文件进行构造。构造在当前文件夹内。
```

构造好后，不会产生可执行文件。但是会产生一个VS2022的解决方案和三个项目。从文件[CMakeCache.txt](./cmake/VS2022/CMakeCache.txt)中第18行写着：
> CMAKE_AR:FILEPATH=E:/01_Adunas/Microsoft/VisualStudio/2022/Community/VC/Tools/MSVC/14.37.32822/bin/Hostx64/x64/lib.exe
充分说明cmake默认的编译器。打开VS2022软件，有一个项目包含了主函数源文件，更改默认启动项目为该项目后，可以正常运行和编译。

&emsp;&emsp;如果我想使用其他的编译器呢？比如gcc和g++。

&emsp;&emsp;MSVC属于一类编译器。WinGW属于另外一类编译器，其中还包含：Ninja、gcc、gdb、gdb，这都是WinGW的工具。cmake可以利用不同的编译器下的生成器生成代码。下面将分别来说说不同的编译器。在终端里可以输入命令查看选择不同生成器的帮助：

```bash
cmake -G -h
# 或者直接输入以下内容，有错误提示
cmake -G
```

&emsp;&emsp;cmake构建后会产生以下基础文件：

1. CMakeFiles/
2. cmake_install.cmake
3. CMakeCache.txt

不同的生成器还会产生对应环境下的文件。

#### linux

&emsp;&emsp;在文件夹[linux](./cmake/linux/)下打开端口输入以下命令。这样所以cmake构造的文件夹都会放在这里，便于管理。

&emsp;&emsp;在linux系统内默认的就可以用make，这个还没有尝试。也可在指定生成器：

```bash
# step1: cmake
cmake ./../../ -G "Unix Makefiles"
```

cmake构建后除了会产生基础文件还会生成Makefile文件，然后构建命令：

```bash
# step2: make
make
```
make后会生成可执行文件.exe。输入下面命令可以直接运行：

```bash
# step3: 运行
xx.exe #xx为可执行文件名称。
```

#### WinGW

&emsp;&emsp;在文件夹[ninja](./cmake/ninja/)下打开端口输入以下命令。这样所以cmake构造的文件夹都会放在这里，便于管理。

```bash
# step1: cmake
cmake ./../../ -G "Ninja"
```

cmake构建后除了会产生基础文件还会生成build.ninja文件，然后构建命令：

```bash
# step2: ninja
ninja
```
ninja后会生成可执行文件.exe。输入下面命令可以直接运行：

```bash
# step3: 运行
xx.exe #xx为可执行文件名称。
```

#### MSCV

&emsp;&emsp;例如，在文件夹[VS2022](./cmake/VS2022/)下打开端口输入以下命令。这样所以cmake构造的文件夹都会放在这里，便于管理。

```bash
# Vsiual Studio 有不同版本，选择一个你安装或需要的版本
cmake ./../../ -G "Visual Studio 17 2022"
cmake ./../../ -G "Visual Studio 16 2019"
cmake ./../../ -G "Visual Studio 15 2017"
cmake ./../../ -G "Visual Studio 14 2015"
cmake ./../../ -G "Visual Studio 12 2013"
```

cmake构建后除了会产生基础文件还会生成一个解决方案和三个项目，然后在对应版本的VS软件打开解决方案，选择含主函数的项目可以征程编译运行。

#### cmake-gui

&emsp;&emsp;以上方法都是在控制端口使用cmake命令中生成的。当然还可以直接用cmke图形化窗口cmake-gui软件设置，去构建项目。操作简单，还没操作过，以后有空试试。

### termianl

&emsp;&emsp;采用g++编译器。

```bash
# step1 生成可执行程序
gcc *.c -o .\termianl\termianl #当且仅当文件夹termianl（第一个）存在时，该命令才能指定路径成功。
# step2 运行可执行程序
.\termianl\termianl.exe
```

### VS

&emsp;&emsp;打开解决方案直接运行。

### VSCode

#### 调试C/C++文件

&emsp;&emsp;`.vscode`生成的位置为打开项目的位置。[.vscode](./.vscode/)是在[SingleSrc](./)文件夹中生成的。选中源文件，点击右上角`调试C/C++文件`，生成[.vscode](./.vscode/)文件夹和`tasks.json`文件。选中源文件→左边工具栏→运行和调试→创建launch.json→上方栏C++(GDB\LLDB)→launch.json文件的右下角“添加配置”→C++: (GDB),此时会创建launch.json文件，并添加了一个调试和运行选项（选择不同的编译器）。