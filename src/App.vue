<template>
  <div id="app" :style="cssProps" >
    <Header :header-data="headerData" />
    <section v-for="section in sectionsData" :key="section.id">
      <template v-if="section.name === 'À propos'">
        <About :about-data="section" />
      </template>
      <template v-if="section.name === 'Services'">
        <Services :services-data="section" />
      </template>
      <template v-if="section.name === 'Contact'">
        <Contact :contact-data="section" />
      </template>
    </section>
    <Footer :footer-data="footerData" />
  </div>
</template>

<script>
  import ThemeDataCenter from 'App/ThemeDataCenter';
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  import About from "./components/About";
  import Services from "./components/Services";
  import Contact from "./components/Contact";

  export default {
    name: 'App',
    components: {
      Contact,
      Services,
      About,
      Header,
      Footer
    },

    computed:{
      cssProps(){
        return{
          '--bg-color': ThemeDataCenter.get('bgColor'),
          '--main-color': ThemeDataCenter.get('mainColor'),
          '--second-color' : ThemeDataCenter.get('secondaryColor'),
        }
      },
    },

    data(){
      return{
        headerData: ThemeDataCenter.get('header'),
        footerData: ThemeDataCenter.get('footer'),
        sectionsData: ThemeDataCenter.get('sections'),
        fontData: ThemeDataCenter.get('mainFont')
      }
    },

    created(){
      console.log(ThemeDataCenter.get('mainFont'));
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
    font-family: Montserrat-Regular, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--main-color);
    background-color: var(--bg-color);
    width: 100%;
  }
</style>
