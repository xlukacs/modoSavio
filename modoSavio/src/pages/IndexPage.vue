<template>
  <q-carousel
  animated
  v-model="mainSlide"
  thumbnails
  infinite
  navigation-position="right"
  control-type="push"
  transition-prev="slide-right"
  transition-next="slide-left"
  height="50vh"
  @mouseenter="carouselAutoplay = false"
  @mouseleave="carouselAutoplay = true"
  >
    <q-carousel-slide :name="1" img-src="pic/carousel3.png" class="q-pa-none">
      <div class="row" style="height: 100%; width: 62%; overflow: hidden">
        <div
        class="column q-pa-xl text-white bg-primary"
        style="height: 100%; width: calc(100% - 200px)"
        >
        <div class="col-8">
          <span
          class="text-h3 q-pb-md text-weight-bold"
          style="display: block"
          >We help you <br />solve all of your problems</span
          >
          <q-separator size="5px" color="warning" class="q-mb-sm" />
          <span class="text-h6">Fineprint goes here</span>
        </div>
        <div class="col-4 justify-center carouselButtonGroup">
          <q-btn
          class="carouselButton"
          outline
          color="warning"
          label="More information"
          @click="onClick"
          />
        </div>
      </div>
        <div class="column sideDecorator bg-primary"></div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="2" img-src="pic/carousel3.png">
      <div class="row" style="height: 100%; width: 62%; overflow: hidden">
        <div
        class="column q-pa-xl text-white bg-primary"
        style="height: 100%; width: calc(100% - 200px)"
        >
        <div class="col-8">
          <span
          class="text-h3 q-pb-md text-weight-bold"
          style="display: block"
          >We help you <br />solve all of your problems</span
          >
          <q-separator size="5px" color="warning" class="q-mb-sm" />
          <span class="text-h6">Fineprint goes here</span>
        </div>
        <div class="col-4 justify-center carouselButtonGroup">
          <q-btn
          class="carouselButton"
          outline
          color="warning"
          label="More information"
          @click="onClick"
          />
        </div>
      </div>
      <div class="column sideDecorator bg-primary"></div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="3" img-src="pic/carousel3.png">
      <div class="row" style="height: 100%; width: 62%; overflow: hidden">
        <div
        class="column q-pa-xl text-white bg-primary"
        style="height: 100%; width: calc(100% - 200px)"
        >
        <div class="col-8">
          <span
          class="text-h3 q-pb-md text-weight-bold"
          style="display: block"
          >We help you <br />solve all of your problems</span
          >
          <q-separator size="5px" color="warning" class="q-mb-sm" />
          <span class="text-h6">Fineprint goes here</span>
        </div>
        <div class="col-4 justify-center carouselButtonGroup">
          <q-btn
          class="carouselButton"
          outline
          color="warning"
          label="More information"
          @click="onClick"
          />
        </div>
      </div>
    </div>
  </q-carousel-slide>
  <q-carousel-slide :name="4" img-src="pic/carousel3.png">
    <div class="row" style="height: 100%; width: 85%; overflow: hidden">
      <div
      class="column q-pa-xl text-white bg-primary"
      style="height: 100%; width: calc(100% - 200px)"
      >
        <div class="col-8">
          <span
          class="text-h3 q-pb-md text-weight-bold"
          style="display: block"
          >We help you <br />solve all of your problems</span
        >
          <q-separator size="5px" color="warning" class="q-mb-sm" />
          <span class="text-h6">Fineprint goes here</span>
        </div>
        <div class="col-4 justify-center carouselButtonGroup">
          <q-btn
          class="carouselButton"
          outline
          color="warning"
          label="More information"
          @click="onClick"
          />
        </div>
      </div>
      <div class="column sideDecorator bg-primary"></div>
    </div>
  </q-carousel-slide>
</q-carousel>


<div class="row q-my-xl q-px-xl">
  <span class="mainInfo">
    Spoločnosť MODO SAVIO bola založená v roku 2018 ako firma so zameraním na poskytovanie administratívnych služieb.
    <br>
    V roku 2022 bola činnosť rozšírená o poskytovanie služieb v oblasti likvidácii škôd z poistenia majetku a zodpovednosti, ďalej o rizikové inžinierstvo pre malé a stredné podniky.
    <br>
    Aby sme našim partnerom poskytli čo najkvalitnejšie služby, pri našej práci sa môžeme spoľahnúť aj na renomovaných odborníkov a špecialistov.
  </span>
  <h5>PREHLÁSENIE O NEZÁVISLOSTI, NESTRANNOSTI A NEZAUJATOSTI</h5>
  <span class="mainInfo">
    Spoločnosť vyhlasuje, že je bez záväzkov, ktoré by bránili v jej nezávislosti a nestrannosti. Spoločnosť nie je ani z časti vlastnená žiadnou maklérskou spoločnosťou, poisťovňou alebo zaisťovňou.
  </span>
</div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {

    };
  },
});
</script>

<style scoped>
</style>
