<template>
  <q-toolbar class="bg-accent text-white" style="min-height: 40px">
    <q-toolbar-title>
      <span class="text-white text-body2 q-mr-md q-ml-xl">
        <q-icon name="schedule" size="1.8em" />
        Po - Pia: 9:00 - 17:00
      </span>
      <span class="text-white text-body2">
        <q-icon name="location_on" size="1.8em" />
        Jazdecká 44, 931 01 Šamorín
      </span>
    </q-toolbar-title>
  </q-toolbar>

  <q-toolbar class="bg-white text-black q-py-xl" inset>
    <q-toolbar-title>
      <q-img
        src="~assets/pic/modoSavioLogoHD.png"
        spinner-color="white"
        style="height: 70px; max-width: 376px"
        class="siteLogo"
        @click="goHome()"
      ></q-img>
    </q-toolbar-title>
    <span class="text-center q-mr-md text-weight-bold text-h6">
      <span class="text-green-9"> Kontaktujte nás na: </span>
      <br />
      <span class="text-h5 text-weight-bolder" style="letter-spacing: 1px">
        +421 905 345 386
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
      toggle-color="accent"
      :options="navBarOptions"
      style="width: 100vw; justify-content: space-evenly"
    >
      <template v-slot:one>
        <div class="row items-center no-wrap q-px-md" @click="goPage('home')">
          <q-icon left name="home"></q-icon>
          <span>PROFIL SPOLOČNOSTI</span>
        </div>
      </template>

      <template v-slot:two>
        <div class="row items-center no-wrap q-px-md" @click="goPage('info')">
          <q-icon left name="info"></q-icon>
          <span>NAŠE SLUŽBY</span>
        </div>
      </template>

      <template v-slot:three>
        <div class="row items-center no-wrap q-px-md" @click="goPage('kontakt')">
          <q-icon left name="contact_phone"></q-icon>
          <span>KONTAKT</span>
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


  <router-view></router-view>


  <footer class="q-pa-sm">
    <q-img
        src="~assets/pic/modoSavioLogoHD.png"
        spinner-color="accent"
        style="height: 40px; max-width: 235px"
        class="q-mt-lg q-ml-xl q-md-md"
      ></q-img>
    <div class="row q-mt-md q-pb-lg">
      <div class="col-4 q-pl-lg">
        <q-list>
          <q-item>
            <q-item-section avatar top>
              <q-avatar icon="location_on" text-color="accent"></q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">MODO SAVIO s.r.o. <br> Jazdecká 44, 931 01 Šamorín</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar top>
              <q-avatar icon="call" text-color="accent"></q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">+421 905 345 386</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar top>
              <q-avatar icon="mail" text-color="accent"></q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">
                office@modosavio.sk <br>
                <br>
                IČO: 51 832 411 <br>
                Zápis OR: Okresný súd Trnava, <br>
                oddiel Sro, vložka č. 42670/T <br>
                <br>
                DIČ: 2120806281
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-4">
        <h5 class="q-my-sm q-px-sm">Mapa stránok</h5>
        <q-list>
          <q-item dense clickable v-ripple>
            <q-item-section>
              <q-item-label lines="1">PROFIL SPOLOČNOSTI</q-item-label>
            </q-item-section>
          </q-item>

          <q-item dense clickable v-ripple>
            <q-item-section>
              <q-item-label lines="1">NAŠE SLUŽBY</q-item-label>
            </q-item-section>
          </q-item>

          <q-item dense clickable v-ripple>
            <q-item-section>
              <q-item-label lines="1">KONTAKT</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-4">
        <q-list padding>
          <q-item-label header class="q-pb-sm">
            <span class="text-h5 text-black">Pracovná doba</span>
          </q-item-label>

          <q-item>
            <q-item-section avatar top>
              <q-avatar icon="schedule" text-color="accent"></q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Pondelok - Piatok 9.00 - 17.00</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const url = ref("pic/modoSavioLogoHD.png");
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
        label: "Slovencina",
        value: "sk",
        flag: ref("pic/flags/sk.png"),
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
  methods: {
    goHome(){
      this.$router.push('/')
    },
    goPage(link){
      if(link == 'home'){
        this.navBar = 'one'
        this.$router.push('/')
      }
      if(link == 'info'){
        this.navBar = 'two'
        this.$router.push('/our_services')
      }
      if(link == 'kontakt'){
        this.navBar = 'three'
        this.$router.push('/')
      }
    }
  }
});
</script>

<style scoped>
.siteLogo{
  transform: scale(0.8) translateX(-14%);
}
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

.timeline {
}

.middleTimelineSection {
  width: 9px;
  height: 350px;
  background-color: var(--q-primary);
  position: relative;
}
.middleTimelineSection::before {
  content: "";
  border-radius: 50%;
  border: 13px solid var(--q-primary);
  position: absolute;
  top: -5px;
  left: -8px;
}

.middleTimelineSection::after {
  content: "";
  border-radius: 50%;
  border: 13px solid var(--q-primary);
  position: absolute;
  bottom: -5px;
  left: -8px;
}

.decoratorPart {
  position: relative;
}

.textPart > h3 {
  margin-bottom: unset;
  /* text-align: center; */
}
.rightTimelineBox > .decoratorPart {
  margin-right: 10px;
}

.leftTimelinePicture {
  top: 25px;
}
.timelinePicture {
  border-radius: 10px;
  width: 75px;
  height: 75px;
  position: absolute;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  background-image: url("/pic/tempPic.png");
  background-position: center;
  background-size: cover;
}

.rightTimelinePicture {
  top: 25px;
  right: 0px;
}
.connectorLeft {
  position: absolute;
  z-index: -1;
  top: 50px;
  background-color: var(--q-warning);
  width: 100%;
  height: 10px;
}
.connectorRight {
  position: absolute;
  z-index: -1;
  top: 50px;
  right: 0px;
  background-color: var(--q-warning);
  width: 100%;
  height: 10px;
}

.leftTimelineBox > .textPart > h3 {
  font-size: 1.8em;
}

.rightTimelineBox > .textPart > h3 {
  font-size: 1.8em;
}

.rightTimelineBox {
  height: 200px;
}
.leftTimelineBox {
  height: 200px;
}

.dummyItem {
  opacity: 0;
  height: 120px !important;
}

.mainInfo{
  font-size: 1.3em;
}

footer {
  /* height: 100px;
  height: 50px; */
  background-color: white;
  /* background-color: var(--q-primary); */
}
</style>
