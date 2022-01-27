
<template>
  <div class="button-wrapper">
    <t-button @click="handleClick">基础使用</t-button>
    <t-button color="#f2c97d">换种颜色</t-button>
  </div>
</template>

<script >
export default {
  name: 'Index',
  setup(props) {
    const handleClick = () => {
      alert('有基佬开我裤链')
    }
    return {
      handleClick
    }
  }
}
</script>
<style lang="less">
.button-wrapper{
  display:flex;
  .t-button {
    margin: 10px;
  }
}

</style>