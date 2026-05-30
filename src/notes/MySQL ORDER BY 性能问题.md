---
title: MySQL ORDER BY 性能问题
description: MySQL ORDER BY 不同排序方向的性能差异分析与优化实践
date: 2026-05-30
---

### MySQL ORDER BY 性能问题

<p class="note-date">2026-05-30</p>


#### 1. `ORDER BY id ASC` vs `DESC`

`id` 为主键（聚簇索引），性能取决于 MySQL 版本：

| 版本 | 行为 | 性能 |
|------|------|------|
| **MySQL < 8.0.13** | ASC 正向扫描叶子节点链表；DESC 反向遍历双向链表 | DESC 慢 10%~30% |
| **MySQL ≥ 8.0.13** | 引入 **Backward Index Scan** 优化 | 两者基本无差异 |

验证方式：`EXPLAIN` 查看 `Extra` 列是否显示 `Backward index scan`。

---

#### 2. `ORDER BY create_time`（无索引时）

ASC 和 DESC 代价相同，流程固定：

1. **全表扫描** — 读取所有行
2. **filesort** — 在内存或磁盘排序（取决于 `sort_buffer_size` 和数据量）

表越大越慢。数据量超过 `sort_buffer_size` 时会使用磁盘临时文件，性能急剧下降。

#### 优化方案（按推荐顺序）

- 高频查询加**复合索引**：`(xxx, create_time)` 覆盖查询 + 排序
- 配合 `LIMIT n` + 合适索引 → 走 **Using index** 直接按索引顺序取，不走 filesort
- 无索引 + 大表 → 绝对避免无条件的 ORDER BY
