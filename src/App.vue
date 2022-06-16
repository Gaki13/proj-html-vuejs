<template>
  <div id="app">
      <BaseHeader/>
      <BaseMain/>
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader/BaseHeader.vue'
import BaseMain from './components/BaseMain/BaseMain.vue'

export default {
  name: 'App',
  components: {
      BaseHeader,
      BaseMain,
  }
}
</script>

<style lang="scss">
  @import 'assets/global.scss';
</style>
