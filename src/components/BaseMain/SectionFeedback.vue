<template>
  <div class="section">
    <div class="container-st">
      <!-- sezione del titolo -->
      <div class="row mb-5">
        <div class="col-1"></div>
        <div class="col-10 text-center d-flex flex-column align-items-center">
          <p class="upper-title">customer testimonials</p>
          <div class="section-title-dark my-3">
            <h2>Trusted</h2>
            <h2 class="boxed-title-dark">Feedback</h2>
          </div>
          <p>With all of this expertise anda capability comes an unrivalled commitment to customer service. We will work hard to understand your needs in order to develop a productive, long-term partnership.</p>
        </div>
      </div>
      <!-- card della sezione -->
      <div class="row">
        <div class="col-12 d-flex gap-5">
          <!-- card di woo commerce -->
          <div class="card-box">
            <div class="mb-4"> 
              <img src="../../assets/img/logo-1.png" alt="logo di Woo commerce">
            </div>
            <p>Modi, et soluta? Necessitatibus nemo explicabo voluptas mollitia magni. Quis error voluptas fugiat reiciendis officia, vel earum, hic quibusdam, ab facere ipsa.</p>
            <div class="d-flex">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span class="align-self-end"><font-awesome-icon icon="fa-solid fa-quote-right" class=" fs-2" /></span> 
            </div>
          </div>
          <!-- card di wordpress -->
          <div class="card-box">
            <div class="mb-4"> 
              <img src="../../assets/img/logo-2.png" alt="logo di word press">
            </div>
            <p>Modi, et soluta? Necessitatibus nemo explicabo voluptas mollitia magni. Quis error voluptas fugiat reiciendis officia, vel earum, hic quibusdam, ab facere ipsa.</p>
            <div class="d-flex">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span class="align-self-end"><font-awesome-icon icon="fa-solid fa-quote-right" class=" fs-2" /></span> 
            </div>
          </div>
          <!-- card di pingdom -->
          <div class="card-box">
            <div class="mb-4"> 
              <img src="../../assets/img/logo-3.png" alt="logo di pingdom">
            </div>
            <p>Modi, et soluta? Necessitatibus nemo explicabo voluptas mollitia magni. Quis error voluptas fugiat reiciendis officia, vel earum, hic quibusdam, ab facere ipsa.</p>
            <div class="d-flex">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span class="align-self-end"><font-awesome-icon icon="fa-solid fa-quote-right" class=" fs-2" /></span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionFeedback'
}
</script>

<style lang="scss" scoped>
  .section{
    background-color: #111117;
    color: #c0bebe;
    padding-top: 8.125rem ;
    padding-bottom: 10rem;
    font-size: 1.125rem;
    .card-box{
      font-size: 1.125rem;
      img{
        width: 40%;
        filter: invert(1);
      }
      span{
        color: #47474c;
      }
    }
  }
</style>