---
title: 联合索引 (A, B, C) 使用规则
date: 2026-05-30
---

### 联合索引 `(A, B, C)` 使用规则

<p class="note-date">2026-05-30</p>


#### 核心原则：最左前缀

索引 `KEY idx_abc (A, B, C)`，条件必须从 A 开始，中间的列不能跳过。

#### 条件顺序不影响

MySQL 优化器会做**谓词重排（predicate reordering）**：

```sql
WHERE B = ? AND A = ?   -- 优化器自动改写为 WHERE A = ? AND B = ?
```

`EXPLAIN` 看 `key_len` 和 `ref` 列确认。唯一影响索引使用的不是书写顺序，而是**最左列是否存在**。

---

#### ✅ 走索引的场景

| SQL | 使用情况 |
|-----|---------|
| `WHERE A = ?` | 用满 A |
| `WHERE A = ? AND B = ?` | 用满 A、B |
| `WHERE A = ? AND B = ? AND C = ?` | 用满 A、B、C |
| `WHERE A = ? AND C = ?` | 只用 A（B 被跳过，C 不生效，索引过滤 + 回表） |
| `WHERE A = ? AND B > ? AND C = ?` | A 等值 + B 范围，C 不生效（范围右边列失效） |
| `WHERE A = ? ORDER BY B` | 走索引排序，无 filesort |
| `WHERE A = ? AND B = ? ORDER BY C` | 完全有序，无 filesort |

#### ❌ 不走索引（或走不全）

| SQL | 原因 |
|-----|------|
| `WHERE B = ?` | 跳过最左列 A |
| `WHERE C = ?` | 跳过 A、B |
| `WHERE B = ? AND C = ?` | 跳过 A |
| `WHERE A LIKE '%xxx'` | 前导通配符，A 失效 |
| `WHERE A = ? OR B = ?` | OR 条件两边不走同一索引（除非都覆盖 A） |

---

#### 关键规则汇总

1. **最左前缀** — 必须从 A 开始
2. **范围右边失效** — `>`、`<`、`BETWEEN`、`LIKE 'xxx%'` 之后的列不走索引（`IN`、`=` 不受影响）
3. **排序方向一致** — `ORDER BY B ASC, C DESC` 方向不一致，不走索引排序
