<template>
    <div>


        <div class="home">

            <div class="header-btn">
                <router-link to="/" class="neon-btn">Акция</router-link>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div class="line"></div>
                <img src="../../public/img/req.ico.png" alt="">
            </div>
            <div class="content">
                <h1>Ремонт Ford в июле <br>
                    со скидкой 15%</h1>
                <div class="content-btn">
                    <router-link to="/">Записаться</router-link>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <img src="../../public/img/reqRed.png" alt="" class="reqRed">
                </div>

            </div>
        </div>
        <CarouselService/>
    </div>
</template>

<script>
    import CarouselService from "../components/CarouselService";

    export default {
        name: 'Home',
        components: {
            CarouselService
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        color: white;
        width: 90%;
        margin: 0 auto 50px;
    }

    .header-btn span {
        position: absolute;
        display: block;

        &:nth-child(2) {

            top: 0;
            left: -100%;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, transparent, #fff);
        }

        &:nth-child(4) {

            bottom: 0;
            right: -100%;
            width: 100%;
            height: 3px;
            background: linear-gradient(270deg, transparent, #fff);
        }

        &:nth-child(3) {
            top: -100%;
            right: 0;
            width: 3px;
            height: 100%;
            background: linear-gradient(180deg, transparent, #fff);
        }
        &:nth-child(5) {
            bottom:-100% ;
            left: 0;
            width: 3px;
            height: 100%;
            background: linear-gradient(360deg, transparent, #fff);
        }
    }

    .header-btn:hover span:nth-child(2) {
        left: 100%;
        transition: 1s;
    }

    .header-btn:hover span:nth-child(4) {
        right: 100%;
        transition: 1s;
        transition-delay: 0.5s;
    }
    .header-btn:hover span:nth-child(3) {
        top: 100%;
        transition: 1s;
        transition-delay: 0.25s;
    }
    .header-btn:hover span:nth-child(5) {
        bottom: 100%;
        transition: 1s;
        transition-delay: 0.75s;
    }


    .header-btn {
        cursor: pointer;
        width: 192px;
        margin-top: 3vh;
        margin-bottom: 3rem;
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;

        .neon-btn {
            position: relative;
            color: white;
            text-decoration: none;
            font-size: 22px;
            letter-spacing: 8px;
            transition: 0.2s;
            padding: 12px;

        }
        img{
            position: absolute;
            left: 0;
        }
        &:hover {
            background: #fff;
            box-shadow: 0 0 10px #fff, 0 0 40px #fff, 0 0 80px #fff;
            transition-delay: 1s;
            img{
                display: none;
            }
            .neon-btn {
                color:  black;
                transition-delay: 1s;
            }

            .line {
                background-color: black;
                transition-delay: 1s;
            }

        }
    }

    .content-btn span {
        position: absolute;
        display: block;

        &:nth-child(2) {

            top: 0;
            left: -100%;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, transparent, #e33d3d);
        }

        &:nth-child(4) {

            bottom: 0;
            right: -100%;
            width: 100%;
            height: 3px;
            background: linear-gradient(270deg, transparent, #e33d3d);
        }

        &:nth-child(3) {
            top: -100%;
            right: 0;
            width: 3px;
            height: 100%;
            background: linear-gradient(180deg, transparent, #e33d3d);
        }
        &:nth-child(5) {
            bottom:-100% ;
            left: 0;
            width: 3px;
            height: 100%;
            background: linear-gradient(360deg, transparent,#e33d3d);
        }
    }

    .content-btn:hover span:nth-child(2) {
        left: 100%;
        transition: 1s;
    }

    .content-btn:hover span:nth-child(4) {
        right: 100%;
        transition: 1s;
        transition-delay: 0.5s;
    }
    .content-btn:hover span:nth-child(3) {
        top: 100%;
        transition: 1s;
        transition-delay: 0.25s;
    }
    .content-btn:hover span:nth-child(5) {
        bottom: 100%;
        transition: 1s;
        transition-delay: 0.75s;
    }

    .line {
        position: absolute;
        width: 29px;
        height: 2px;
        background-color: white;
        right: 20px;
    }

    .shape {
        height: 2px;
        width: 29px;
        color: white;

        &:nth-child(1) {
            position: absolute;
            left: -17px;

        }

        &:nth-child(2) {
            background-color: white;
        }
    }

    .req {
        position: absolute;
        left: 0;
    }


    .content {
        h1 {
            color: white;
            font-size: 80px;
            margin-bottom: 30px;
        }

        .content-btn {
            cursor: pointer;
            width: 317px;
            position: relative;
            font-size: 22px;
            letter-spacing: 10px;
            padding: 20px;
            transition: 0.2s;
            overflow: hidden;
            a {
                color: #e33d3d;
                text-decoration: none;
            }

            &:hover {
                background: #e33d3d;
                box-shadow: 0 0 10px #e33d3d, 0 0 40px #e33d3d, 0 0 80px #e33d3d;
                transition-delay: 1s;
                img{
                    display: none;
                }
                a {
                    color: white;
                    transition-delay: 1s;
                }
            }
        }

        .reqRed {
            position: absolute;
            left: 0;
            top: 0;
        }
    }
</style>
