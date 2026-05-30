---
title: vue 背景图片地址处理
date: 2023-01-30
---

## vue 背景图片地址处理

<p class="note-date">2023-01-30</p>


```js
:style="{backgroundImage: 'url(' +imgUrl + ')'}"
// -------------------------
data (){
    imgUrl:require('../assets/logo.png')
    // imgUrl:require('@/assets/logo.png')
}
```