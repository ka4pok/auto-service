<template>
    <div>
        <div class="container1">
            <div class="content">
                <h1>Марки</h1>
                <p>Здесь представлены все марки автомобилей, <br>
                    которые мы обслуживаем</p>
            </div>
        </div>
        <CarouselBrands></CarouselBrands>
    </div>

</template>

<script>
    import CarouselBrands from "../components/CarouselBrands";
    export default {
        name: "Brands",
        components:{
            CarouselBrands
        }
    }
</script>

<style lang="scss" scoped>
    .container1 {
        width: 90%;
        margin: 0 auto;
        position: relative;

        h1{
            font-size: 5rem;
            position: absolute;
            top: 10vh;
            color:  black;
        }
        p{
            position: absolute;
            font-size: 20px;
            line-height: 40px;
            top: 25vh;
        }
    }
</style>
