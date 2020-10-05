<template>
  <div :class="'menu-container ' + menuCssClass" >
    <nav class="main-menu">
      <div class="links-wrapper">
        <div class="link-container" v-for="link in menuData.links" :key="link.name">
          <a :href="link.url">{{link.label}}</a>
        </div>
      </div>
    </nav>
    <div class="menu-toggle"  v-on:click="isMenuActive = !isMenuActive">
      <div class="toggle-line"></div>
      <div class="toggle-line"></div>
      <div class="toggle-line"></div>
      <div class="toggle-line"></div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Menu',
  props:{
    menuData:Object
  },
  data(){
    return{
      isMenuActive : false,
    }
  },
  computed: {
    menuCssClass: function(){
      return this.isMenuActive ? 'active' : '';
    },
  }
}
</script>

<style scoped>
  .menu-container{
    padding: 1rem;
  }

  .menu-toggle{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color);
    border-radius: 50%;
    width:65px;
    height: 65px;
    cursor: pointer;
  }

  .links-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: calc(97px + 1rem);
    width: 100%;
  }

  .link-container{
    padding: 0.5rem;
  }

  .toggle-line{
    background-color: var(--main-color);
    height:3px;
    width:36px;
    margin: 2px 0;
    transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
    opacity 0.55s ease;
  }

  .menu-container.active .toggle-line:nth-child(2){
    opacity:1;
    width:25px;
    transform: rotate(45deg);
  }

  .menu-container.active .toggle-line:nth-last-child(2){
    opacity:1;
    width:25px;
    transform: rotate(-45deg);
  }

  .menu-container.active .toggle-line{
    opacity: 0;
    margin-top: -2px;
    margin-bottom: -1px;
  }



  .main-menu{
    position: absolute;
    height:0px;
    width: 100%;
    top:0;
    left:0;
    background-color: var(--secondary-color);
    transform: translateY(-180px);
    z-index: -1;
    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-container.active .main-menu{
    transform: translateY(0);
    height:180px;
  }

  a{
    color:var(--main-color);
    text-transform: none;
    text-decoration: none;
    font-family: var(--main-font);
    font-weight: 600;
  }

  @media (max-width: 991px){
    .main-menu{
      height:100%;
      width: 200px;
      top:0;
      left: unset;
      right:0;
      transform: translateX(200px);
    }

    .menu-container.active .main-menu{
      height: 100vh;

    }

    .links-wrapper{
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: calc(180px + 1rem);
      width: 100%;
      height: 100%;
    }
  }
</style>
