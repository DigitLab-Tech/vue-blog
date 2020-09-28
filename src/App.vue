<template>
  <div id="app">
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
  body{
    margin: 0;
    display: flex;
    justify-content: stretch;
    align-content: stretch;
    overflow-x: hidden;
    z-index: -1;
  }

  section{
    overflow-x: hidden;
  }

  #app{
    font-family: var(--main-font), Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
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
    color: var(--main-color);
  }

  #app h3{
    font-family: var(--main-font);
    font-weight: 400;
    font-size: 2rem;
    color: var(--main-color);
    margin: 0;
    line-height: 3rem;
  }

  body p{
    font-family: var(--main-font);
    font-weight: 400;
    color: var(--main-color);
    letter-spacing: 0.05rem;
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
  }

  .flex{
    display: flex;
  }
</style>
