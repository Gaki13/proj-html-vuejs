<template>
  <div class="section">
    <div class="container-st">
      <div class="row">
        <div class="col-9">
          <p class="upper-title">road transport</p>
          <div class="section-title-dark">
            <h2>Main</h2>
            <h2 class="boxed-title-dark">Services</h2>
          </div>
          <p>With all of this expertise anda capability comes an unrivalled commitment to customer service. We will work hard to understand your needs in order to develop a productive, long-term partnership.</p>
        </div>
        <div class="col-3 d-flex align-items-end justify-content-end">
          <button class="secondary-button">SEE ALL</button>
        </div>
      </div>
      <!-- sezione card -->
      <div class="row mt-5">
        <div class="col-12 d-flex gap-5">
          <!-- card numero 1 -->
          <div class="card-box">
            <div class="card-icons">
              <span><font-awesome-icon icon="fa-solid fa-truck-ramp-box" /></span> 
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </div>
            <h5>Technology</h5> 
            <p>We are continually focused on developing technology solutions adapted to our client's needs.</p>
          </div>
          <!-- card numero 2 -->
          <div class="card-box">
            <div class="card-icons">
              <span><font-awesome-icon icon="fa-solid fa-temperature-low" /></span>
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </div>
            <h5>Reefer Cargo</h5>
            <p>Regular and frequent monitoring from the receipt of the loaded container to final destination.</p>
          </div>
          <!-- card numero 3 -->
          <div class="card-box">
            <div class="card-icons">
              <span><font-awesome-icon icon="fa-solid fa-boxes-stacked" /></span>     
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </div>
            <h5>Dry Cargo</h5>
            <p>We work with most types of dry cargo, from valuable cargo to the most dangerous requiring care.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SectionService'
}
</script>

<style lang="scss" scoped>
  .section{
    background-color: #111117;
    color: #c0bebe;
    padding-top: 8.125rem ;
    padding-bottom: 10rem;
  }

  .card-box{
    h5{
      color: white;
      font-size: 1.875rem;
      margin: 1.375rem 0;
    }
    p{
      font-size: 1.125rem;
    }
    .card-icons{
      font-size: 1.5rem;
      color: #0f4e51;
      display: flex;
      justify-content: space-between;
      span{
        background-color: #0f4e51;
        color: #058283;
        // width: 2.25rem ;
        border-radius: 50%;
        padding: 5px .625rem;
      }
    }
  }
</style>