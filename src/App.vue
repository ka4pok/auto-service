<template>
    <div id="app">
        <component :is="layout" >
            <router-view/>
        </component>
    </div>
</template>

<script>
    import BlackLayout from "./layouts/BlackLayout";
    import WhiteLayout from "./layouts/WhiteLayout";

    export default {
        data(){
            return{

            }
        },
        computed:{
          layout(){
              return (this.$route.meta.layout || 'black') + '-layout'
          },
        },
        methods:{
        },
        components: {
            WhiteLayout, BlackLayout
        },
    }
</script>

<style lang="scss">

    @font-face {
        font-family: 'Comfortaa-VariableFont_wght';

        src: local('Proxima Nova Extra Condensed Extrabold'), local('ProximaNovaExCn-Extrabld'),
        url('assets/Comfortaa-VariableFont_wght.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    * {
        font-family: "Comfortaa-VariableFont_wght", serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #app {


    }
    .mainBg{

    }

</style>
