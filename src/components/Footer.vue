<template>
    <header>
        <h1>{{menuData}}</h1>
    </header>
</template>

<script>

    export default {
        name: 'Header',
        props:{
            logo:Object,
            menuData:Object
        }
    }
</script>

<style scoped>
</style>
