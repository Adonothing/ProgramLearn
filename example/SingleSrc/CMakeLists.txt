cmake_minimum_required(VERSION 3.7.1) #cmake的最小版本。

project(hello-world) #工程名

set(SOURCE_FILES main.c) #编译源文件

message(STATUS "This is BINARY dir " ${PROJECT_BINARY_DIR}) #消息打印，可执行文件路径。
message(STATUS "This is SOURCE dir " ${PROJECT_SOURCE_DIR}) #消息打印，源文件路径。

add_executable(hello-world ${SOURCE_FILES}) #增加可执行目标文件
