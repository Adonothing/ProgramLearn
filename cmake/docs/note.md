# cmake笔记

## 调试方法

&emsp;&emsp;调试的思路很重要。在文件CMakeLists.txt中加入日志显示message，用来查看参数。在构建时，一般会在出错的地方停止运行并报错，以此溯源顺腾摸瓜。

## 常见报错

&emsp;&emsp;背景：用VSC2017正常，用命令端口时错误。源码内容：

```makefile
if ("${CMAKE_SYSTEM_NAME}" STREQUAL "Windows")
    install(
        FILES
            $<TARGET_PDB_FILE:k4arecord>
        DESTINATION
            ${CMAKE_INSTALL_BINDIR}
        COMPONENT
            runtime
        OPTIONAL
    )
endif()
```

报错内容：

[cmake]   Error evaluating generator expression:
[cmake] 
[cmake]     $<TARGET_PDB_FILE:AzureKinectFirmwareTool>
[cmake] 
[cmake]   TARGET_PDB_FILE is not supported by the target linker.

[报错原因](https://stackoverflow.com/q/66145961/22348569)。在命令端口上不支持PDB文件，我需要在CMakeLists.txt文件中关闭pdb文件的生成。

具体方法：查看cmake的编译信息，在VS2017上：This is "CMAKE_C_COMPILER_ID": MSVC；在命令端口上：This is "CMAKE_C_COMPILER_ID": GNU。所以我们利用参数"CMAKE_C_COMPILER_ID"进行判断：
```makefile
if ("${CMAKE_SYSTEM_NAME}" STREQUAL "Windows")
# 将上面替换为：
if ("${CMAKE_C_COMPILER_ID}" STREQUAL "MSCV" AND "${CMAKE_SYSTEM_NAME}" STREQUAL "Windows")
```
问题解决，能正常生成.ninja文件。可以构建。