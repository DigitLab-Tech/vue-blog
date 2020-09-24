<template>
    <div class="services-container">
        <div class="left-column">

        </div>
        <div class="right-column">
            <div class="title-container">
                <h1>{{data.title}}</h1>
            </div>
            <div class="image-container">

            </div>
        </div>
        <p>{{servicesData}}</p>
    </div>

</template>

<script>

    export default {
        name: 'Services',
        props:{
            servicesData:Object
        },
        data(){
            return{
                data: this.servicesData
            }
        }
    }
</script>

<style scoped>
    .services-container{
        display: flex;
        justify-content: space-between;

    }
</style>
