<template>
  <nav class="menu">
    <h1>{{menuData}}</h1>
  </nav>
</template>

<script>

export default {
  name: 'Menu',
  props:{
    menuData:Object
  }
}
</script>

<style scoped>
</style>
