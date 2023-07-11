# irdict 工具
响应式字典工具

## 下载

 http://file.ingrun.cn/irdict.js 

## 配置
```js
// config.js
import irdict from "../../../dist/irdict";
import request from "../request";

const config = new irdict({
  labelKey: "dictLabel",
  valueKey: "dictValue",
  remoteMethod: (dictKey, addDictItme) => {
    request.get("/api/system/dict/data/type/" + dictKey).then((res) => {
      addDictItme(dictKey, res.data);
    });
  },
});


/**
 * 
 * instance.getDictList(dictKey)
 * instance.getDictLabel(dictKey, dictValue)
 * instance.addDictItme(dictKey, list)
 *  */ 
const instance = config.create(vue);
export default instance



/**
 * 以 Vue 插件使用
 *  */ 
// const instance = config.create(vue);
// 直接导出config
export default config


// main.js
// 在 main.js 导入使用
import dictConfig from "./util/dict";
Vue.use(dictConfig);
```

```js
// 使用
this.$getDictList(dictKey)
this.$getDictLabel(dictKey, dictValue)
this.$addDictItme(dictKey, list)
```

### source code
```js
// source code
"use strict";
import Dict from "./main/index.js";

class dictConfig {
  constructor(config) {
    this._config = config;
  }

  install = (Vue) => {
    const instance = new Dict(Vue, this._config);
    Vue.prototype.$getDictList = instance.getDictList;
    Vue.prototype.$getDictLabel = instance.getDictLabel;
    Vue.prototype.$addDictItme = instance.addDictItme;

    return instance;
  };
  create = (Vue) => {
    return new Dict(Vue, this._config);
  };
}

export default dictConfig;
```