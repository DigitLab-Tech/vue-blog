<template>
    <footer class="footer-container">
        <div class="image-container" :style="imageContainerCss">

        </div>

        <div class="copyright-container">
            <div>
                <span v-html="copyright + currentYear"></span>
                <br/>
                <a :href="builderRef.url">{{builderRef.name}}</a>
            </div>
        </div>

        <div class="logo-container">
            <a href="#intro" draggable="false">
                <div class="svg-wrapper">
                    <svg width="16" height="137" viewBox="0 0 16 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.70711 0.292892C8.31658 -0.0976257 7.68342 -0.0976257 7.29289 0.292892L0.928932 6.65686C0.538408 7.04738 0.538408 7.68054 0.928932 8.07108C1.31946 8.46159 1.95262 8.46159 2.34315 8.07108L8 2.41422L13.6569 8.07108C14.0474 8.46159 14.6805 8.46159 15.0711 8.07108C15.4616 7.68054 15.4616 7.04738 15.0711 6.65686L8.70711 0.292892ZM9 137L9 1H7L7 137H9Z" fill="#FCF5F5"/>
                    </svg>
                </div>
                <img :src="logoUrl" draggable="false"/>
            </a>
        </div>

        <div class="social-container">
            <p>Suivez-moi</p>
            <a class="image-wrapper" v-for="social in data.socials" :key="social.name" :href="social.url" target="_blank">
                <img :src="social.icon.file.url" draggable="false"/>
            </a>
        </div>
    </footer>
</template>

<script>

    export default {
        name: 'Footer',
        props:{
            footerData:Object
        },
        data(){
            return{
                data: this.footerData,
                currentYear: ' - ' + new Date().getFullYear()
            }
        },
        computed:{
            imageUrl: function(){
                return this.data.images.find((element) => {
                    return element.title.toLowerCase() === 'cellier';
                }).file.url;
            },

            imageContainerCss: function(){
                return 'background-image: url("'+ this.imageUrl +'")';
            },

            copyright: function(){
                return this.data.copyright.content[0].content[0].value;
            },

            logoUrl: function () {
                return this.data.logo.file.url;
            },

            builderRef: function () {
              return {name: "#CEDP Solutions", url:"https://cedp.solutions"}
            }
        }
    }
</script>

<style scoped>
    .footer-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        align-content: stretch;
    }

    .image-container{
        grid-column: 1/4;
        justify-self: stretch;
        height:35vh;
        background-size: cover;
        background-position: center;
        position:relative;
    }

    .image-container:before{
        content:'';
        background-color: var(--secondary-color);
        position: absolute;
        width: 33%;
        height: 20%;
        top:-3rem;
        left: 15%;
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

    .copyright-container{
        grid-column:1/2;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 100;
    }

    .copyright-container span{
        font-weight: 100;
        letter-spacing: 0.1rem;
    }

    .copyright-container a{
        font-weight: 100;
        text-transform: uppercase;
        color:var(--main-color);
        line-height: 1.6rem;
    }

    .logo-container{
        grid-column: 2/3;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 3rem 0 1rem 0;
        position: relative;
    }

    .logo-container img{
        max-height: 8vh;
    }

    .svg-wrapper{
        position: absolute;
        top:-50%;
        left:49%;
        max-height: 100px;
        overflow: hidden;
        width: 100%;
    }

    .social-container{
        grid-column: 3/4;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .social-container p{
        font-weight: 300;
        text-transform: uppercase;
        font-size: 1.4rem;
    }

    .image-wrapper{
        padding: 2px;
    }
</style>
