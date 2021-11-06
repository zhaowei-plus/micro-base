<template>
  <Layout>
    <div id="container">
      <div id="app"></div>
      <div id="root"></div>
    </div>
  </Layout>
</template>

<script>
import Layout from './layout'
export default {
  name: 'App',
  components: {
    Layout,
  }
}
</script>

<style lang="less">
#container {
  width: 100%;
  height: 100%;

  & > div {
    width: 100%;
    height: 100%;
  }
}
</style>
