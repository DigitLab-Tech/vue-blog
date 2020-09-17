<template>
    <header>
        <div class="logo-container" >
            <img :src="logo.path" />
            <span>{{logo.desc}}</span>
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
              logo: {path : '/theme/assets/' + this.headerData.logo.file.fileName, desc : this.headerData.logo.description},
              menuData: this.headerData.menu
          }
        },
        mounted() {
            console.log(this.headerData.logo.description);
        }
    }
</script>

<style scoped>
</style>
