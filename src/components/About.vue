<template>
    <div class="about-container grid">
        <div class="left-column column" data-aos="fade-right">
            <div class="title-wrapper row end vcenter">
                <h1 data-aos="zoom-in-up" data-aos-delay="200">{{section.getTitle()}}</h1>
            </div>
            <div class="image-wrapper" data-aos="fade-up-left" data-aos-delay="100">
                <img :src="section.getImageData('girl taking notes').url" draggable="false" />
            </div>
        </div>
        <div class="right-column row vcenter" >
            <div class="wrapper column start vcenter">
                <p v-html="section.getTextContent('à propos - contenu principal')" data-aos="fade-down" data-aos-delay="200"></p>
                <div class="cta-wrapper" data-aos="fade-up-left" data-aos-delay="200">
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
    p{
        white-space: nowrap;
    }

    .about-container{
        grid-template-columns: [left]minmax(450px,1fr) [right]2fr;
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

    .cta-wrapper{
        padding-top: 2rem;
    }


    .wrapper{
        padding-left: 4rem;
    }

    @media (max-width: 576px){
        .wrapper{
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }

    @media (max-width: 991px){
        .about-container{
            grid-template-columns: [left right]1fr;
        }

        .image-wrapper img{
            width:75%;
        }

        .left-column{
            background: linear-gradient(90deg, var(--secondary-color) 50%, var(--bg-color) 50%);
        }

        .title-wrapper{
            transform: translateX(-28%);
        }

        .wrapper{
            transform: translateY(-2rem);
        }
    }
</style>
