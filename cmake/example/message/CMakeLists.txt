# 通过消息打印，查看参数具体含义
message(STATUS "*****************************")
message(STATUS " ")
message(STATUS "This is \"PROJECT_BINARY_DIR\": " ${PROJECT_BINARY_DIR}) #工程可执行文件路径
message(STATUS "This is \"PROJECT_SOURCE_DIR\": " ${PROJECT_SOURCE_DIR}) #工程源文件路径
message(STATUS "This is \"CMAKE_BINARY_DIR\": " ${CMAKE_BINARY_DIR}) #cmake可执行文件路径
message(STATUS "This is \"CMAKE_SOURCE_DIR\": " ${CMAKE_SOURCE_DIR}) #cmake源文件路径
message(STATUS " ")
message(STATUS "This is \"CMAKE_CURRENT_BINARY_DIR\": " ${CMAKE_CURRENT_BINARY_DIR}) #cmake当前可执行文件路径
message(STATUS "This is \"CMAKE_CURRENT_SOURCE_DIR\": " ${CMAKE_CURRENT_SOURCE_DIR}) #cmake当前源文件路径
message(STATUS " ")
message(STATUS "This is \"CMAKE_CURRENT_LIST_FILE\": " ${CMAKE_CURRENT_LIST_FILE}) #当前运行的CMakeLists.txt
message(STATUS "This is \"CMAKE_CURRENT_LIST_LINE\": " ${CMAKE_CURRENT_LIST_LINE}) #当前运行的CMakeLists.txt的行数
message(STATUS " ")
message(STATUS "*****************************")