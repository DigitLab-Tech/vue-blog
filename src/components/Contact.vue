<template>
    <div class="contact-container">
        <div class="info-container">
            <div class="content-container">
                <p v-html="info"></p>
            </div>
            <div class="title-container">
                <h1>{{data.title}}</h1>
            </div>
        </div>
        <div class="form-container">
            <Form :form-data="formData" />
        </div>
        <div class="image-container">
            <img :src="imageUrl" />
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
            contactData:Object
        },
        data(){
            return{
                data:this.contactData
            }
        },

        computed: {
            imageUrl: function () {
                return this.data.images.find((element) => {
                    return element.title.toLowerCase() === 'salon';
                }).file.url;
            },

            info: function(){
                return this.data.textContents.find((element) => {
                    return element.name.toLowerCase() === "informations de contact";
                }).content.content[0].content[0].value;
            },

            formData: function(){
              return this.data.contents.find(element => {
                return element.name.toLowerCase() === 'contact';
              });
            }
        },
        mounted() {
            console.log(this.data);
        }
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
