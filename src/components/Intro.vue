<template>
    <div class="intro-container">
        <div class="slogan-container">
            <div class="slogan-wrapper">
                <h1 v-html="section.getTextContent('slogan')"></h1>
                <div class="to-service-container">
                    <a class="cta-style-1" :href="section.getCta('intro - services').url" v-html="section.getCta('intro - services').label"></a>
                </div>
            </div>

        </div>
        <div class="banner-container">
            <div class="image-container" :style="imageContainerCss">

            </div>
        </div>

        <div class="image-footer-container">
            <div class="text-container">
                <div class="wrapper">
                    <h2 v-html="section.getTextContent('description image introduction')"></h2>
                    <div class="to-realisation-container">
                        <a :href="section.getCta('intro to realisation').url" v-html="section.getCta('intro to realisation').label"></a>
                    </div>
                </div>
            </div>

            <div class="svg-wrapper">
                <svg width="228" height="165" viewBox="0 0 228 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 0H125L25 165.5H0L100 0Z" fill="#262626"/>
                    <path d="M150 0H175L75 165.5H50L150 0Z" fill="#262626"/>
                    <path d="M203 0H228L128 165.5H103L203 0Z" fill="#262626"/>
                </svg>
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
           }
        }
    }
</script>

<style scoped>
    .intro-container{
        display: grid;
        grid-template-columns: 75px [slogan]400px  [image]1fr;
        width: 100%;
    }

    .slogan-container{
        display: flex;
        flex-direction: column;
        grid-column: slogan;
        align-self: stretch;
        justify-content: center;
        transform: translateX(125px);
        z-index: 10;
    }

    .slogan-wrapper{
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
    }

    .slogan-wrapper h1{
        font-size: 3rem;
    }

    .banner-container{
        display: flex;
        grid-column: image;
        flex-direction: column;
        align-items: flex-end;
    }

    .to-service-container{
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        transform: translateY(75px);
        transform: translateY(75px);
    }

    .to-realisation-container{
        display: flex;
        flex-direction: column;
    }

    .to-realisation-container a{
        font-weight: 300;
        font-size: 1.2rem;
        color:var(--bg-color);
    }

    .to-realisation-container:after{
        content:'';
        height:1px;
        width:15%;
        background-color: var(--bg-color);
        align-self: flex-end;
        transform: translate(5px,2px);
    }

    .image-container{
        width: 100%;
        height:calc(100vh - 160px);
        background-size: cover;
        background-position: center;
        position: relative;
        z-index: 5;
        display: flex;
        align-items: flex-end;
    }

    .image-footer-container{
        grid-column: image;
        height: 160px;
        background-color: var(--main-color);
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .text-container{
        color:var(--bg-color);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .text-container .wrapper{
        padding-left:4rem;
    }

    .svg-wrapper{
        padding-right: 1rem;

    }

    .image-container:after{
        content:'';
        background-color: rgba(0,0,0,0.25);
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
    }

    h2{
        font-family: var(--main-font);
        font-weight: 500;
        font-size: 1.2rem;
    }
</style>
