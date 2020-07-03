<template>
    <div class="cart">
        <h1>Корзина: </h1>
        <router-link tag="button" to='/services' class="back">Назад к услугам</router-link>
        <div class="cart-group" v-if="CART.length">
            <div class="cart-item__info" v-for="(item, index) in CART" :key="item.id">
                <p>{{item.name}}</p>
                <p>{{item.price}} Р</p>
                <p>Id:{{item.id}}</p>
                <button class="delete" @click="deleteFromCart(index)">Delete</button>
            </div>
        </div>
        <p v-else style="margin-top: 20px">Здесь пока ничего нет. Попробуйте что-то <router-link to="/services">добавить.</router-link></p>

        <button class="back" v-if="CART.length" @click="addToFb">Оформить заказ</button>
        <div class="total" :key="cartTotalPrice"> Сумма заказа: {{price}} Р</div>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        name: "Cart",
        data(){
            return{
                price: 0
            }
        },
        components:{

        },
        computed:{
            ...mapGetters([
                'CART'
            ]),
            cartTotalPrice(){
                let result=0

                for(let item of this.CART){
                    result += item.price;
                }

                console.log(this.price)
                return this.price = result
            }

        },
        methods:{
            ...mapActions(['DELETE_FROM_CART']),
            deleteFromCart(index){
                this.DELETE_FROM_CART(index)
            },
            async addToFb(){

                try {
                    await this.$store.dispatch('createCart',{
                        price: this.price
                    })
                    this.$router.push('/')
                }
                catch (e) {

                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    .cart{

        width: 70%;
        margin: 50px auto;
    }
    h1{
        color: black;

    }
    .cart-item__info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        padding: 30px;
        border: 1px solid black;
        margin-top: 20px;
    }
    .delete{
        padding: 10px;
        border: none;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.42);
        cursor: pointer;
        &:hover{
            background-color: #999999;
        }
    }
    .back{
        margin-top: 20px;
        padding: 10px;
        cursor: pointer;
        background-color: #d8d8d8;
        border: none;
        &:hover{
            background-color: #999999;
        }
        &:nth-child(4){
            padding: 30px;
            font-size: 22px;
            text-align: center;
            display: block;
            margin: 20px auto;
        }
    }
</style>
