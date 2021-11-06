<template>
  <div class="layout">
    <div class="layout__menu">
      菜单列表
    </div>
    <div class="layout__main">
      <div class="header">
        头部
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
// import { Lo } from 'element'
export default {
  name: 'layout'
}
</script>
<style>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
</style>

<style lang="less" scoped>

.layout {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ccc;

  &__menu {
    width: 180px;
    height: 100%;
  }

  &__main {
    width: calc(100% - 180px);
    height: 100%;

    .header {
      height: 70px;
      line-height: 70px;
    }

    .content {
      width: 100%;
      height: 100%;
    }
  }
}

</style>


