<template>
  <q-toolbar class="bg-primary text-white" style="min-height: 40px">
    <q-toolbar-title>
      <span class="text-white text-body2 q-mr-md q-ml-xl">
        <q-icon name="schedule" size="1.8em" />
        Po - Pia: 8:00 - 16:00
      </span>
      <span class="text-white text-body2">
        <q-icon name="location_on" size="1.8em" />
        Jazdecká 44, 931 01 Šamorín
      </span>
    </q-toolbar-title>
    <q-btn flat rounded color="white" icon="facebook" @click="openFacebook" />
    <q-btn
      flat
      rounded
      color="white"
      icon="mdi-twitter"
      @click="openFacebook"
    />
    <!-- <q-btn flat rounded color="white" @click="openTwitter">
            <q-icon name="mdi-twitter" />
        </q-btn> -->
  </q-toolbar>

  <q-toolbar class="bg-white text-black q-py-xl" inset>
    <q-toolbar-title>
      <q-img
        :src="url"
        spinner-color="white"
        style="height: 80px; max-width: 470px"
      ></q-img>
    </q-toolbar-title>
    <span class="text-center q-mr-md text-weight-bold text-h6">
      <span class="text-green-9"> Contact us at: </span>
      <br />
      <span class="text-h5 text-weight-bolder" style="letter-spacing: 1px">
        +421 999 999 999
      </span>
    </span>
  </q-toolbar>
  <q-separator></q-separator>
  <q-toolbar
    class="row bg-white text-black"
    sticky
    style="border-bottom: 1px solid lightgray"
  >
    <q-btn-toggle
      v-model="navBar"
      stretch
      unelevated
      rounded
      toggle-color="primary"
      :options="navBarOptions"
      style="width: 100vw; justify-content: space-evenly"
    >
      <template v-slot:one>
        <div class="row items-center no-wrap q-px-md">
          <q-icon left name="home"></q-icon>
          <span>Home</span>
        </div>
      </template>

      <template v-slot:two>
        <div class="row items-center no-wrap q-px-md">
          <q-icon left name="info"></q-icon>
          <span>About us</span>
        </div>
      </template>

      <template v-slot:three>
        <div class="row items-center no-wrap q-px-md">
          <q-icon left name="calculate"></q-icon>
          <span>Our services</span>
        </div>
      </template>

      <template v-slot:four>
        <div class="row items-center no-wrap q-px-md">
          <q-icon left name="import_contacts"></q-icon>
          <span>Contact</span>
        </div>
      </template>

      <template v-slot:five>
        <div class="row items-center no-wrap q-px-md">
          <q-icon left name="work"></q-icon>
          <span>Portfolio</span>
        </div>
      </template>
    </q-btn-toggle>
    <q-select
      transition-show="scale"
      transition-hide="scale"
      dense
      v-model="langModel"
      :options="langOptions"
      style="width: 250px"
    >
      <template v-slot:selected>
        <q-chip
          v-if="langModel"
          square
          color="white"
          text-color="primary"
          class="q-my-none q-ml-xs q-mr-none"
        >
          <q-img
            :src="langModel.flag"
            class="q-mr-xs"
            style="height: 15px; width: 21px"
          />
          {{ langModel.label }}
        </q-chip>
      </template>

      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
          <q-item-section avatar>
            <q-img
              :src="scope.opt.flag"
              class="q-mr-xs"
              style="height: 15px; width: 21px"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ scope.opt.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-select>
  </q-toolbar>
  <!-- :autoplay="carouselAutoplay" -->
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
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const url = ref("pic/modoSavioLogo.png");
    return {
      url,
      navBar: ref("one"),
      navBarOptions: [
        { label: "", slot: "one", value: "one" },
        { label: "", slot: "two", value: "two" },
        { label: "", slot: "three", value: "three" },
        { label: "", slot: "four", value: "four" },
        { label: "", slot: "five", value: "five" }, //contact
      ],
      langModel: ref({
        label: "English",
        value: "en",
        flag: ref("pic/flags/en.png"),
      }),
      langOptions: [
        {
          label: "Magyar",
          value: "hu",
          flag: ref("pic/flags/hu.png"),
        },
        {
          label: "Slovencina",
          value: "sk",
          flag: ref("pic/flags/sk.png"),
        },
        {
          label: "English",
          value: "en",
          flag: ref("pic/flags/en.png"),
        },
      ],
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
  left: -15%;
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
</style>
