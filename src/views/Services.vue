<template>
    <div class="services">
        <div class="group-header">
            <h1>
                Пришло время что-то менять?
            </h1>
            <router-link tag="div" to="/cart" class="cart"><img src="../../public/img/images.png" alt=""></router-link>
        </div>
        <div class="services-list">
            <div class="services-list__item shadow" v-for="item of servicesList" :key="item.id">
                <div class="item-header">{{item.name}}</div>
                <div class="item-price">{{item.price}} Р</div>
                <div class="buyBtn" @click="addToCart(item)">Заказать</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "services",
        data(){
            return{
                servicesList:[
                    {
                        id:1,
                        name: "Автомойка",
                        price: 1000
                    },
                    {
                        id:2,
                        name: "Диагностика",
                        price: 1500
                    },
                    {
                        id:3,
                        name: "Замена моторного масла",
                        price: 3000
                    },
                    {
                        id:4,
                        name: "Замена технических жидкостей",
                        price: 3500
                    },
                    {
                        id:5,
                        name: "Кузовные работы",
                        price: 2000
                    },
                    {
                        id:6,
                        name: "Обслуживание и ремонт",
                        price: 2600
                    },
                    {
                        id:7,
                        name: "Покраска",
                        price: 3400
                    },
                    {
                        id:8,
                        name: "Ремонт выхлопной системы",
                        price: 6000
                    },
                    {
                        id:9,
                        name: "Обсулживание и ремонт тормозной системы",
                        price: 800
                    },

                ]
            }
        },
        methods:{
            ...mapActions(['ADD_TO_CART']),
            addToCart(item){
               this.ADD_TO_CART(item)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .services{
        width: 90%;
        margin: 0 auto;
        color: black;

    }
    .group-header{
        width: 90%;
        margin: 0 auto;
        display: flex;
    justify-content: space-between;
    }
    .cart{
        width: 50px;
        cursor: pointer;
        height: 50px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .services-list{

        display: flex;
        justify-content: space-around;
        width: 100%;
        flex-wrap: wrap;
    }
    .services-list__item{

        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 10px;
        .item-header{
            font-size: 20px;
            width: 100%;
            text-align: center;

        }
        .item-price{
            font-size: 20px;
            width: 100%;
            text-align: center;

        }
        .buyBtn{
            text-align: center;
            width: 110px;
            margin: 0 auto;
            padding: 10px;
            color: #e33d3d;
            background-color: #e9e9e9;
            cursor: pointer;

            &:hover{
                color: #ca3636;
                background-color: #cbcbcb;
            }

        }
    }
    .shadow{
        margin-top: 50px;
        color: black;
        position: relative;
        width: 26%;
        height: 150px;
        background: linear-gradient(0deg, #fdfdfd, #ffffff);
        &:before{
            content: '';
            position: absolute;
            left: -1px;
            top: -1px;
            background: linear-gradient(45deg, #212121, #e33d3d, #ff2218, #000000, #ff0000,
                    #212121, #e33d3d, #ff2218, #000000, #ff0000);
            background-size: 400%;
            width: calc(100% + 1px);
            height: calc(100%  + 1px);
            z-index: -10;
            animation:  animate 20s linear infinite;
        }
        &:after{
            content: '';
            position: absolute;
            left: -1px;
            top: -1px;
            background: linear-gradient(45deg, #000000, #fb6600, #ff2218, #000000, #ff0000,
                    #000000, #e33d3d, #ff2218, #000000, #ff0000);
            background-size: 400%;
            width: calc(100% + 1px);
            height: calc(100%  + 1px);
            z-index: -10;
            animation:  animate 20s linear infinite;
            filter: blur(10px);
        }
    }

    @keyframes animate {
        0%{
            background-position: 0 0;
        }
        50%{
            background-position: 400% 0;
        }
        100%{
            background-position: 0 0;
        }

    }
</style>
