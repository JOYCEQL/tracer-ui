
<script setup>
import {onMounted} from 'vue'
import Prism from 'prismjs';
import '@/assets/styles/prism.css';
onMounted(()=>{
    Prism.highlightAll()
})
</script>
# 安装

可以选择下面三种包管理器的任意一种，推荐pnpm。

## npm


```shell
    npm install tracer-ui
```

## yarn

```shell
    yarn add tracer-ui
```

## pnpm

```shell
    pnpm install tracer-ui
```




