<template>
    <div class="intro-container grid">
        <div class="left-container row stretch vstretch">
            <div class="flower-container" :style="flowerContainerCss"></div>
            <div class="column start vcenter">
                <h1 v-html="section.getTextContent('slogan')" data-aos="fade-down-right" data-aos-delay="175"></h1>
                <div class="to-service-wrapper" data-aos="fade-up" data-aos-delay="300">
                    <a class="cta-style-1" :href="section.getCta('intro - services').url" v-html="section.getCta('intro - services').label"></a>
                </div>
            </div>
        </div>
        <div class="right-container column stretch">
            <div class="image-container" :style="imageContainerCss" data-aos="fade-up-left"></div>
            <div class="content-container row stretch" data-aos="zoom-in-up" data-aos-anchor=".intro-container">
                <div class="column start vcenter grow">
                    <h2 class="bg-color" v-html="section.getTextContent('description image introduction')"></h2>
                    <a class="cta-style-2" :href="section.getCta('intro to realisation').url" v-html="section.getCta('intro to realisation').label"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Intro',
        props:{
            sectionClass:Object
        },
        data(){
          return{
              section: this.sectionClass,
          }
        },
        computed: {
           imageContainerCss: function(){
                return 'background-image: url("'+ this.section.getImageData('intro').url +'")';
           },

           flowerContainerCss: function(){
                return 'background-image: url("'+ this.section.getImageData('flower').url +'")';
           }
        }
    }
</script>

<style scoped>
    h1{
        font-size: 3rem;
    }

    .intro-container{
        grid-template-columns: 75px [left]400px  [right]1fr;
    }

    .left-container{
        grid-column: left;
        align-self: stretch;
        justify-content: center;
        transform: translateX(145px);
    }

    .right-container{
        grid-column: right;
        justify-content: stretch;
        align-items: stretch;
    }

    .content-container{
        height:160px;
        padding-left: 3rem;
        background-color: var(--main-color);
    }

    .to-service-wrapper{
        padding:6rem 0;
    }

    .svg-wrapper{
        padding-right: 1rem;
    }

    .image-container{
        height:calc(100vh - 160px);
        background-size: cover;
        background-position: center;
        z-index: -1;
    }

    .image-container:after{
        content:'';
        display: flex;
        background-color: rgba(0,0,0,0.25);
        width: 100%;
        height: 100%;
    }

    .flower-container{
        height:100vh;
        background-size: cover;
        background-position: center;
        z-index: -1;
        width: 120%;
        position: absolute;
        left:-220px;
    }

    h2{
        font-family: var(--main-font);
        font-weight: 500;
        font-size: 1.2rem;
    }

    @media (max-width: 576px){
        h1{
            font-size: 2.5rem;
        }
        .left-container{
            transform: translateX(1rem);
            justify-self: start;
        }
        .content-container{
            padding-left: 1rem;
        }
        .svg-wrapper{
            padding-right: 0rem;
        }
    }

    @media (max-width: 991px){
        .intro-container{
            grid-template-columns: [left right]1fr;
        }
        .cta-style-1{
            display: none;
        }
        .left-container,
        .right-container{
            grid-row: 1/2;
        }
    }
</style>
