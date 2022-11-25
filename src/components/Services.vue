<template>
    <div class="services-container grid">
        <div class="title-container row" data-aos="fade-down-right">
            <div class="title-wrapper">
                <h1>{{section.getTitle()}}</h1>
            </div>
        </div>
        <div class="left-column column center vcenter">
            <div class="services-wrapper grid" data-aos="zoom-in-up">
                <div class="service-wrapper" v-for="service in this.section.getContents()" :key="service.name">
                    <p >{{service.name}}</p>
                </div>
                <div class="to-contact-cta" data-aos="fade-right" data-aos-delay="100">
                    <a class="cta-style-1" :href="section.getCta('service - contact').url" >{{section.getCta('service - contact').label}}</a>
                </div>
            </div>
        </div>
        <div class="right-column">
            <div class="image-container" :style="imageContainerCss" data-aos="fade-left">
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Services',
        props:{
            sectionClass:Object
        },
        data(){
            return{
                section: this.sectionClass
            }
        },
        computed:{
            servicesLeft: function(){
                return this.section.getContents().slice(0, this.section.getContents().length / 2)
            },

            servicesRight: function(){
                return this.section.getContents().slice(this.section.getContents().length / 2)
            },

            imageContainerCss: function(){
                return 'background-image: url("'+ this.section.getImageData('cuisine').url +'")';
            }
        }
    }
</script>

<style scoped>
    .services-container{
        grid-template-columns: [left]2fr [right]1fr;
        gap: 1rem;
    }

    .title-container{
        grid-column: 1/3;
        justify-self: end;
        background-color: var(--main-color);
        padding: 1.5rem 0;
        overflow: visible;
        transform: translate(-5rem, 5rem);
        z-index: 20;
    }

    .title-container[data-aos^=fade][data-aos^=fade].aos-animate{
        transform: translate(-5rem, 5rem);
    }

    .title-wrapper{
        background-color: var(--secondary-color);
        width: 100%;
        z-index: 10;
        padding: 2rem 4rem 2rem 13rem;
        transform: translate(-20%, 60px);
    }

    .right-column{
        z-index: 10;
    }

    .image-container{
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        z-index: 10;
    }

    .services-wrapper{
        grid-template-columns: 1fr 1fr;
        padding: 8rem 0;
        justify-content: start;
    }

    .service-wrapper{
        display: flex;
        flex-direction: column;
        border-left: 6px solid var(--main-color);
        padding: 0 1rem 0 1rem;
        white-space: nowrap;
    }

    .to-contact-cta{
        position: relative;
        display: flex;
        padding: 15% 0 6% 0;
        grid-column: 1/3;
        margin-top: 3rem;
    }

    .to-contact-cta a{
        z-index: 20;
    }

    .to-contact-cta:before{
        content: '';
        background-color: var(--secondary-color);
        position: absolute;
        top:0;
        left:-100vw;
        width: 200vw;
        height: 100%;
    }

    @media (max-width: 576px){
        .title-container{
            transform: translate(0, 5rem);
        }

        .title-container[data-aos^=fade][data-aos^=fade].aos-animate{
            transform: translate(2rem, 5rem);
        }

        .services-container{
            gap: 0;
        }

        .service-wrapper{
            transform: translateY(1rem);
        }
    }

    @media (max-width: 991px){
        .services-wrapper{
            grid-template-columns: 1fr;
            padding: 8rem 1rem;
        }

        .service-wrapper{
            grid-column: 1/2;
            padding: 0.5rem 0 0.5rem 1rem;
        }
    }
</style>
