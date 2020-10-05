<!--suppress CssInvalidPseudoSelector -->
<template>
    <form class="column" :id="form.name" :name="form.name" data-netlify="true" data-netlify-honeypot="bot-field" v-on:submit.prevent="form.submit">
        <div class="input-container" v-for="field in form.fields" :key="field.getName()">
            <input autocomplete="no" :name="field.getName()" :placeholder="field.getPlaceHolder()" v-model="field.value" />
            <div class="error-container"><span>{{field.getError()}}</span></div>
        </div>

        <input name="form-name" type="hidden" :value="form.name" />
        <button class="btn-primary">Envoyer</button>
    </form>
</template>

<script>
    import Form from "App/model/form/Form";

    export default {
        name: 'Form',
        props:{
            formData:Object
        },

        data(){
            return{
                form: new Form(this.formData)
            }
        },

        methods: {

        },

        mounted() {

        }
    }
</script>

<style scoped>
    form{
        background: linear-gradient(90deg, rgba(0,0,0,0) 33%, var(--secondary-color) 33%);
        padding: 4rem 0.5rem;
        width: 100%;
    }

    textarea:focus, input:focus{
        outline: none;
    }

    input{
        background-color: rgba(0,0,0,0);
        border-top:none;
        border-left:none;
        border-right:none;
        border-bottom: 3px solid var(--main-color);
        font-family: var(--main-font);
        color: var(--main-color);
        font-size: 1.8rem;
        padding-top: 3.5rem;
        font-weight: 300;
    }

    input::placeholder{
        color: var(--main-color);
    }

    .input-container{
        position: relative;
    }

    .error-container{
        position: absolute;
        right:0;
        bottom:-1.5rem;
    }

    .btn-primary{
        background-color: rgba(0,0,0,0);
        color: var(--main-color);
        border: 1px solid var(--main-color);
        font-family: var(--main-font);
        font-weight: 200;
        font-size: 1.8rem;
        padding: 0.8rem 2rem;
        align-self: flex-end;
        margin-top: 3.5rem;
        cursor: pointer;
    }

    @media (max-width: 576px){
        form{
            padding: 4rem 0.3rem 4rem 0rem;
        }
    }

    @media (max-width: 991px){
        form{
            max-width: 350px;
        }
    }
</style>
