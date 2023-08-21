# .vscode

## 文件

1. [launch.json](./launch.json)：“调试和运行”控制文件。
2. [tasks-origin.json](./tasks-origin.json)：`tasks.json`文件的备份。
3. [tasks-test.json](./tasks-test.json)：`tasks.json`文件的测试文件。测试路径参数。
4. [tasks.json](./tasks.json)：“编译”控制文件。

## tasks.json

&emsp;&emsp;必要注释，和其他可选参数。

```json{.line-numbers}
{
    "tasks": [
        {
            "type": "cppbuild",
            "label": "C/C++: gcc.exe 生成活动文件",
            "command": "E:\\01_Adunas\\02_EnglishPath\\03_software\\07_program\\02_C\\02_WinGW\\02_FilePozition\\02_R7000\\mingw64\\bin\\gcc.exe", //编译器
            "args": [
                "-fdiagnostics-color=always",
                "-g",
                "${file}", //被编译文件
                //还可以进行以下更改
                //"*.cpp" //编译所有".cpp"文件
                //"main.c" //编译所有"main.c"文件
                "-o",
                "${fileDirname}\\${fileBasenameNoExtension}.exe" //可执行文件
                //"${fileDirname}\\VSCode\\${relativeFileDirname}.exe" //放在VSCode文件夹中，名字为上一层文件夹名。对于c文件来说是.
                //"${fileDirname}\\VSCode\\${workspaceFolderBasename}.exe" //放在VSCode文件夹中，名字为当前工作区文件夹名。
            ],
            "options": {
                "cwd": "${fileDirname}"
            },
            "problemMatcher": [
                "$gcc"
            ],
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "detail": "调试器生成的任务。"
        }
    ],
    "version": "2.0.0"
}
```

其中`${}`指的是什么路径呢？

可以参考网页[predefined variables](https://code.visualstudio.com/docs/editor/variables-reference#_predefined-variables)或本地[Predefined variables](../../../VSC/extern/vscode-docs/docs/editor/variables-reference.md#-predefined-variables)。[显示路径的方法](../../../VSC/extern/vscode-docs/docs/editor/variables-reference.md#-How-can-I-know-a-variable's-actual-value?)，选择继续而不扫描任务输出。想要正确输出，需要注意以下几点：

1. 文件名称必须为`tasks.json`。
2. 文件路径必须为`.vscode`
3. 注意要在该.vscoed文件生成的目录下才能生效，即在文件`SingleSrc`目录下打开VSC软件。

## launch.json

&emsp;&emsp;必要注释，和其他可选参数。需与tasks.json文件配合。

```json
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "(gdb) 启动",
            "type": "cppdbg",
            "request": "launch",
            "program": "输入程序名称，例如 ${workspaceFolder}/a.exe", //可执行文件，与tasks.json文件对应。
            //"program": "${fileDirname}\\${fileBasenameNoExtension}.exe" 
            //"program": "${fileDirname}\\VSCode\\${relativeFileDirname}.exe" 
            //"program": "${fileDirname}\\VSCode\\${workspaceFolderBasename}.exe" 
            "args": [],
            "stopAtEntry": false,
            "cwd": "${fileDirname}", //控制台。路径无影响。
            //"cwd": "${fileDirname}\\VSCode" //可与可执行文件同目录。
            "args": [],
            "environment": [],
            "externalConsole": false, //外部控制台
            "MIMode": "gdb",
            "miDebuggerPath": "/path/to/gdb", //调试工具。
            //"miDebuggerPath": "E:\\01_Adunas\\02_EnglishPath\\03_software\\07_program\\02_C\\02_WinGW\\02_FilePozition\\02_R7000\\mingw64\\bin\\gdb.exe", //gdb调试器。
            "setupCommands": [
                {
                    "description": "为 gdb 启用整齐打印",
                    "text": "-enable-pretty-printing",
                    "ignoreFailures": true
                },
                {
                    "description": "将反汇编风格设置为 Intel",
                    "text": "-gdb-set disassembly-flavor intel",
                    "ignoreFailures": true
                }
            ]
        }

    ]
}
```