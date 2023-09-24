# BIOS

## 接通电源自动开机

&emsp;&emsp;给个结论：从电脑里备份bios，再提取的文件。就算成功修改了，这个文件内容没有变，所以这是不准确的。而用ru.efi启动很准确。

&emsp;&emsp;还是和CFG LOCK一样转化为txt文本，Ctrl+F，搜索State After，发现位置为0x19，内容为0x5。目标改为0x00。进入ru,efi和CFG LOCK操作一样，进入PCHSetup，光标到0x19，将内容01改为00。即可。

&emsp;&emsp;其中快捷键Alt++为进入文件列表；快捷键Alt+q为不保存退出；按上下左右移动位置，输入数字，回车后输入完成；快捷Ctrl+w是保存输入。

1. 
2.  []()：。
