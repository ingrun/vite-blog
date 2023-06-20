# irdict 工具
响应式字典工具

## 下载
...

## 配置
```js
// config.js
import irdict from "../../../dist/irdict";
import request from "../request";

export default irdict({
  labelKey: "dictLabel",
  valueKey: "dictValue",
  remoteMethod: (dictKey, addDictItme) => {
    request.get("/api/system/dict/data/type/" + dictKey).then((res) => {
      addDictItme(dictKey, res.data);
    });
  },
});

```



```js
// main.js

import dictUtil from "./util/dict";
Vue.use(dictUtil);
```


```js
// 使用
this.$getDictList(dictKey)
this.$getDictLabel(dictKey, dictValue)
this.$addDictItme(dictKey, list)
```

