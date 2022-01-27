<!--
 * @Author: yuguangzhou
 * @Date: 2022-01-19 13:42:55
 * @LastEditTime: 2022-01-25 13:42:02
 * @LastEditors: yuguangzhou
 * @Description: 
-->
<template>
  <button class="t-button" @click="$emit('click', $event)" :style="{ background: color }">
    <slot></slot>
  </button>
</template>

<script >
import { defineComponent } from 'vue'

export default defineComponent({ 
  name: 'TButton',
  props: {
    color: {
      type: String 
    },
  },
  emits: ['click'],
})
</script>

<style lang="less">
@import './style/Button.less';
</style>
