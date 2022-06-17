<template>
  <div class="header-top">
    <div class="container-st">
      <div class="row py-3">
        <div class="col 2"><img src="../../assets/img/logoheader.png" alt=""></div>
        <div class="col-9">
          <nav>
            <ul class="d-flex justify-content-between align-items-center">
              <li v-for="link in links" :key="link">{{link.text}}</li>
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
  name: 'HeaderTop',
  data(){
    return{
      links: [
        {
          text: "Home",
          url: "#",
          current: false,
        },
        {
          text: "About",
          url: "#",
          current: false,
        },
        {
          text: "Sevices",
          url: "#",
          current: false,
        },
        {
          text: "Process",
          url: "#",
          current: false,
        },
        {
          text: "Testimonials",
          url: "#",
          current: false,
        },
      ],
    }
  }
  
}
</script>

<style lang="scss" scoped>
  .header-top{
    color: white;
    font-weight: bold;
    img{
      width: 50%;
    }
    ul{
      list-style: none;
      font-size: 1.125rem;
      li{
        text-transform: uppercase;
      }
    }
  }
</style>