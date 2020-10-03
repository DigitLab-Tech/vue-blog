<template>
    <div class="intro-container grid">
        <div class="left-container row stretch vstretch">
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
                <div class="svg-wrapper">
                    <svg width="228" height="165" viewBox="0 0 228 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 0H125L25 165.5H0L100 0Z" fill="#262626"/>
                        <path d="M150 0H175L75 165.5H50L150 0Z" fill="#262626"/>
                        <path d="M203 0H228L128 165.5H103L203 0Z" fill="#262626"/>
                    </svg>
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
        transform: translateX(125px);
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
