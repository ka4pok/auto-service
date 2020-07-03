<template>
    <div class="container">
        <div class="services">
            <slick ref="slider" class="slider" :options="slickOptions">
                <div class="slider__item"><img src="../../public/img/sym-motor.png" alt=""><p>Заправка и ремонт кондиционеров</p></div>
                <div class="slider__item"><img src="../../public/img/jerrycan.png" alt=""><p>Замена масла</p></div>
                <div class="slider__item"><img src="../../public/img/steering-wheel.png" alt=""><p>Ремонт рулевого управления</p></div>
                <div class="slider__item"><img src="../../public/img/engines.png" alt=""><p>Замена и починка сцепления</p></div>
                <div class="slider__item"><img src="../../public/img/tire.png" alt=""><p> Замена шин</p></div>
                <div class="slider__item"><img src="../../public/img/spark-plug.png" alt=""><p>Провекра и замена свечей</p></div>
                <div class="slider__item"><img src="../../public/img/pistons.png" alt=""><p>Ремонт подвески</p></div>
            </slick>
        </div>
    </div>
</template>

<script>
    import Slick from 'vue-slick';
    export default {
        name: "CarouselService",
        data() {
            return {
                slickOptions: {
                    centerMode: true,
                    centerPadding: '60px',
                    slidesToShow: 3,
                    focusOnSelect: true,
                    infinite: false,
                    variableWidth:false,
                    initialSlide: 1,
                    speed:800,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: false,
                                centerMode: true,
                                centerPadding: '40px',
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: false,
                                centerMode: true,
                                centerPadding: '40px',
                                slidesToShow: 1
                            }
                        }
                    ]
                },
            };
        },
        methods: {
            next() {
                this.$refs.slick.next();
            },

            prev() {
                this.$refs.slick.prev();
            },

            reInit() {
                // Helpful if you have to deal with v-for to update dynamic lists
                this.$nextTick(() => {
                    this.$refs.slick.reSlick();
                });
            },

        },

        components: {
            Slick
        }
    }
</script>

<style lang="scss">
    $height: 120px;
    .container {
        padding-top: 6vh;
        overflow: hidden;

    }
    .slider__item {
        text-align: center;
        display: flex !important;
        align-items: center;
        justify-content: space-around;
        padding: 0 25px;
        img{
            display: block;
            width: 50px;
            height: 60px;
            margin-left: 15px;
        }
        p{
            margin-left: 45px;
            display: block;
        }
    }
    .slick-slide{
        display: flex !important;
        align-items: center;
        color: white;
        text-align: center;
        border: 1px solid white;
        box-sizing: border-box;
        outline: none;
        cursor: pointer;
        opacity: 0.5;
        height: $height;
        transition: all 0.3s ease 0s;
        p {
            font-size: 25px;
        }
    }
    .slick-slide.slick-current.slick-center{
        opacity: 1 ;
        height: $height+30px !important;
        margin-top: -20px;
        transition: all 0.6s ease 0s;
        .slider__item{
            transition: all 0.6s ease 0s;
            img{


            }
            p{

            }
        }
    }
    .slider {
        position: relative;
        padding: 0 1%;
    }

    .slider .slick-arrow {
        position: absolute;
        z-index: 10;
        font-size: 0;
        border: none;
        cursor: pointer;
        outline: none;
        &.slick-disabled{
            opacity: .5;
        }
        &.slick-prev {
            background: url("../../public/img/Группа1.png") 0 0 / 100% no-repeat;
            top: -5vh;
            left: 5%;
            height: 25px;
            width: 25px;
            transform: rotateY(180grad);
        }

        &.slick-next {
            background: url("../../public/img/Группа1.png") 0 0 / 100% no-repeat;
            top: -5vh;
            left: 9%;
            height: 25px;
            width: 25px;
        }

    }

    .slick-list {

    }

    .slick-track {
        display: flex;
    }

</style>

