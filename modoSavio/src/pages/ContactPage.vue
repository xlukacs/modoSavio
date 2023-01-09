<template>
    <div class="services_bg"></div>
    <div class="column mainWrapper">
        <h1>Contact Page will be here.</h1>
    </div>
</template>
  
<script>
    import { defineComponent, ref } from "vue";

    export default defineComponent({
        name: "ContactPage",
        setup() {
            return {
            };
        },
    });
</script>
  
<style scoped>
.mainWrapper{
    width: 80vw;
    min-height: 50vh;
    padding: 20px;
    margin: auto;
}

.services_bg{
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  position: fixed;
  z-index: -2000;
  background-image: url("~assets/pic/pastelBg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.3;
}
</style>
  