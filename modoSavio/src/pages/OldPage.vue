<template>
    <div class="fullPageBG"></div>
    <p>
        <img src="logo.png" alt="logo"><br><br>
        <!-- KEEP <br> CALM <br> AND <br> TRUST YOUR <br> LOSS ADJUSTER
        <br>
        <br> 
        <span>The site is under construction.</span>-->
        <img src="underConstruction2.png" alt="logo" id="constructionLogo">
    </p>
</template>
  
<script>
  import { defineComponent, ref } from "vue";
  import { useAuthStore } from 'stores/auth';

  export default defineComponent({
    name: "OldPage",
    setup() {
        
        return {
        };
    },
    methods: {
        tryLogin(){
            const store = useAuthStore();
            if(this.password == this.corrPass){
                store.setAuth(true)
                this.$router.push("/home")
            }
        }
    },
    data() {
        return {
            password: '',
            corrPass: 'ModoSavioPassword001.'
        }
    }
  });
</script>
  
<style scoped>
*{
    margin: 0px;
    padding: 0px;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
}

.fullPageBG{
    position: fixed;
    z-index: -1001;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: black;
}

html{
    background-color: black;
}

p{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: white;
    font-size: 60px;
    width: 100%;
}

p span{
    color: white;
    font-size: 28px;
}

img{
    max-width: 500px;
    width: 80%;
}

#constructionLogo{
    width: 80%;
    margin-top: 10%;
}

@media screen and (max-width: 600px) {
    img{
        max-width: 300px;
    }
    #constructionLogo{
        width: auto;
    }
}
</style>
  