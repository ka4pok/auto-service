<template>
    <div class="hero">
        <div class="form-box">
            <div class="button-box">
                <div id="btn" ref="btn"></div>
                <button type="button" class="toggle-btn" @click="loginMove">Авторизация</button>
                <button type="button" class="toggle-btn" @click="registerMove">Регистрация</button>
            </div>
            <div class="social-icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-facebook-f"></i>
            </div>
            <form id="login" ref="login" class="input-group" @submit.prevent="submitHandler">
                <input type="email" v-model="email" class="input-field" placeholder="Введите Логин" required>
                <input type="password" v-model="password" class="input-field" placeholder="Введите пароль" required>
                <button type="submit" class="submit-btn">Войти</button>
            </form>
            <form id="register" ref="register" class="input-group" @submit.prevent="submitHandlerReg">
                <input type="email" v-model="emailR" class="input-field" placeholder="Введите Логин" required>
                <input type="text" v-model="nameR" class="input-field" placeholder="Введите имя" required>
                <input type="password" v-model="passwordR" class="input-field" placeholder="Введите пароль" required>
                <button type="submit" class="submit-btn">Зарегистрироваться</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                email: null,
                password: null,
                emailR: null,
                nameR: null,
                passwordR: null,

            }
        },
        methods: {
            async submitHandler() {


                const formData = {
                    email: this.email,
                    password: this.password
                }

                try {
                    await this.$store.dispatch('login', formData)
                    this.$router.push('/')
                } catch (e) {

                }

            },


            loginMove() {
                this.$refs.login.style.left = "150px";
                this.$refs.register.style.left = "780px";
                this.$refs.btn.style.left = "0px";

            },
            registerMove() {
                this.$refs.login.style.left = "-780px";
                this.$refs.register.style.left = "150px";
                this.$refs.btn.style.left = "190px";
            },

            async submitHandlerReg(){
                const formReg = {
                    emailR: this.emailR,
                    nameR: this.nameR,
                    passwordR: this.passwordR
                }
                console.log(formReg)
                try{
                    await this.$store.dispatch('register', formReg);
                    this.$router.push('/')
                }
                catch (e) {

                }

            }

    }
    }
</script>

<style lang="scss" scoped>
    .hero {
        height: 100%;
        width: 100%;
        font-size: 20px;

    }

    .form-box {
        border-radius: 20px;
        width: 620px;
        height: 580px;
        position: relative;
        margin: 20px auto;
        background: rgba(33, 33, 33, 0.49);
        padding: 5px;
        overflow: hidden;
        box-shadow: 0 0 20px 30px #ff61241f;

    }

    #btn {

        top: 0;
        left: 0;
        right: 0;
        position: absolute;
        width: 190px;
        height: 100%;
        background: linear-gradient(to right, rgba(33, 33, 33, 0.84), #ff773f);
        border-radius: 30px;
        transition: 0.5s;
    }

    .button-box {
        width: 330px;
        margin: 35px auto;
        position: relative;
        box-shadow: 0 0 20px 9px #ff61241f;
        border-radius: 30px;
    }

    .toggle-btn {
        color: white;
        padding: 10px 20px 10px 35px;
        cursor: pointer;
        background: transparent;
        border: 0;
        outline: none;
        position: relative;
    }

    .input-group {

        top: 180px;
        position: absolute;
        width: 280px;
        transition: 0.5s;
        left: 25%;
    }

    .input-field {
        color: white;
        width: 100%;
        padding: 10px;
        margin: 5px 0;
        border-left: 0;
        border-right: 0;
        border-top: 0;
        border-bottom: 1px solid #999;
        outline: none;
        background: transparent;

        &::placeholder {
            color: rgba(255, 251, 252, 0.46);
        }
    }

    .submit-btn {
        color: white;
        width: 85%;
        padding: 10px 30px;
        cursor: pointer;
        display: block;
        margin: 25px auto;
        background: linear-gradient(to right, #000000, rgba(17, 1, 75, 0.75));
        border: 0;
        outline: none;
        border-radius: 30px;
    }

    .check-box {
        margin: 30px 10px 30px 0;
    }

    span {

        color: white;
        font-size: 12px;
        bottom: 0;
        position: absolute;
    }

    #login {
        left: 25%;
    }

    #register {
        left: 780px;
    }
</style>
