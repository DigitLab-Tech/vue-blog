<template>
    <header>
        <div class="logo-container" >
            <div class="logo-wrapper">
                <img :src="logo.path" />
                <div class="div logo-desc">
                    <span v-html="logo.desc"></span>
                </div>
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
              logo: {path : '/' + this.headerData.logo.file.fileName, desc : this.headerData.logo.description.replace(/(\r\n|\n|\r|\s)/gm, ' <br/> ')},
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
        display: flex;
        align-items: center;
        justify-content: space-between;
        width:100%;
        z-index: 100;
    }
    .logo-container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 180px;
        height: 180px;
        font-family: var(--main-font);
        font-weight: 900;
        font-size: 0.8rem;
        background-color: var(--bg-color);
    }

    .logo-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo-container img{
        max-width: 80px;
    }

    .logo-desc{
        transform: translateX(-3px);
    }
</style>
