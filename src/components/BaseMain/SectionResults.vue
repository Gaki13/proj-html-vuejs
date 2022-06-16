<template>
  <div class="section">
    <div class="container-small d-flex flex-column justify-content-center">
      <!-- sezione del titolo -->
      <div class="row">
        <div class="col-12 text-center d-flex flex-column align-items-center">
          <p class="upper-title">what are we doing</p>
          <div class="section-title-dark">
            <h2 class="boxed-title-dark">Results</h2>
            <h2>in Numbers</h2>
          </div>
        </div>
      </div>
      <!-- corpo della sezione -->
      <div class="row">
        <div class="col-3">
          <h3>128</h3>
          <h4>Certifications</h4>
        </div>
        <div class="col-3">
          <h3>230</h3>
          <h4>Employees</h4>
        </div>
        <div class="col-3">
          <h3>517</h3>
          <h4>Customers</h4>
        </div>
        <div class="col-3">
          <h3>94</h3>
          <h4>Countries Served</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SectionResults'
}
</script>

<style lang="scss" scoped>
  .section{
    background-image: url(../../assets/img/bg-10.jpg);
    height: 50rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: center;
    .container-small{
      height: 100%;
      gap: 9.375rem;
      .col-3{
        text-align: center;
        h3{
          color: #00a6a6;
          font-size: 2.75rem;
        }
        h4{
          color: white;
          font-size: 2rem;
        }
      }
    }
   
  }
</style>