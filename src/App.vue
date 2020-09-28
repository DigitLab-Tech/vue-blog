<template>
  <div id="app" class="grid column-1">
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
        sections: this.initSections()
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
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    overflow-x: hidden;
    text-align: left;
  }

  section{
    overflow: hidden;
  }

  img {
    user-select: none;
  }


  h1{
    font-family: var(--main-font);
    font-weight: 900;
    font-size: 3rem;
    color: var(--main-color);
  }

  h3{
    font-family: var(--main-font);
    font-weight: 400;
    font-size: 2rem;
    color: var(--main-color);
    margin: 0;
    line-height: 3rem;
  }

  p{
    font-family: var(--main-font);
    font-weight: 400;
    color: var(--main-color);
    letter-spacing: 0.05rem;
  }

  a{
    font-family: var(--main-font);
    text-decoration: none;
  }

  #app{
    gap:10rem;
    font-family: var(--main-font), Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--main-color);
    background-color: var(--bg-color);
    width: 100%;
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
  }

  @media (max-width: 576px){

  }

  @media (max-width: 991px){

  }

  @media (min-width: 1280px){

  }
</style>
