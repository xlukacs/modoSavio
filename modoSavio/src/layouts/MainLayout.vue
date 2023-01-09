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

  <q-toolbar class="bg-white text-black q-py-lg" inset>
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

    <!-- <q-select
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
    </q-select> -->
    <div class="langSelector" style="width: 100px;">
      <q-img
        src="pic/flags/sk_hd.png"
        :ratio="16/9"
        spinner-color="primary"
        spinner-size="82px"
        width="30px"
        class="q-mr-xs"
        img-class="toolbarFlag"
      />
      <!-- <q-img
        src="pic/flags/hu.png"
        :ratio="16/9"
        spinner-color="primary"
        spinner-size="82px"
        width="30px"
        class="toolbarFlag"
      /> -->
      <!-- <q-btn color="primary" dense icon="check" @click="onClick" class="q-mr-xs"/>
      <q-btn color="primary" dense icon="check" @click="onClick" class="q-mr-xs" />
      <q-btn color="primary" dense icon="check" @click="onClick" class="q-mr-xs" /> -->
    </div>
  </q-toolbar>



  <router-view></router-view>


  <footer class="q-pa-sm">
    <q-img
        src="~assets/pic/modoSavioLogoHD.png"
        spinner-color="accent"
        style="height: 40px; max-width: 235px"
        class="q-mt-lg q-ml-xl q-md-md"
        fit="contain"
      ></q-img>
    <div class="row q-mt-md q-pb-lg">
      <div class="col-4 q-pl-lg">
        <q-list dense>
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
    };
  },
  methods: {
    goHome(){
      this.$router.push('/home')
    },
    goPage(link){
      if(link == 'home'){
        this.navBar = 'one'
        this.$router.push('/home')
      }
      if(link == 'info'){
        this.navBar = 'two'
        this.$router.push('/our_services')
      }
      if(link == 'kontakt'){
        this.navBar = 'three'
        this.$router.push('/contacts')
      }
    }
  }
});
</script>

<style scoped>
.siteLogo{
  transform: scale(0.8) translateX(-14%);
}

footer {
  background-color: white;
}
</style>
