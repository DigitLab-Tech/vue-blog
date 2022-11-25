<template>
    <div class="contact-container grid">
        <div class="left-column">
            <div class="info-container column vcenter" >
                <div class="content-container" data-aos="fade-up-right">
                    <p v-html="section.getTextContent('informations de contact')"></p>
                </div>
            </div>
        </div>
        <div class="right-column">
            <div class="form-container column end" >
                <div class="title-container row center vcenter" data-aos="fade-down-left">
                    <h1>{{section.getTitle()}}</h1>
                </div>
                <Form :form-data="section.getContent('contact')" data-aos="fade-down-left" />
                <div class="image-container" :style="imageContainerCss" data-aos="fade" data-aos-delay="150" data-aos-anchor=".contact-container">

                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import Form from "./Form";

    export default {
        name: 'Contact',
        components:{
          Form
        },
        props:{
            sectionClass:Object
        },
        data(){
            return{
                section:this.sectionClass
            }
        },
        computed: {
            imageContainerCss: function(){
                return 'background-image: url("'+ this.section.getImageData('salon').url +'")';
            }
        }
    }
</script>

<style scoped>
    .contact-container{
        grid-template-columns: [left]2fr [right]1fr;
        justify-content: end;
    }

    .title-container{
        position: absolute;
        top:14%;
        right: 50%;
        z-index: 10;
    }

    .left-column{
        justify-self: start;
        align-self: center;
    }

    .info-container{
        text-align: right;
        transform: translateY(-25%);
        position: relative;
    }

    .form-container{
        display: flex;
        flex-direction: column;
        align-items: stretch;
        position: relative;
        padding: 6rem 0;
    }

    .image-container{
        position: absolute;
        background-position: center;
        background-size: cover;
        top:50%;
        transform: translateY(-50%);
        right: 0;
        z-index: -1;
        width: 80vw;
        height: 60%;
    }

    .image-container:after{
        content:'';
        display: flex;
        background-color: rgba(0,0,0,0.25);
        width: 100%;
        height: 100%;
    }

    .image-container[data-aos^=fade][data-aos^=fade].aos-animate{
        transform: translateY(-50%);
    }

    .content-container{
        padding: 5rem 4rem 5rem 8rem;
        background-color: var(--secondary-color);
    }

    @media (max-width: 576px){
        div.left-column{
            grid-row: 2/3;
        }
        div.title-container{
            right: 40%;
        }
    }


    @media (max-width: 991px){
        p{
            font-size: 1rem;
            line-height: 1.4rem;
        }
        .contact-container{
            grid-template-columns: [left right]1fr
        }
        .left-column{
            grid-row: 1/2;
            align-self: end;
        }
        .right-column{
            grid-row: 1/2;
        }
        .title-container{
            right: 15%;
        }
        .image-container{
            width: 100vw;
        }
        .content-container{
            padding: 3rem 1rem 2rem 1rem;
        }
    }
</style>
