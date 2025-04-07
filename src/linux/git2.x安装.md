# centos7 安装新版GIT

::: details 移除旧版本
```bash
sudo yum remove git
sudo yum remove git-*
```
:::

::: info 安装
1. 添加 End Point Package Repository
2. 添加了 end point 库，就可以直接安装 git 2.x


```bash
sudo yum install https://packages.endpointdev.com/rhel/7/os/x86_64/endpoint-repo.x86_64.rpm
sudo yum install git
git --version
```
:::