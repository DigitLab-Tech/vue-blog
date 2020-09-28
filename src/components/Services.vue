<template>
    <div class="services-container">
        <div class="left-column">
            <div class="column-wrapper">
                <div class="services-wrapper">
                    <div class="left-column">
                        <div class="service-wrapper">
                            <h3 v-for="service in servicesLeft" :key="service.name">{{service.name}}</h3>
                        </div>
                    </div>
                    <div class="right-column">
                        <div class="service-wrapper">
                            <h3 v-for="service in servicesRight" :key="service.name">{{service.name}}</h3>
                        </div>
                    </div>
                </div>
                <div class="to-contact-cta">
                    <a class="cta-style-1" :href="toContactCta.url" >{{toContactCta.label}}</a>
                </div>
            </div>
        </div>
        <div class="right-column">
            <div class="title-container">
                <div class="title-wrapper">
                    <h1>{{data.title}}</h1>
                </div>
            </div>
            <div class="image-container">
                <img :src="imageUrl" />
            </div>
        </div>
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
        },
        computed:{
            imageUrl: function(){
                return this.data.images.find((element) => {
                    return element.title.toLowerCase() === 'cuisine';
                }).file.url;
            },

            servicesLeft: function(){
                return this.data.contents.slice(0, this.data.contents.length / 2)
            },

            servicesRight: function(){
                return this.data.contents.slice(this.data.contents.length / 2)
            },

            toContactCta: function() {
                return this.data.ctas.find((element) => {
                    return element.name.toLowerCase() === 'service - contact';
                });
            },
        }
    }
</script>

<style scoped>
    .services-container{
        display: flex;
        justify-content: space-between;
    }

    .services-container > .left-column,
    .services-container > .right-column{
        display: flex;
    }

    .services-container > .left-column{
        flex-grow: 1;
        justify-content: center;
    }

    .column-wrapper{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .services-container > .right-column{
        flex-direction: column;
        justify-content: flex-end;
    }



    .title-container{
        background-color: var(--main-color);
        padding: 1.5rem 0rem;
        display: flex;
        overflow: visible;
        transform: translateX(-5rem);
        z-index: 20;
    }

    .title-wrapper{
        background-color: var(--secondary-color);
        width: 100%;
        z-index: 10;
        padding: 2rem 4rem 2rem 13rem;
        transform: translate(-20%, 60px);
    }

    .title-container:before{
        content: "";
        position: absolute;
        width: 100%;
        height: 150%;
        top:-100px;
        left: 15%;
    }

    .image-container{
        display: flex;
        justify-content: flex-end;
        transform: translateY(-30%);
    }

    .services-wrapper{
        display: flex;
        align-items: flex-end;
    }

    .services-wrapper .left-column{
        padding-right: 1rem;
    }

    .services-wrapper .right-column{
        padding-left: 1rem;
    }

    .services-wrapper .left-column,
    .services-wrapper .right-column{
        display: flex;
    }

    .services-wrapper .left-column:before,
    .services-wrapper .right-column:before{
        content: '';
        width: 10px;
        border: 1px solid var(--main-color);
    }

    .service-wrapper{
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
    }

    .to-contact-cta{
        position: relative;
        display: flex;
        padding: 11rem 0 3rem 0;
    }

    .to-contact-cta a{
        z-index: 20;
    }

    .to-contact-cta:before{
        content: '';
        background-color: var(--secondary-color);
        position: absolute;
        padding: 11rem 0 3rem 0;
        top:3rem;
        left:-100vw;
        width: 200vw;
    }
</style>
