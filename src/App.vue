<template>
  <div id="app" :class="'grid ' + css" data-aos="fade" data-aos-id="app">
    <Header :header-data="headerData" />
    <section v-for="section in sections" :key="section.getId()" :id="section.getId()">
      <template v-if="section.getId() === 'intro'">
        <Intro :section-class="section" />
      </template>
      <template v-if="section.getId() === 'apropos'">
        <About :section-class="section" />
      </template>
      <template v-if="section.getId() === 'services'">
        <Services :section-class="section" />
      </template>
      <template v-if="section.getId() === 'contact'">
        <Contact :section-class="section" />
      </template>
    </section>
    <Footer :footer-data="footerData" />
  </div>
</template>

<script>
  import ThemeDataCenter from 'App/ThemeDataCenter';
  import Section from 'App/model/Section';
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
        sections: this.initSections(),
        loaded: false
      }
    },

    computed:{
      css: function () {
        return this.loaded ? 'loaded' : '';
      }
    },

    methods:{
      initSections(){
        let sections = [];
        let data = ThemeDataCenter.get('sections');

        data.forEach(section =>{
          sections.push(new Section(section));
        });

        return sections;
      }
    },

    created(){
      document.addEventListener('aos:in:app', () => {
        this.loaded = true;
      });
    }
  }
</script>

<!--suppress CssUnresolvedCustomProperty -->
<style>
  html {
    scroll-behavior: smooth;
  }

  body{
    margin: 0;
    overflow-x: hidden;
    text-align: left;
  }

  section{
    overflow: hidden;
  }

  img {
    user-select: none;
  }

  #app{
    gap:10rem;
    font-family: var(--main-font), Helvetica, Arial, sans-serif;
    color: var(--main-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    opacity: 0;
  }

  #app.loaded{
    opacity: 1;
  }

  a.cta-style-1{
    font-weight: 100;
    color:var(--main-color);
    text-transform: uppercase;
    display: inline-grid;
  }

  a.cta-style-1:after{
    content:'';
    height:18px;
    border: 1px solid var(--main-color);
    margin-top: 4px;
    display: block;
  }

  a.cta-style-2{
    position: relative;
    font-weight: 300;
    color:var(--bg-color);
  }

  a.cta-style-2:after{
    content:'';
    position: absolute;
    bottom: -0.2rem;
    right:-0.5rem;
    height:1px;
    width:15%;
    background-color: var(--bg-color);
  }


  .bg-color{
    color:var(--bg-color);
  }

  @media (max-width: 576px){
#app{
  gap:3rem;
}
  }

  @media (max-width: 991px){

  }

  @media (min-width: 1280px){

  }
</style>
