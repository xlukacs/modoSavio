<template>
  <div class="services_bg"></div>
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
    <!-- <q-carousel-slide :name="1" img-src="pic/carousel3.png" class="q-pa-none">
      <div class="row" style="height: 100%; width: 62%; overflow: hidden">
        <div
        class="column q-pa-xl text-white bg-accent"
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
        <div class="column sideDecorator bg-accent"></div>
      </div>
    </q-carousel-slide> -->
    <q-carousel-slide :name="1" img-src="pic/carousel1.jpg">
      <div class="row" style="height: 100%; width: 62%; overflow: hidden">
        <div
        class="column q-pa-xl text-white bg-accent"
        style="height: 100%; width: calc(100% - 200px)"
        >
        <div class="col-8">
          <span
          class="text-h3 q-pb-md text-weight-bold"
          style="display: block"
          >We help you <br />solve all of your problems</span
          >
          <q-separator size="5px" color="white" class="q-mb-sm" />
          <!-- <span class="text-h6">Fineprint goes here</span> -->
        </div>
        <div class="col-4 justify-center carouselButtonGroup">
          <!-- <q-btn
          class="carouselButton"
          outline
          color="warning"
          label="More information"
          @click="onClick"
          /> -->
        </div>
      </div>
      <div class="column sideDecorator bg-accent"></div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="2" img-src="pic/carousel2.png">
      <div class="row" style="height: 100%; width: 62%; overflow: hidden">
        <div
        class="column q-pa-xl text-white bg-accent"
        style="height: 100%; width: calc(100% - 200px)"
        >
        <div class="col-8">
          <span
          class="text-h3 q-pb-md text-weight-bold"
          style="display: block"
          >We help you <br />solve all of your problems</span
          >
          <q-separator size="5px" color="white" class="q-mb-sm" />
          <!-- <span class="text-h6">Fineprint goes here</span> -->
        </div>
        <div class="col-4 justify-center carouselButtonGroup">
          <!-- <q-btn
          class="carouselButton"
          outline
          color="warning"
          label="More information"
          @click="onClick"
          /> -->
        </div>
      </div>
      <div class="column sideDecorator bg-accent"></div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="3" img-src="pic/carousel3.png">
      <div class="row" style="height: 100%; width: 62%; overflow: hidden">
        <div
        class="column q-pa-xl text-white bg-accent"
        style="height: 100%; width: calc(100% - 200px)"
        >
        <div class="col-8">
          <span
          class="text-h3 q-pb-md text-weight-bold"
          style="display: block"
          >We help you <br />solve all of your problems</span
          >
          <q-separator size="5px" color="white" class="q-mb-sm" />
          <!-- <span class="text-h6">Fineprint goes here</span> -->
        </div>
        <div class="col-4 justify-center carouselButtonGroup">
          <!-- <q-btn
          class="carouselButton"
          outline
          color="warning"
          label="More information"
          @click="onClick"
          /> -->
        </div>
      </div>
      <div class="column sideDecorator bg-accent"></div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="4" img-src="pic/carousel4.png">
      <div class="row" style="height: 100%; width: 62%; overflow: hidden">
        <div
        class="column q-pa-xl text-white bg-accent"
        style="height: 100%; width: calc(100% - 200px)"
        >
        <div class="col-8">
          <span
          class="text-h3 q-pb-md text-weight-bold"
          style="display: block"
          >We help you <br />solve all of your problems</span
          >
          <q-separator size="5px" color="white" class="q-mb-sm" />
          <!-- <span class="text-h6">Fineprint goes here</span> -->
        </div>
        <div class="col-4 justify-center carouselButtonGroup">
          <!-- <q-btn
          class="carouselButton"
          outline
          color="warning"
          label="More information"
          @click="onClick"
          /> -->
        </div>
      </div>
      <div class="column sideDecorator bg-accent"></div>
      </div>
    </q-carousel-slide>
    <!-- <q-carousel-slide :name="3" img-src="pic/carousel3.png">
      <div class="row" style="height: 100%; width: 62%; overflow: hidden">
        <div
        class="column q-pa-xl text-white bg-accent"
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
  </q-carousel-slide> -->
    <!-- <q-carousel-slide :name="4" img-src="pic/carousel3.png">
    <div class="row" style="height: 100%; width: 85%; overflow: hidden">
      <div
      class="column q-pa-xl text-white bg-accent"
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
      <div class="column sideDecorator bg-accent"></div>
    </div>
  </q-carousel-slide> -->
</q-carousel>
<!-- :autoplay="carouselAutoplay" -->


<div class="row q-my-xl q-px-xl">
  <h5 class="q-mt-none fullRow">VITAJTE</h5>
  <span class="mainInfo">
    Spoločnosť <b>MODO SAVIO s.r.o.</b> bola založená v roku 2018 ako firma so zameraním na poskytovanie administratívnych služieb.
    <br>
    V roku 2022 bola činnosť rozšírená o poskytovanie služieb v oblasti likvidácii škôd z poistenia majetku a zodpovednosti, ďalej o rizikové inžinierstvo pre malé a stredné podniky.
    <br>
    <br>
    Odborným garantom pre vysokú úroveň poskytovaných služieb je <b>Ing. Péter Lukács</b> s dlhoročnou praxou a skúsenosťami v oblasti poisťovníctva. 
    <br>
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
      mainSlide: ref(1),
      carouselAutoplay: ref(true),
    };
  },
});
</script>

<style scoped>
.sideDecorator {
  width: 200px;
  height: 150%;
  /* background-color: red !important; */
  position: relative;
  left: -135px;
  top: -20%;
  transform: rotateZ(18deg);
}

.carouselButton {
  position: absolute;
  bottom: 0px;
}

.carouselButtonGroup {
  position: relative;
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

.fullRow{
  width: 100%;
}
</style>
