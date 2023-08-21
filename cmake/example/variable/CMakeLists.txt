# 定义变量SOURCE_FILES
set(SOURCE_FILES main.c) #定义源文名字符串变量
# 通过消息打印，查看参数具体含义
message(STATUS "*****************************")
message(STATUS " ")
message(STATUS "This is SOURCE_FILES: " ${SOURCE_FILES}) #工程可执行文件路径
message(STATUS "*****************************")
# 使用变量
# add_executable(hello-world ${SOURCE_FILES}) #增加可执行目标文件。具体看单源文件构建项目[SingleSrc](./../../../example/SingleSrc/)。