# Nacos安装

[官网](https://nacos.io/zh-cn/docs/v2/quickstart/quick-start.html)



## 下载最新版本

https://github.com/alibaba/nacos/releases 

```bash
wget https://github.com/alibaba/nacos/releases/download/2.3.1/nacos-server-2.3.1.tar.gz
```



## 解压

```bash
tar -xvf nacos-server-$version.tar.gz
```



## 启动

```bash
sh startup.sh -m standalone   # 单机模式
```



## 关闭服务器

```bash
sh shutdown.sh
```

