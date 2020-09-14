<template>
  <div id="app" :style="cssProps" >
<Header :menu-data="header" />
  </div>
</template>

<script>
  import ThemeDataCenter from 'App/ThemeDataCenter';
  import Config from 'App/model/Config';
  import Header from "./components/Header";

  export default {
    name: 'App',
    components: {
      Header

    },

    computed:{
      cssProps(){
        return{
          '--bg-color': this.config.get('bgColor'),
          '--main-color': this.config.get('mainColor'),
          '--second-color' : this.config.get('secondColor'),
        }
      }
    },

    data(){
      return{
        config: new Config(ThemeDataCenter.getConfig()),
        header: ThemeDataCenter.get('header')
      }
    },

    created(){
      console.log(this.config);
      console.log(this.header);
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
    width:100vw;
    overflow-x: hidden;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--main-color);
    background-color: var(--bg-color);
    width: 100%;
  }
</style>
