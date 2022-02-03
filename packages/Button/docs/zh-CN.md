
<script setup>
import index from '../example/index.vue'
</script>

# 按钮


## 演示

<index />



## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `color` | 按钮颜色 | _string_ | `null` |
| `type` | 按钮类型 | `'default' \| 'primary' \|'success'\|'info'\|'warning'\|'error'`|`default`
| `size` | 按钮尺寸 | `'default' \| 'large' \|'small'`| `default` |
| `round` | 是否为圆角 | _boolean_ | `false`|
| `circle` | 是否为圆形| _boolean_ | `false`|
| `disabled` | 是否禁用| _boolean_ | `false`|

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击按钮时触发 | `event: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 按钮内容 | `-` |