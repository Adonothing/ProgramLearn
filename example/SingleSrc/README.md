# SingleSrc

## 说明

&emsp;&emsp;单源文件可运行。

## 文件夹

1. [.vscode](./.vscode/)：VSC生成。调试C/C++文件时生成。C/C++的调试配置文件夹。
2. [build](./build/)：VSC生成。cmake。
3. [Project](./Project/)：VS项目文件夹。
4. [termianl](./termianl/)：由命令端口编译生成，如shell、bash。
5. [VSCode](./VSCode/)：由命令端口编译生成，如shell、bash。
6. [CMakeLists.txt](./CMakeLists.txt)：cmake设计文件。
7. [main.c](./main.c/)：源代码。

## 运行方法

### VSCode

#### 调试C/C++文件

&emsp;&emsp;`.vscode`生成的位置为打开项目的位置。[.vscode](./.vscode/)是在[SingleSrc](./)文件夹中生成的。选中源文件，点击右上角`调试C/C++文件`，生成[.vscode](./.vscode/)文件夹和`tasks.json`文件。选中源文件→左边工具栏→运行和调试→创建launch.json→上方栏C++(GDB\LLDB)→launch.json文件的右下角“添加配置”→C++: (GDB),此时会创建launch.json文件，并添加了一个调试和运行选项（选择不同的编译器）。

### VS

&emsp;&emsp;打开解决方案直接运行。

### termianl

&emsp;&emsp;采用g++编译器。

```bash
# step1 生成可执行程序
gcc *.c -o .\termianl\termianl #当且仅当文件夹termianl（第一个）存在时，该命令才能指定路径成功。
# step2 运行可执行程序
.\termianl\termianl.exe
```

### cmake

&emsp;&emsp;利用CMakeLists.txt文件构建项目。

#### terminal

&emsp;&emsp;在控制端口使用cmake命令。准备好CMakeLists.txt文件后，输入以下命令。

```bash
# step1 从CMakeLists.txt文件生成makefile文件
cmake . #在cCMakeLists.txt文件目录下cmake
```