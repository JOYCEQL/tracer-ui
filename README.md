# Tracer-UI


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
```js
//main.js
import { createApp } from 'vue'
import App from './App.vue'
import {Button} from 'tracer-ui'
import 'tracer-ui/lib/style/Button.css'
createApp(App).use(Button).mount('#app')
```

## 单文件组件中直接使用


```vue
<template>
  <t-button>tracer-ui</t-button>
</template> 
```
