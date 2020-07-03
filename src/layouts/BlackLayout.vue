<template>
    <div class="wrapper">
        <div id="nav">
            <div class="nav-left">
                <div class="brand-logo">
                    <img src="../../public/img/VegasAuto.png" alt="">
                </div>
                <div class="phone">
                    8 800 900 7070
                    <span>Звоните  бесплатно</span>
                </div>
            </div>

            <div class="nav-menu">
                <router-link :to="item.link"
                             v-for="item of navMenu"
                             active-class="active"
                             :exact="item.exact"

                >
                    {{item.name}}
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </router-link>
                <div class="user" @click="toggleExit">
                    {{name}}
                <div class="exit" ref="exitBtn" @click="logout">Выйти</div>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import messeges from "../utils/messeges";
    export default {
        name: "black-layout",
        props:["isActive"],
        data() {
            return {
                navMenu: [
                    {
                        name: "Услуги и цены",
                        link: '/services'
                    },
                    {
                        name: "Акции",
                        link: '/',
                        exact: true
                    },
                    {
                        name: "Марки и авто",
                        link: '/brands',

                    },
                    {
                        name:  "Авторизация",
                        link: '/register'
                    }
                ],
            }
        },
        methods:{
            toggleExit(){
                this.$refs.exitBtn.classList.toggle('exitDisplay');
            },
            async logout(){
               await this.$store.dispatch('logout')
                this.$router.push('/register')
            }
        },
        computed:{
            error(){
                return this.$store.getters.error
            },
            name(){
                return this.$store.getters.info.name
            }
        },
        watch:{
          error(fbError){
              console.log(fbError)
              console.log(messeges[fbError.code] || "Что-то пошло не так")
          }
        },
        async mounted() {
            if(!Object.keys(this.$store.getters.info).length){
                await this.$store.dispatch('fetchInfo')
            }

        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        background-image: url("../../public/img/bg1.png");
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
    }
    #nav {
        width: 90%;
        margin: 0 auto;
        align-items: center;
        display: flex;
        justify-content: space-between;
        height: 130px;

        a {
            overflow: hidden;
            position: relative;
            color: white;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 14px;
            padding: 16px;
            box-shadow: 0 20px 50px rgba(0,0,0,.5);
        }
        .active span:nth-child(1){
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
           background: linear-gradient(to right, #fffbfc,  #e33d3d);
            animation: animate1 2s linear infinite;
        }
        @keyframes animate1 {
            0%{
                transform: translateX(-100%);
            }
            100%{
                transform: translateX(100%);
            }
        }
        .active span:nth-child(2){
            position: absolute;
            top: 0;
            right: 0;
            width:2px;
            height: 100%;
            background: linear-gradient(to bottom, #fffbfc,  #e33d3d);
            animation: animate2 2s linear infinite;
        }
        @keyframes animate2 {
            0%{
                transform: translateY(-100%);
            }
            100%{
                transform: translateY(100%);
            }
        }
        .active span:nth-child(3){
            position: absolute;
            bottom: 0;
            left: 0;
            width:100%;
            height: 2px;
            background: linear-gradient(to left, #fffbfc,  #e33d3d);
            animation: animate3 2s linear infinite;
        }
        @keyframes animate3 {
            0%{
                transform: translateX(100%);
            }
            100%{
                transform: translateX(-100%);
            }
        }
        .active span:nth-child(4){
            position: absolute;
            bottom: 0;
            left: 0;
            width:2px;
            height: 100%;
            background: linear-gradient(to top, #fffbfc,  #e33d3d);
            animation: animate4 2s linear infinite;
        }
        @keyframes animate4 {
            0%{
                transform: translateY(100%);
            }
            100%{
                transform: translateY(-100%);
            }
        }
    }

    .nav-left {
        display: flex;
        align-items: center;
    }

    .brand-logo {
        height: 47px;
        width: 164px;
        margin-right: 20px;
    }

    .phone {
        color: #e33d3d;
        font-size: 22px;

        span {
            display: block;
            color: #ffffff;
            font-size: 12px;
        }
    }

    .nav-menu {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 55%;
    }

    .user{
        cursor: pointer;
        margin-left: 25px;
        color: white;
        text-decoration:underline ;
        position: relative;
    }
    .exit{
        display: none;
        border: 2px solid #e33d3d;
        background: rgba(227, 61, 61, 0.34);
        text-decoration:none;
        color: #e33d3d;
        position: absolute;
        bottom: -20px;
        left: 0;

        text-align: center;

    }
    .exitDisplay{
        display: block;
    }


</style>
