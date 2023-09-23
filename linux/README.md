# Linux

## 设置代理

### 安装clash for linux

参考：https://github.com/wanhebin/clash-for-linux、https://zhuanlan.zhihu.com/p/608734142?utm_id=0

```bash
git clone https://github.com/wanhebin/clash-for-linux.git
cd clash-for-linux
```

进入到项目目录，编辑start.sh脚本文件，修改变量URL的值,此值为Clash订阅地址。这里选择用VSC打开，更改如下：

```sh
# 将 CLASH_URL 变量的值赋给 URL 变量，并检查 CLASH_URL 是否为空
# URL=${CLASH_URL:?Error: CLASH_URL variable is not set or empty}
CLASH_URL="https://www."
URL=${CLASH_URL:?Error: CLASH_URL variable is not set or empty}
````

运行启动脚本

```bash
sh start.sh
```

出现如下问题：

```bash
start.sh: 9: start.sh: Bad substitution
当前的路径是：/home/adunas/Downloads/clash-for-linux
/home/adunas
start.sh: 15: start.sh: source: not found
chmod: 无法访问'/home/adunas/bin/*': 没有那个文件或目录
chmod: 无法访问'/home/adunas/scripts/*': 没有那个文件或目录
chmod: 无法访问'/home/adunas/tools/subconverter/subconverter': 没有那个文件或目录
start.sh: 84: start.sh: source: not found
start.sh: 87: start.sh: [[: not found
-e 
正在检测订阅地址...
start.sh: 108: start.sh: curl: not found
```

路径有错，更改start.sh第9行文件路径参数Server_Dir：

```powershell
# 获取脚本工作目录绝对路径
# export Server_Dir=$(cd $(dirname "${BASH_SOURCE[0]}") && pwd)
Server_Dir=$(pwd)
echo "当前的路径是：$Server_Dir"
```

#### 给bash设置代理

&emsp;&emsp;查询代理：

```bash
netstat
```

看到有端口号为7890与Clash for Windows的端口号相同（Clash全局设置为直连，规则设置为美国）。

```bash
# 设置代理端口
git config --global http.proxy 'http://127.0.0.1:7890'
git config --global https.proxy 'https://127.0.0.1:7890'
```

完毕。

## 英文路径

&emsp;&emsp;Ubuntu更改语言时，选择同时更改了文件语言，如文档、下载等，如何还原为英文？

方法是更改系统语言为英文，重启，选择更新文件夹名称。再重新更改系统语言为中文，此时选择不更新文件夹名称。如果中文文件夹下有文件，会保留中文文件，移动文件并删除中文文件夹即可。

## 隐藏文件

&emsp;&emsp;在文件夹下：Ctrl+H。在命令端口：ls -a。