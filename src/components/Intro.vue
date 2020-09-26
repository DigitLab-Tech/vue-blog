<template>
    <div class="intro-container">
        <div class="slogan-container">
            <div class="slogan-wrapper">
                <h1>{{slogan}}</h1>
                <div class="to-service-container">
                    <a :href="toServicesCta.url" v-html="toServicesCta.label"></a>
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
                    <h2 v-html="imageDesc"></h2>
                    <div class="to-realisation-container">
                        <a :href="toRealisationCta.url" v-html="toRealisationCta.label"></a>
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
            introData:Object
        },
        data(){
          return{
              data: this.introData,
          }
        },
        computed: {
            slogan: function () {
                return this.data.textContents.find((element) => {
                    return element.name.toLowerCase() === 'slogan';
                }).content.content[0].content[0].value
            },
            imageDesc: function(){
                return this.data.textContents.find((element) => {
                    return element.name.toLowerCase() === 'description image introduction';
                }).content.content[0].content[0].value
            },
            imageUrl: function(){
                return this.data.images.find((element) => {
                    return element.title.toLowerCase() === 'intro';
                }).file.url;
            },
            toServicesCta: function() {
                return this.data.ctas.find((element) => {
                   return element.name.toLowerCase() === 'intro to service';
                });
            },
            toRealisationCta:function(){
                return this.data.ctas.find((element) => {
                    return element.name.toLowerCase() === 'intro to realisation';
                });
            },
            imageContainerCss: function(){
                return 'background-image: url("'+ this.imageUrl +'")';
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
        align-items: center;
        justify-content: center;
        flex-direction: column;
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

    .to-service-container a{
        font-weight: 100;
        font-size: 1rem;
        color:var(--main-color);
        text-transform: uppercase;
    }

    .to-realisation-container a{
        font-weight: 300;
        font-size: 1.2rem;
        color:var(--bg-color);
    }

    .to-service-container:after{
        content:'';
        height:18px;
        border: 1px solid var(--main-color);
        margin-top: 4px;
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
