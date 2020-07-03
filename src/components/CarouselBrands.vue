<template>
    <div class="wrap">
        <div class="services">
            <slick ref="slider2" class="slider2" :options="slickOptions2">
                <div class="slider2__item"><img src="../../public/img/Chevrolet_Logo.png" alt="">
                    <div class="img-brand">
                        <img src="../../public/img/ford2.jpg" alt="" class="photo"></div>
                </div>
                <div class="slider2__item"><img src="../../public/img/Chrysler-logo.png" alt="">
                    <div class="img-brand"><img src="../../public/img/BMWasphalt.png" alt="" class="photo"></div>
                </div>
                <div class="slider2__item"><img src="../../public/img/AUT-FRD.png" alt="">
                    <div class="img-brand"><img src="../../public/img/ford2.jpg" alt="" class="photo"></div>
                </div>
                <div class="slider2__item"><img src="../../public/img/BMW2.png" alt="">
                    <div class="img-brand"><img src="../../public/img/BMWasphalt.png" alt="" class="photo"></div>
                </div>
                <div class="slider2__item"><img src="../../public/img/Kia_-_Logo.png" alt="">
                    <div class="img-brand"><img src="../../public/img/BMWasphalt.png" alt="" class="photo"></div>
                </div>
            </slick>
        </div>
    </div>
</template>

<script>
    import Slick from 'vue-slick';

    export default {
        name: "CarouselBrands",
        data() {
            return {
                slickOptions2: {
                    centerMode: true,
                    centerPadding: '60px',
                    slidesToShow: 4,
                    focusOnSelect: true,
                    infinite: false,
                    arrows: false,
                    variableWidth: false,
                    initialSlide: 3,
                    speed: 800,
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
                }
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
        mounted() {

        },

        components: {
            Slick
        }
    }
</script>

<style lang="scss">
    $height: 120px;
    .wrap {
        padding-top: 45vh;
        overflow-x: hidden;
        padding-bottom: 20vh;
    }

    .slider2 .slider2__item {

        text-align: center;
        display: flex !important;
        align-items: center;

        img {
            display: block;
            width: 170px;
            height: 70px;
            margin: 0 auto;
        }
    }

    .slider2 .slick-slide {
        position: relative;
        display: flex !important;
        align-items: center;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        cursor: pointer;

        height: $height;
        transition: all 0.3s ease 0s;
        border: 2px solid black;

        p {
            font-size: 25px;
        }
    }

    .slider2 .slick-slide.slick-current.slick-center {
        opacity: 1;
        height: $height+30px !important;
        margin-top: -20px;
        transition: all 0.6s ease 0s;

        .slider2__item {

            transition: all 0.6s ease 0s;

            .img-brand {
                z-index: 100;
                position: absolute;
                top: -410px;
                bottom: -140px;
                left: -4px;
                right: -4px;
                background-image: url("../../public/img/screen-ford.png");
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;

            }

            img {
                height: 100%;
                width: 100%;
                display: block;
            }

        }
    }

    .slider2 .slick-slide .slider2__item .photo {
        display: none;
    }

    .slider2 {
        position: relative;
        padding: 0 1%;

    }

    .slick-slide {
        div {
            margin: 0 auto;
        }
    }

    .slider2 .slick-arrow {
        position: absolute;
        z-index: 10;
        font-size: 0;
        border: none;
        cursor: pointer;
        outline: none;

        &.slick-disabled {
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

    .slider2 .slick-list {

    }

    .slider2 .slick-track {
        display: flex;
    }


</style>

