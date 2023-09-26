# 分屏

## moonlight

&emsp;&emsp;开源的，只适配于n卡的显卡。通过局域网连接。对于核显连接的屏幕支持不友好：10fps左右，占部分cpu，对独显直连的电脑支持很友好。它有个奇怪的特点是，在英伟达GeForce里可以在shelid里打开，添加mscsc.exe作为屏幕启动项，后可以启动屏幕。此时是复制的，而且系统没有记录屏幕选项。方法是用屏幕欺骗器，或者虚拟屏幕，见[](./README.md#)。然后moonlight会占用这个屏幕。

&emsp;&emsp;以后买个好点的n卡独显台式机就可在手机上玩儿这个软件。

## usbmmidd

&emsp;&emsp;USB屏幕虚拟器。最多添加4个屏幕。在文件夹下打开cmd输入命令：

```cmd
# 安装，电脑安装一次即可
deviceinstaller64 install usbmmidd.inf usbmmidd
# 打开监视器，重复输入开多个，最多四个
deviceinstaller64 enableidd 1
# 关闭监视器
deviceinstaller64 enableidd 0
# 完全卸载，或在系统中卸载
deviceinstaller64 stop usbmmidd
deviceinstaller64 remove usbmmid
```

## Splashtop Wired XDisplay

&emsp;&emsp;一般，用移动设备通过usb线拓展windows的屏幕，稳定新和有延迟。

## spacedesk

&emsp;&emsp;体验很好，通过局域网。正常吃核显，不吃cpu，在吃一点WLAN资源。很好用。可以让两台电脑互为拓展屏幕。记得只能windows做主机，windows、ios、macos（只支持m系列芯片）、安卓作为副屏。配合键鼠工具Mouse without Borders可以完美双电脑四屏幕。在设置里把鼠标更换黑白两色，鼠标只在主机屏幕操作，不要通过spacedesk传递鼠标信息，就不会卡顿，很流畅。

## Mouse without Borders

&emsp;&emsp;键鼠工具，一套键鼠就可以连接最多四台电脑。在设置里把鼠标更换颜色就清晰了。

## 投影

&emsp;&emsp;windows原生自带的投影器，还行。但是有bug：a电脑能通用给b电脑，反过来无法投用，故障未知，所以选用spacedesk。

## 文件夹说明

1. 。
2. []()：。