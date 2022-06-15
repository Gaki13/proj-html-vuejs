<template>
    <div class="info-header ">
        <div class="container-st">
            <div class="row justify-content-between">
                <div class="col-6 d-flex align-items-center">
                    <p><font-awesome-icon icon="fa-solid fa-clock" /> Open Hours: Mon - Sat - 9:00 -18:00</p>
                </div>
                <div class="col-4 d-flex align-items-center justify-content-end justify-content-between">
                    <span><font-awesome-icon icon="fa-solid fa-phone" /> +1 (305) 1234-5678</span>
                    <span><font-awesome-icon icon="fa-solid fa-envelope" /> hello@example.com</span>
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                    <font-awesome-icon icon="fa-brands fa-linkedin" />
                </div>
            </div>
        </div>              
    </div>
</template>

<script>
export default {
    name: 'InfoHeader'
}
</script>

<style lang="scss" scoped>
    .info-header{
        height: 3.125rem;
        background-color: #21333e;
        color: #c0c3d0;
        .row{
            height: 3.125rem;
        }
    }
</style>