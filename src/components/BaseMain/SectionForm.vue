<template>
  <div class="section">
    <div class="container-st">
      <div class="row">
        <!-- sezione del form -->
        <div class="col-8">
          <!-- titolo della sezione -->
          <p class="upper-title">Send a message</p>
          <div class="section-title">
            <h2>Get in</h2>
            <h2 class="boxed-title">Touch</h2>
          </div>
          <p class="mt-3 lower-title">We will respond to your message as soon as posible</p>
          <!-- form vero e proprio -->
          <form  class="mt-5">
            <!-- prima riga del form -->
            <div class="row">
              <div class="col">
                <input type="text" class="form-control form-style" placeholder="First name" aria-label="First name">
              </div>
              <div class="col">
                <input type="text" class="form-control form-style" placeholder="Email" aria-label="Email">
              </div>
            </div>
            <!-- seconda riga del form -->
            <div class="row  my-3">
              <div class="col">
                <input type="text" class="form-control form-style" placeholder="Phone" aria-label="Phone">
              </div>
              <div class="col">
                <select class="form-select form-style" placeholder="More info" aria-label="More info">
                  <option selected>More info</option>
                  <option value="1">Info example</option>
                  <option value="2">Info example</option>
                  <option value="3">Info example</option>
              </select>
              </div>
            </div>
            <!-- textare del form -->
            <div class="row">
              <div class="col">
                <textarea class="form-control form-style" placeholder="Message" cols="30" rows="7"></textarea>
              </div>
            </div>
            <button class="primary-button mt-4">SEND</button>
          </form>
        </div>
        <!-- sezione aside con le info -->
        <div class="col-4 d-flex flex-column">
          <h5>Example Inc.</h5>
          <p class="lower-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <p class="lower-title"> Modi suscipit tempora harum, explicabo porro molestias eos.</p>
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
          <div>
            <button class="tertiary-button mt-5">VIEW MAP</button>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SectionForm'
}
</script>

<style lang="scss" scoped>
  .container-st{
    padding: 8.125rem 0 9.375rem;

    .col-8{
      padding-right: 3.25rem;
    }

    .boxed-title{
      margin-left: .4375rem;
    }
    
    form{
      input, select{
        height: 45px;
      }
      .form-style{
        background-color: #ececec;
        border: none;
        color: #6c757d;
      }
    }

    h5{
      font-size: 1.8125rem;
      font-weight: bolder;
      margin-bottom: 1.8125rem;
    }

    .contact{
      color: #208283;
      font-size: 1.35rem;
      margin: .875rem 0;
      span{
        background-color: #daeced;
        padding: .375rem .625rem;
        border-radius: 50%;
      }
    }
  }
</style>