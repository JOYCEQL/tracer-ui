<!--
 * @Author: yuguangzhou
 * @Date: 2022-01-26 14:02:55
 * @LastEditTime: 2022-02-07 11:54:48
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<script setup>
import {onMounted} from 'vue'
import Prism from 'prismjs';
import '@/assets/styles/prism.css';
onMounted(()=>{
    Prism.highlightAll()
})
</script>

# 使用


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


然后在vue项目中的入口文件中引入组件即可
```js
//main.js
import { createApp } from 'vue'
import App from './App.vue'
import {Button} from 'tracer-ui'
createApp(App).use(Button).mount('#app')
```

## 单文件组件中直接使用


```html
<template>
  <t-button>tracer-ui</t-button>
</template> 
```