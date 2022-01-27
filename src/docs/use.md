<!--
 * @Author: yuguangzhou
 * @Date: 2022-01-26 14:02:55
 * @LastEditTime: 2022-01-26 16:51:04
 * @LastEditors: yuguangzhou
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
import { createApp } from 'vue'
import App from './App.vue'
import tracer from 'tracer-ui'
import 'tracer-ui/lib/style.css'
createApp(App).use(tracer).mount('#app')
```

## 按需引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import {Button} from 'tracer-ui'
import 'tracer-ui/lib/style/Button.css'
createApp(App).use(Button).mount('#app')
```