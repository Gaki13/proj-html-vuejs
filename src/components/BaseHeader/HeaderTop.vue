<template>
  <div class="header-top">
    <div class="container-st">
      <div class="row py-3">
        <div class="col 2"><img src="../../assets/img/logo-1.png" alt=""></div>
        <div class="col-9">
          <nav>
            <ul class="d-flex justify-content-between align-items-center">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SERVICES</li>
              <li>PROCESS</li>
              <li>TESTIMONIALS</li>
              <li><font-awesome-icon icon="fa-regular fa-user" /></li>
              <li><button class="primary-button">GET IN TOUCH</button></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HeaderTop'
}
</script>

<style lang="scss" scoped>
  .header-top{
    color: white;
    font-weight: bold;
    ul{
      list-style: none;
      font-size: 1.125rem;
    }
  }
</style>