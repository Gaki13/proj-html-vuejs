<template>
  <div class="footer-top">
    <div class="container-st">
      <div class="row">
        <div class="col-3 d-flex flex-column">
          <img src="../../assets/img/logoimage.png" alt="Logo di Nex Gen">
          <p class="lower-title">A Functional HTML Template for Corporate & Bussiness</p>
          <div class="contact">
            <span> <font-awesome-icon icon="fa-solid fa-phone" /></span>
            +1 (305 1234-5678)
          </div>
          <div class="contact ">
            <span><font-awesome-icon icon="fa-solid fa-envelope" /></span>
            hello@example.com
          </div>
          <div class="contact ">
            <span><font-awesome-icon icon="fa-solid fa-location-dot" /></span>
            MainAvenue, 987
          </div>
          <div class="mt-4">
            <button class="secondary-button">GET IN TOUCH</button>
          </div> 
        </div>
        <div class="col-3">
          <div class="card-box">
            <h5>About</h5>
            <ul>
              <li v-for="link in linksAbout" :key="link" class="my-2"><a :href="link.url"><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" />{{link.text}}</a></li>
            </ul>
          </div>
        </div>
        <div class="col-3">
           <div class="card-box">
            <h5>Transport</h5>
            <ul>
              <li v-for="link in linksTransport" :key="link" class="my-2"><a :href="link.url"><font-awesome-icon icon="fa-solid fa-angle-right" class="me-2" />{{link.text}}</a></li>
            </ul>
          </div>
        </div>
        <div class="col-3">
           <div class="card-box">
            <h5>Support</h5>
            <ul>
              <li v-for="link in linksSupport" :key="link" class="my-2"><a :href="link.url"><font-awesome-icon icon="fa-solid fa-angle-right"  class="me-2"/>{{link.text}}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterTop',
  data(){
    return{
      linksAbout: [
        {
          text: "The Company",
          url: "#",
        },
        {
          text: "Institutional",
          url: "#",
        },
        {
          text: "Social & Events",
          url: "#",
        },
        {
          text: "Innovation",
          url: "#",
        },
        {
          text:"Environment",
          url: "#"
        },
        {
          text:"Technology",
          url: "#"
        },
      ],
      linksTransport: [
        {
          text: "Industrialized",
          url: "#",
        },
        {
          text: "Chemicals",
          url: "#",
        },
        {
          text: "Packaged Liquid",
          url: "#",
        },
        {
          text: "Construction",
          url: "#",
        },
        {
          text:"Laminated Wood",
          url: "#"
        },
        {
          text:"And others",
          url: "#"
        },
      ],
      linksSupport: [
        {
          text: "Responsability",
          url: "#",
        },
        {
          text: "Terms of Use",
          url: "#",
        },
        {
          text: "About Cookies",
          url: "#",
        },
        {
          text: "Privacy Policy",
          url: "#",
        },
        {
          text:"Accessibility",
          url: "#"
        },
        {
          text:"Information",
          url: "#"
        },
      ],
    }
  }

}
</script>

<style lang="scss" scoped>
  .footer-top{
    background-color: #111117;
    padding: 8.125rem 0 10rem;
    
    .contact{
      font-size: 1.1875rem;
      color: #b6c3d0;
      margin: .6875rem 0;
      span{
        margin-right: .625rem;
      }
    }
    
    .card-box{
      a{
        color: #b6c3d0;
        text-decoration: none;
        font-size: 1.25rem;
      }
      
      h5{
        color: white;
        margin-bottom: 2rem;
        font-size: 1.75rem;
      }
      ul{
        list-style: none;
        padding-left: 0;
      }
    }
  }
</style>