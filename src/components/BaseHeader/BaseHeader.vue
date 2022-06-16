<template>
  <header>
      <InfoHeader/>
      <div class="Hero">
        <div class="Hero-content">
          <HeaderTop/>
          <HeroJumbo/>
        </div>
      </div>  
  </header>
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
  .Hero{
    width: 100%;
    height: 70rem;
    background-image: url(../../assets/img/bg-9.jpg);
    background-repeat: no-repeat;
    background-size: cover;
      &-content{
       height: 100%; 
        background-color: rgba(0,0,0,0.7);
      }
  }
</style>