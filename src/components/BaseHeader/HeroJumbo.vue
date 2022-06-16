<template>
    <div class="hero">
        <div class="container-st d-flex align-items-center">
            <div class="row">
                <div class="col-8">
                    <p class="upper-title">logistics services</p>
                    <h1>CARGO TRANSPORT</h1>
                    <p class="my-4">Fractional or exclusive road cargo trasportation to all regions, eith small, medium and large vehicles.</p>
                    <button class="primary-button">GET IN TOUCH</button>
                    <button class="secondary-button">READ MORE</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeroJumbo'
}
</script>

<style lang="scss" scoped>
    .hero{
        height: calc(100% - 93px);
        .container-st{
            height: 100%;
            color: white;
            button{
                margin-right: 2.1875rem;
            }
            p{
                font: 1.125rem;
            }
        }
    }

    h1{
        font-size: 90px;
        font-weight: bolder;
    }
</style>