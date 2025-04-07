# centos7 安装 mysql8.0

## 卸载MariaDB

查询已安装的MariaDB

```bash
rpm -qa|grep mariadb

// mariadb-lib-*************.x86_64
```

卸载

```sh
rpm -e --nodeps mariadb-lib-*************.x86_64
```

确认是否已卸载

```bash
rpm -qa|grep mariadb
```



## 下载安装rpm包

```bash
wget https://repo.mysql.com//mysql80-community-release-el7-10.noarch.rpm
yum install mysql80-community-release-el7-10.noarch.rpm
```



## 安装

```bash
yum install mysql-community-server -y
```



## 修改配置文件

```bash
vim /etc/my.cnf
```

```bash

# For advice on how to change settings please see
# http://dev.mysql.com/doc/refman/8.0/en/server-configuration-defaults.html

[mysql]
# 默认字符集
default-character-set=utf8mb4

[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock

log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid

port=33306
#设置不区分大小写
lower_case_table_names=1

#配置日志时间
log_timestamps=SYSTEM
##系统时区
default-time-zone='+08:00'
#添加sql_mode
sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
```





## 连接数据库

启动

```bash
systemctl start mysqld
```

获取初始密码

```bash
grep 'temporary password' /var/log/mysqld.log

// 2023-09-26T07:44:32.752489Z 6 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: fAoleiKiq9&W
```

使用初始密码连接数据库

```bash
mysql -u root -p  
```

修改初始密码，` 密码至少要有一个大写字母，一个小写字母，一个数字，一个特殊符号，并且长度至少为八位。 `

```bash
ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass4!'
```

修改可远程访问

```bash
use mysql
update user SET Host = '%' WHERE user = 'root' and Host='localhost';
```

