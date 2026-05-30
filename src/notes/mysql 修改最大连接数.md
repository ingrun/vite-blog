---
title: mysql 修改最大连接数
date: 2023-11-15
---

# mysql 修改最大连接数

<p class="note-date">2023-11-15</p>



```sql
# 查询当前最大连接数
show variables like '%max_connections%'

# 修改当前最大连接数为500
set global max_connections=500
```
