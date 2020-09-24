<template>
  <div id="app">
    <Header :header-data="headerData" />
    <section v-for="section in sectionsData" :key="section.id" :id="section.name">
      <template v-if="section.name === 'Intro'">
        <Intro :intro-data="section" />
      </template>
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
  import Intro from "./components/Intro";

  export default {
    name: 'App',
    components: {
      Contact,
      Services,
      About,
      Header,
      Footer,
      Intro
    },

    data(){
      return{
        headerData: ThemeDataCenter.get('header'),
        footerData: ThemeDataCenter.get('footer'),
        sectionsData: ThemeDataCenter.get('sections')
      }
    },

    created(){

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

  #app{
    font-family: var(--main-font), Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--main-color);
    background-color: var(--bg-color);
    width: 100%;
    min-height: 1200px;
    display: grid;
    grid-template-columns: 1fr;
    gap:10rem;
  }

  #app h1{
    font-family: var(--main-font);
    font-weight: 900;
    font-size: 3rem;
  }

  section{
    overflow: hidden;
  }

  a{
    font-family: var(--main-font);
    text-decoration: none;
  }

  a.cta-style-1:after{
    content:'';
    height:18px;
    border: 1px solid var(--main-color);
    margin-top: 4px;
    display: block;
  }

  a.cta-style-1{
    font-weight: 100;
    font-size: 1rem;
    color:var(--main-color);
    text-transform: uppercase;
    display: inline-grid;
    text-align: left;
  }

  .flex{
    display: flex;
  }
</style>
