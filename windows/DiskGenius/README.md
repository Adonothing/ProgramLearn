# DiskGenius

## 文件夹说明

1. [picture](./picture/)：图片。
2. []()：。

## 错误信息

### $Bitmap中有标记为已使用的未用簇

&emsp;&emsp;当调整磁盘大小时，出现如下[@fig:$Bitmap中有标记为已使用的未用簇]所示报错：

![$Bitmap中有标记为已使用的未用簇](./picture/$Bitmap中有标记为已使用的未用簇.jpg){@fig:$Bitmap中有标记为已使用的未用簇}

解决办法：

```cmd
chkdsk /f /x e:
```

其中e:为对应的盘符。如果是C盘选择在下次重启时操作。成功。