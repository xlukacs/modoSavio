<template>
  <div class="bg"></div>
  <q-carousel
    animated
    v-model="mainSlide"
    navigation
    infinite
    navigation-position="bottom"
    control-type="push"
    transition-prev="slide-right"
    transition-next="slide-left"
    height="30vh"
    @mouseenter="carouselAutoplay = false"
    @mouseleave="carouselAutoplay = true"
    class="specialCarousel"
    autoplay="true"
  >
    <!-- autoplay="true" -->
    <q-carousel-slide :name="1" class="q-pa-none">
      <div class="row" style="overflow: hidden; height: 100%">
        <div class="col-8 row">
          <div
            class="column q-pa-xl text-white bg-accent full-width"
            style="height: 100%; z-index: 1001"
          >
            <div class="col">
              <span
                class="text-h3 q-pb-md text-weight-bold"
                style="display: block"
                >Kvalitné a efektívne riešenie škôd</span
              >
              <q-separator size="5px" color="white" class="q-mb-sm" />
              <span class="text-h3 text-black text-weight-bold"
                >s našou odbornosťou
              </span>
            </div>
          </div>
        </div>
        <div class="col-4">
          <q-img
            src="pic/waterDamage6.jpg"
            spinner-color="primary"
            spinner-size="82px"
            width="100%"
            height="100%"
            position="0px -20px"
          />
        </div>
      </div>
      <!-- <div class="row" style="height: 100%; width: 62%; overflow: hidden">
        <div
          class="column q-pa-xl text-white bg-accent"
          style="height: 100%; width: calc(100% - 200px); z-index: 1001"
        >
          <div class="col-8">
            <span
              class="text-h3 q-pb-md text-weight-bold"
              style="display: block"
              >Kvalitné a efektívne riešenie škôd</span
            >
            <q-separator size="5px" color="white" class="q-mb-sm" />
            <span class="text-h3 text-black text-weight-bold"
              >s našou odbornosťou
            </span>
          </div>
          <div class="col-4 justify-center carouselButtonGroup"></div>
        </div>
        <div class="column sideDecorator bg-accent"></div>
      </div> -->
    </q-carousel-slide>
    <q-carousel-slide :name="2" class="q-pa-none">
      <div class="row" style="overflow: hidden; height: 100%">
        <div class="col-8 row">
          <div
            class="column q-pa-xl text-white bg-accent full-width"
            style="height: 100%; z-index: 1001"
          >
            <div class="col">
              <span
                class="text-h3 q-pb-md text-weight-bold"
                style="display: block"
                >Komplexné riešenie škôd</span
              >
              <q-separator size="5px" color="white" class="q-mb-sm" />
              <span class="text-h3 text-black text-weight-bold"
                >s profesionálnym prístupom
              </span>
            </div>
          </div>
        </div>
        <div class="col-4">
          <q-img
            src="pic/fireDamage.jpg"
            spinner-color="primary"
            spinner-size="82px"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <!-- <div class="row" style="height: 100%; width: 62%; overflow: hidden">
        <div
          class="column q-pa-xl text-white bg-accent"
          style="height: 100%; width: calc(100% - 200px); z-index: 1001"
        >
          <div class="col-8">
            <span
              class="text-h3 q-pb-md text-weight-bold"
              style="display: block"
              >Komplexné riešenie škôd</span
            >
            <q-separator size="5px" color="white" class="q-mb-sm" />
            <span class="text-h3 text-black text-weight-bold"
              >s profesionálnym prístupom
            </span>
          </div>
          <div class="col-4 justify-center carouselButtonGroup"></div>
        </div>
        <div class="sideDecorator bg-accent"></div>
      </div> -->
    </q-carousel-slide>
    <q-carousel-slide :name="3" class="q-pa-none">
      <div class="row" style="overflow: hidden; height: 100%">
        <div class="col-8 row">
          <div
            class="column q-pa-xl text-white bg-accent full-width"
            style="height: 100%; z-index: 1001"
          >
            <div class="col">
              <span
                class="text-h3 q-pb-md text-weight-bold"
                style="display: block"
                >Profesionálny prístup</span
              >
              <q-separator size="5px" color="white" class="q-mb-sm" />
              <span class="text-h3 text-black text-weight-bold"
                >s našou odbornosťou
              </span>
            </div>
          </div>
        </div>
        <div class="col-4">
          <q-img
            src="pic/naturalDamage2.png"
            spinner-color="primary"
            spinner-size="82px"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <!-- <div class="row" style="height: 100%; width: 62%; overflow: hidden">
        <div
          class="column q-pa-xl text-white bg-accent"
          style="height: 100%; width: calc(100% - 200px); z-index: 1001"
        >
          <div class="col-8">
            <span
              class="text-h3 q-pb-md text-weight-bold"
              style="display: block"
              >Profesionálny prístup</span
            >
            <q-separator size="5px" color="white" class="q-mb-sm" />
            <span class="text-h3 text-black text-weight-bold"
              >s našou odbornosťou
            </span>
          </div>
          <div class="col-4 justify-center carouselButtonGroup"></div>
        </div>
        <div class="column sideDecorator bg-accent"></div>
      </div> -->
    </q-carousel-slide>
  </q-carousel>

  <div class="row q-my-xl q-px-xl textContent">
    <h5 class="q-mt-none q-mb-none fullRow text-weight-bold">VITAJTE</h5>
    <div class="mainInfo">
      <span class="line"
        >Spoločnosť <b>MODO SAVIO s.r.o.</b> bola založená v roku 2018 so
        zameraním na poskytovanie administratívnych služieb.</span
      >
      <span class="line"
        >V roku 2022 bola činnosť rozšírená o poskytovanie služieb v oblasti
        likvidácii škôd z poistenia majetku a zodpovednosti, ďalej o rizikové
        inžinierstvo a vykonávanie hodnotenia rizík.</span
      >
      <span class="line"
        >Odborným garantom pre vysokú úroveň poskytovaných služieb je
        <b>Ing. Péter Lukács</b> s dlhoročnou praxou a skúsenosťami v oblasti
        poisťovníctva.
      </span>
      <span class="line"
        >Aby sme našim partnerom poskytli čo najkvalitnejšie služby, využívame
        pri našej práci aj renomovaných odborníkov a špecialistov, na ktorých sa
        môžeme spoľahnúť.</span
      >
    </div>
    <h5 class="text-weight-bold q-mt-lg q-mb-sm fullRow">
      PREHLÁSENIE O NEZÁVISLOSTI, NESTRANNOSTI A NEZAUJATOSTI
    </h5>
    <div class="mainInfo">
      <span class="line no-mr">
        Spoločnosť vyhlasuje, že je bez záväzkov, ktoré by bránili v jej
        nezávislosti a nestrannosti. Spoločnosť nie je ani z časti vlastnená
        žiadnou maklérskou spoločnosťou, poisťovňou alebo iným poskytovateľom
        finančných služieb.
      </span>
    </div>
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
    font-size: 1.2em;
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

.fullRow {
  width: 100%;
}

//=============================
@media (max-width: 730px) {
  .textContent {
    padding: 0px 5px;
  }

  .specialCarousel {
    .q-carousel__slides-container {
      .q-panel {
        .q-carousel__slide {
          .row {
            .col-8 {
              width: 100%;
              .column {
                padding: 10px;
                .col {
                  span {
                    font-size: 1.8em;
                  }
                }
              }
            }
            .col-4 {
              display: none;
            }
          }
        }
      }
    }
    .q-carousel__control {
      .q-carousel__navigation-inner {
        justify-content: center;
        padding-right: unset;
      }
    }
  }
}
</style>
