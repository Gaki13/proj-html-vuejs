<template>
  <div class="section">
    <div class="container-st ">
        <div class="row">
            <!-- Parte con titolo e testo -->
            <div class="col-9">
                <p class="upper-title">who we are</p>
               <!-- titolo della sezione -->
                <div class="section-title">
                    <h2 class="boxed-title"><font-awesome-icon icon="fa-regular fa-gem" />Excellence </h2>
                     <h2>in Transport</h2> 
                </div>
                <!-- corpo della sezione -->
                <div class="section-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at aliquam distinctio amet voluptate maiores nostrum dignissimos tenetur! Eos eligendi ducimus porro facere architecto debitis maiores nihil fuga earum perferendis.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptate voluptas. Distinctio deleniti laborum necessitatibus atque? Exercitationem sed, delectus, a obcaecati libero labore dolorem praesentium ipsa quidem impedit iste nisi?</p>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam amet alias veritatis sunt repudiandae, minus atque exercitationem incidunt vel excepturi id esse deserunt quaerat quisquam iusto suscipit natus quod.</p>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, maiores fuga? </p>
                    <ul>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                        <li> Dolore qui, doloribus ab, voluptate possimus ipsa </li>
                        <li>Perferendis quas praesentium exercitationem deserunt</li>
                        <li>Error corrupti fugiat pariatur eum numquam dolorem</li>
                        <li> Consectetur harum, adipisci velit quaerat ullam ea </li>
                    </ul>
                </div>
                
            </div>
            <!-- Parte con elenco dei camion -->
            <div class="col-3 d-flex flex-column">
                <h5>Vehicles Types</h5>
                <div class="vehicle-card mt-3">
                    <img src="../../assets/img/truck-1.png" alt="Foto camion">
                    <div>
                        <h6>Light</h6>
                        <p>Max weight 1200kg</p>
                    </div>
                </div>
                <div class="vehicle-card card-middle">
                    <img src="../../assets/img/truck-1.png" alt="Foto camion">
                    <div>
                        <h6>Medium</h6>
                        <p>Max weight 6000kg</p>
                    </div>
                </div>
                <div class="vehicle-card mb-4">
                    <img src="../../assets/img/truck-1.png" alt="Foto camion">
                    <div>
                        <h6>Heavy</h6>
                        <p>Max weight 24000kg</p>
                    </div>
                </div>
                <h5>Certifications</h5>
                <div class="certificed d-flex justify-content-between">
                    <img src="../../assets/img/certificate.png" alt="certificato di eccellenza">
                    <img src="../../assets/img/certificate.png" alt="certificato di eccellenza">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'SectionTransport'
}
</script>

<style lang="scss" scoped>
   .container-st{
    margin-top: 8.125rem;
    margin-bottom: 10rem;
   }
   
   // style del corpo
    .section-body{
        color: #656d75; 
        font-size: 16px;
        div{
            border-left: 3px solid #daeced;
            padding: .5rem 1rem;
            font-style: italic;
            margin: 1rem 0;
        }
        ul{
            padding-left: 16px ;
            li{
                margin: .5rem 0;
            }
        }
    }
    // style dell'aside
    .vehicle-card{   
        display: flex;
        gap: .625rem;
        padding: .625rem 0;
        color: #656d75;
        h6{
            font-size: 1.25rem;
            color: #21333e;
        }
        img{
            width: 35%;
            background-color: #daeced;
            padding: .3125rem;
            border-radius: .1875rem;
            box-shadow: 5px 5px  3px #f5f5f5;
        }
    }
    .card-middle{
        border-bottom: 1px solid #bfbfbf;
        border-top: 1px solid #bfbfbf ;
    }
    .certificed{
        img{
            width: 43%;
            box-shadow: 5px 5px  3px #f5f5f5;
        }
    }
</style>