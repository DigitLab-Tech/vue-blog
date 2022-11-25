<template>
    <header class="row between vcenter" data-aos="fade-down">
        <div class="logo-container row center vcenter" >
            <div class="row center vcenter">
                <img :src="logo.path" draggable="false"/>
            </div>
        </div>
        <Menu :menu-data="menuData" />
    </header>
</template>

<script>

    import Menu from "./Menu";
    export default {
        name: 'Header',
        components: {Menu},
        props:{
            headerData:Object
        },
        data(){
          return {
              logo: {path : '/' + this.headerData.logo.file.fileName},
              menuData: this.headerData.menu
          }
        },
        mounted() {
            console.log(this.headerData.logo.description);
        }
    }
</script>

<style scoped>
    header{
        position: fixed;
        top:0;
        right:0;
        width: 100%;
        z-index: 100;
    }

    span{
        font-weight: 900;
        font-size: 0.8rem;
    }

    .logo-container{
        width: 220px;
        height: 180px;
        background-color: var(--bg-color);
    }

    .logo-container img{
        max-width: 95%;
    }

    @media (max-width: 991px){
        span{
            font-size: 0.6rem;
            line-height: 0.7rem;
        }

        .logo-container{
            width: 120px;
            height: 120px;
        }
    }
</style>
