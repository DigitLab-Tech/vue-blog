<template>
    <div class="about-container grid">
        <div class="left-column column">
            <div class="title-wrapper row end vcenter">
                <h1>{{section.getTitle()}}</h1>
            </div>
            <div class="image-wrapper">
                <img :src="section.getImageData('girl taking notes').url" draggable="false" />
            </div>
        </div>
        <div class="right-column row vcenter">
            <div class="wrapper column start vcenter">
                <p v-html="section.getTextContent('à propos - contenu principal')"></p>
                <div class="cta-wrapper">
                    <a class="cta-style-1" :href="section.getCta('about - contact').url" v-html="section.getCta('about - contact').label"></a>
                </div>
            </div>
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
        grid-template-columns: minmax(450px,1fr) 2fr;
    }

    .left-column{
        background: linear-gradient(90deg, var(--secondary-color) 63%, var(--bg-color) 63%);
        padding: 5rem 0 5rem 0;
        justify-self: stretch;
        align-items: stretch;
    }

    .title-wrapper{
        transform: translateX(-2rem);
    }

    .image-wrapper img{
        width:100%;
    }

    .right-column p{
        white-space: nowrap;
    }

    .cta-wrapper{
        padding-top: 2rem;
    }


    .wrapper{
        padding-left: 4rem;
    }
</style>
