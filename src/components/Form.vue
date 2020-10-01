<template>
    <form class="column" :id="data.name">
        <input v-for="input in data.formFields" :key="input.name" :placeholder="input.label" />
        <button class="btn-primary">Envoyer</button>
    </form>
</template>

<script>
    export default {
        name: 'Form',
        props:{
            formData:Object
        },
        data(){
            return{
                data:this.formData
            }
        },

        computed: {

        },

        mounted() {
            console.log(this.data);
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

    @media (max-width: 991px){
        form{
            max-width: 350px;
        }
    }
</style>
