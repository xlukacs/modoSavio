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
    height="30vh"
    @mouseenter="carouselAutoplay = false"
    @mouseleave="carouselAutoplay = true"
    class="specialCarousel"
  >
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
  </q-carousel>

  <div class="row q-my-xl q-px-xl">
    <h5 class="q-mt-none q-mb-none fullRow text-weight-bold">VITAJTE</h5>
    <div class="mainInfo">
      <span class="line"
        >Spoločnosť <b>MODO SAVIO s.r.o.</b> bola založená v roku 2018 ako firma
        so zameraním na poskytovanie administratívnych služieb.</span
      >
      <span class="line"
        >V roku 2022 bola činnosť rozšírená o poskytovanie služieb v oblasti
        likvidácii škôd z poistenia majetku a zodpovednosti, ďalej o rizikové
        inžinierstvo pre malé a stredné podniky.</span
      >
      <span class="line"
        >Odborným garantom pre vysokú úroveň poskytovaných služieb je
        <b>Ing. Péter Lukács</b> s dlhoročnou praxou a skúsenosťami v oblasti
        poisťovníctva.
      </span>
      <span class="line"
        >Aby sme našim partnerom poskytli čo najkvalitnejšie služby, pri našej
        práci sa môžeme spoľahnúť aj na renomovaných odborníkov a
        špecialistov.</span
      >
    </div>
    <h5 class="text-weight-bold q-mt-lg q-mb-sm">
      PREHLÁSENIE O NEZÁVISLOSTI, NESTRANNOSTI A NEZAUJATOSTI
    </h5>
    <span class="mainInfo">
      Spoločnosť vyhlasuje, že je bez záväzkov, ktoré by bránili v jej
      nezávislosti a nestrannosti. Spoločnosť nie je ani z časti vlastnená
      žiadnou maklérskou spoločnosťou, poisťovňou alebo zaisťovňou.
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

<style scoped lang="scss">
.specialCarousel {
  box-shadow: -1px 7px 9px -1px rgba(0, 0, 0, 0.59);
  -webkit-box-shadow: -1px 7px 9px -1px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: -1px 7px 9px -1px rgba(0, 0, 0, 0.59);
}
.mainInfo {
  .line {
    display: block;
    margin-top: 6px;
  }
}
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

.services_bg {
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  position: fixed;
  z-index: -2000;
  background-image: url("~assets/pic/generatedBackground.jpg");
  background-size: cover;
  background-position: center;
  //opacity: 0.3;
}

.fullRow {
  width: 100%;
}
</style>
