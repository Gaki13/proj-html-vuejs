<template>
  <div class="header">
        <InfoHeader/>
        <HeaderTop/>
        <HeroJumbo/>
  </div>
</template>

<script>
import InfoHeader from './InfoHeader.vue'
import HeaderTop from './HeaderTop.vue'
import HeroJumbo from './HeroJumbo.vue'
export default {
    name: 'BaseHeader',
    components :{
        InfoHeader,
        HeaderTop,
        HeroJumbo
    },
}
</script>

<style lang="scss" scoped>

</style>