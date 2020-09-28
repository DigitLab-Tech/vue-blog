<template>
    <div class="contact-container">
        <div class="info-container">
            <div class="content-container">
                <p v-html="section.getTextContent('informations de contact')"></p>
            </div>
            <div class="title-container">
                <h1>{{section.getTitle()}}</h1>
            </div>
        </div>
        <div class="form-container">
            <Form :form-data="section.getContent('contact')" />
        </div>
        <div class="image-container">
            <img :src="section.getImageData('salon').url" draggable="false"/>
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
    }
</script>

<style scoped>
    .contact-container{
        display:grid;
        grid-template-columns: 2fr 1fr;
        justify-content: end;
    }

    .info-container{
        grid-column: 1/2;
        grid-row: 1/2;
        display: flex;
        text-align: right;
        align-items: flex-start;
        font-family: var(--main-font);
        font-size: 1.5rem;
        z-index: 10;
    }

    .form-container{
        grid-column: 2/3;
        grid-row: 1/2;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        z-index: 10;
    }

    .image-container{
        grid-column: 1/3;
        grid-row: 1/2;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .image-container img{
        max-height: 75%;
    }

    .content-container{
        background-color: var(--secondary-color);
        padding: 4rem 4rem 4rem 8rem;
    }

    .title-container{
        transform: translate(-1rem, -1rem);
    }

</style>
