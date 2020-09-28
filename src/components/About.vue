<template>
    <div class="about-container">
        <div class="image-container">
            <div class="title-wrapper">
                <h1>{{section.getTitle()}}</h1>
                <div class="svg-wrapper">
                    <svg width="97" height="83" viewBox="0 0 97 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M88.2929 82.7071C88.6834 83.0976 89.3166 83.0976 89.7071 82.7071L96.0711 76.3431C96.4616 75.9526 96.4616 75.3195 96.0711 74.9289C95.6805 74.5384 95.0474 74.5384 94.6569 74.9289L89 80.5858L83.3431 74.9289C82.9526 74.5384 82.3195 74.5384 81.9289 74.9289C81.5384 75.3195 81.5384 75.9526 81.9289 76.3431L88.2929 82.7071ZM88 1L88 82L90 82L90 1L88 1Z" fill="#FCF5F5"/>
                        <line x1="89" y1="1" x2="8.74228e-08" y2="1.00001" stroke="#FCF5F5" stroke-width="2"/>
                    </svg>
                </div>
            </div>
            <img :src="section.getImageData('girl taking notes').url" />
        </div>
        <div class="text-container">
            <p v-html="section.getTextContent('à propos - contenu principal')"></p>
            <a class="cta-style-1" :href="section.getCta('about - contact').url" v-html="section.getCta('about - contact').label"></a>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'About',
        props:{
            sectionClass:Object
        },
        data(){
            return{
                section: this.sectionClass
            }
        }
    }
</script>

<style scoped>
    .about-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title-wrapper{
        display: flex;
    }

    .title-wrapper h1{
        font-family: var(--main-font);
        font-weight: 900;
        font-size: 3em;
        margin: 0px;
    }

    .image-container{
        z-index: 2;
        height:700px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        background: linear-gradient(90deg, var(--secondary-color) 63%, var(--bg-color) 63%);
    }

    .svg-wrapper{
        width: 0;
        height: 0;
        overflow: visible;
        padding-top: 2rem;
        padding-left: 1em;
    }

    .text-container{
        width:100%;
        padding-left: 3rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transform: translateY(-20%);
    }

    .text-container p{
        font-family: var(--main-font);
        font-size: 2rem;
        font-weight: 400;
        line-height: 3rem;
        letter-spacing: 0.3rem;
    }
</style>
