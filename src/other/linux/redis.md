

# centos7 yum安装redis 

[知乎-CentOS 7 / Linux 安装Redis（超简单版)](https://zhuanlan.zhihu.com/p/626263224)



## 安装


```text
yum install -y http://rpms.famillecollet.com/enterprise/remi-release-7.rpm

yum --enablerepo=remi install redis -y

```



## 启动等操作

```text
# 启动
systemctl start redis

# 查看状态
systemctl status redis

# 停止
systemctl stop redis

# 重启
systemctl restart redis
```



## 查看版本号

```text
redis-server -v
redis-server --version

输出
Redis server v=3.2.12 sha=00000000:0 malloc=jemalloc-3.6.0 bits=64 
build=7897e7d0e13773f
```



## 验证安装

安装 `redis`，都会附带安装 `redis-cli`，这是 Redis 的客户端工具

我们可以使用它，验证 redis 是否正常运行

```text
# 进入客户端
redis-cli

# 成功连接并且进入客户端
127.0.0.1:6379> 

# 添加数据
127.0.0.1:6379> set test-key test-value
OK

# 查询数据
127.0.0.1:6379> get test-key
"test-value"

# 删除数据
127.0.0.1:6379> del test-key
(integer) 1

# 退出客户端
127.0.0.1:6379> exit
```

能正常连接，且操作数据，表示安装成功。



## 开启远程连接

```text
# 进入并编辑redsi.conf文件
vim /etc/redis.conf

# 找到bind 127.0.0.1 将其注释（#）或修改为 bind 0.0.0.0
bind 0.0.0.0

# 为了安全，我们需要开启密码保护
# 找到 # requirepass xxx ，默认是被注释的，将注释符号去掉，并添加自己的密码
# 找到它要往下拉很久，我们也可以直接在 bind 0.0.0.0 下面添加一个 requirepass xxx
requirepass 123456

# 端口号设置  默认6379
prot 6379

# 按 esc 键，并输入 :wq 保存

# 重启，让配置生效
systemctl restart redis
```



## 开放端口

腾讯云和阿里云的服务器，请到控制台 - 服务器 - 安全组 - 开放6379端口，否则远端无法登录。