<template>
  <div class="section">
    <div class="container-full">
      <!-- sezione del titolo -->
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4 text-center d-flex flex-column align-items-center">
          <p class="upper-title">how it works in pratice</p>
          <div class="section-title">
            <h2 class="boxed-title">Logistical</h2>
            <h2>Procedure</h2>
          </div>
          <p>We work with innovative moethodologies to ensure that ensure that the entire delivery process is done from start ti finish as planned</p>
        </div>
      </div>
      <!-- sezione della barra con le fasi del processo -->
      <div class="line"></div>
      <div class="container-large">
        <div class="row justify-content-center gap-5">
          <div class="col-2">
            <h6>01</h6>
            <h5>Collection of <br> information</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div class="col-2">
            <h6>02</h6>
            <h5>Service Invoice <br> Sending</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div class="col-2">
            <h6>03</h6>
            <h5>Wihtdrawal of <br> Cargo</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div class="col-2">
            <h6>04</h6>
            <h5>Transport Customer <br> Order</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div class="col-2">
            <h6>05</h6>
            <h5>Successful Delivery</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
    name: 'SectionProcedure'
}
</script>

<style lang="scss" scoped>
  .container-full{
    background-color: #eef4ed;
    padding: 8.125rem 0 10rem;
    .line{
      border: 3px solid #cce3de;
      margin-bottom: -20px;
      margin-top: 3.4375rem;
    }
    .col-2{
      text-align: center;
      color: #646d75;
      font-size: 1rem;
      h6{
        color: #058283;
        background-color: #daeced;
        padding: .4375rem .5625rem; 
        border-radius: 50%;
        display: inline-block;
      }
      h5{
        color: #21333e;
        font-size: 1.25rem;
      }
    }
  }
</style>