<template>
  <div id="app" :style="cssProps">
    <Header :menu-data="headerData" />
    test
  </div>
</template>

<script>
  import ThemeDataCenter from 'App/ThemeDataCenter';
  import Header from "./components/Header";

  export default {
    name: 'App',
    components: {
      Header
    },

    computed:{
      cssProps(){
        return{
          '--bg-color': this.configs.bg_color,
          '--main-color': this.configs.main_color,
          '--second-color' : this.configs.second_color
        }
      }
    },

    data(){
      return{
        configs : ThemeDataCenter.getConfig(),
        headerData: ThemeDataCenter.get('header')
      }
    },

    created(){
      console.log(this.configs.bg_color);
    }
  }
</script>

<!--suppress CssUnresolvedCustomProperty -->
<style>
  body{
    background-color: var(--bg-color);
    margin: 0;
    display: flex;
    justify-content: stretch;
    align-content: stretch;
    min-height:100vh;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--main-color);
    background-color: var(--bg-color);
  }
</style>
