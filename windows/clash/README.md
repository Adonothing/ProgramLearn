# clash

## 给bash设置代理

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