<template>
    <div class="formHolder">
        <q-input v-model="password" type="password" label="Password" class="q-mb-md"/>
        <q-btn color="primary" icon="check" label="Login" @click="tryLogin" />
    </div>
</template>
  
<script>
  import { defineComponent, ref } from "vue";
  import { useAuthStore } from 'stores/auth';

  export default defineComponent({
    name: "LoginPage",
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
.formHolder{
    width: 250px;
    margin: auto;
    border: 2px solid lightgray;
    padding: 5px;
    border-radius: 5px;
    margin-top: 10%;
}
</style>
  