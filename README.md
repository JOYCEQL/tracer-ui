# Tracer-UI

## 安装
```shell
//npm
npm install tracer-ui
//yarn
yarn add tracer-ui
//pnpm
pnpm install tracer-ui
```
## 全量引入

```js
//main.js
import { createApp } from 'vue'
import App from './App.vue'
import tracer from 'tracer-ui'
import 'tracer-ui/lib/style.css'
createApp(App).use(tracer).mount('#app')
```

## 按需引入

在 **babel.config.js** 中添加配置
```js
module.exports = {
  plugins: [
      ["babel-plugin-tracer", {
        "cssPath": "tracer-ui/lib/style/{key}.css", 
        "jsPath": "tracer-ui/lib/Tracer.es.js",
        "lib": "tracer-ui" 
    }]
  ]
}
```
然后在main.js中引入
```js
//main.js
import { createApp } from 'vue'
import App from './App.vue'
import {Button} from 'tracer-ui'
createApp(App).use(Button).mount('#app')
```

## 单文件组件中直接使用


```vue
<template>
  <t-button>tracer-ui</t-button>
</template> 
```
