```shell
# 卸载旧版本
yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

- 注意，docker 的本地文件，包括镜像(images), 容器(containers), 存储卷(volumes)等，都需要手工删除。默认目录存储在 `/var/lib/docker`。

  ```
  sudo rm -rf /var/lib/docker
  ```





```shell
# 安装依赖
yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```



```
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```



```
yum update
yum install docker-ce
```






## openEuler



### 1、更新系统

在安装之前，请确保您的系统已经更新到最新版本。使用以下命令更新您的系统：

```go
sudo dnf update -y
```

### 2、安装必要的软件包

安装所需的软件包以便使用 `Docker CE` 存储库：

```go
sudo dnf install -y dnf-plugins-core
```

### 3、添加 Docker CE 存储库

此处添加 `docker-ce.repo` 源：

```go
sudo dnf config-manager --add-repo=https://repo.huaweicloud.com/docker-ce/linux/centos/docker-ce.repo
```

> 注意：在修改 `docker-ce.repo` 原文件之前，为了保险可以执行如下命令先 `copy` 一份留作备份。

```go
cp docker-ce.repo docker-ce.repo.bak
```

将  `docker-ce.repo` 中官方地址替换为华为开源镜像，提升下载速度。

```go
sed -i 's+download.docker.com+repo.huaweicloud.com/docker-ce+' /etc/yum.repos.d/docker-ce.repo
```

> 说明：`docker-ce.repo` 中用 `$releasever` 变量代替当前系统的版本号，该变量在 `CentOS` 中有效，但在 `openEuler` 中无效，所以将该变量直接改为`8`。

```shell
sed -i 's+$releasever+8+'  /etc/yum.repos.d/docker-ce.repo
```

### 4、更新索引缓存并安装 Docker CE

更新索引缓存：

```shell
dnf makecache
```

现在您可以使用 `DNF` 包管理器安装 `Docker CE` 了：

```shell
sudo dnf install -y docker-ce docker-ce-cli containerd.io
```