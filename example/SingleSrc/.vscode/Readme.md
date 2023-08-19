# .vscode

## 文件

1. [launch.json](/example/SingleSrc/.vscode/launch.json)：“调试和运行”控制文件。
2. [tasks.json](/example/SingleSrc/.vscode/tasks.json)：“编译”控制文件。

## tasks.json

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