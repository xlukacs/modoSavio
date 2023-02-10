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
    <span class="text-center q-mr-md text-weight-bold text-h6 row">
      <div class="emailItem">
        <q-icon name="email" color="accent" size="1.8em" left />
        <a href="mailto:office@modosavio.sk">office@modosavio.sk</a>
      </div>
      <div class="callItem q-ml-md">
        <q-icon name="call" color="accent" size="1.8em" left />
        <span>+421 905 345 386</span>
      </div>
    </span>
  </q-toolbar>
  <q-separator></q-separator>
  <q-toolbar
    class="row bg-white text-black row"
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
      style="justify-content: space-evenly"
      class="col-8"
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
        <div
          class="row items-center no-wrap q-px-md"
          @click="goPage('kontakt')"
        >
          <q-icon left name="contact_phone"></q-icon>
          <span>KONTAKT</span>
        </div>
      </template>
    </q-btn-toggle>

    <div class="langSelector float-right col-4 row justify-end">
      <!-- <q-img
        src="pic/flags/sk_hd.png"
        :ratio="16/9"
        spinner-color="primary"
        spinner-size="82px"
        width="30px"
        class="q-mr-xs"
        img-class="toolbarFlag"
      /> -->
      <q-btn-toggle
        v-model="langModel"
        toggle-color="accent"
        :options="langOptions"
        disable
      />
    </div>
  </q-toolbar>

  <router-view></router-view>

  <footer class="q-pa-sm">
    <span class="footerContent"> © 2023 BenceDesign TEESEN s.r.o. </span>
    <!-- <div class="row">
      <div class="col-4 text-center">
        <q-img
          src="~assets/pic/modoSavioLogoHD.png"
          spinner-color="accent"
          style="height: 70px; max-width: 376px"
          class="q-mt-lg"
          fit="contain"
        ></q-img>
        <span class="slogan">A nice quote goes here.</span>
      </div>
      <div class="col-4">
        <q-list dense>
          <q-item dense>
            <q-item-section avatar top>
              <q-avatar icon="location_on" text-color="accent"></q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1"
                >MODO SAVIO s.r.o. <br />
                Jazdecká 44, 931 01 Šamorín</q-item-label
              >
            </q-item-section>
          </q-item>

          <q-item dense>
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
                office@modosavio.sk <br />
                IČO: 51 832 411 <br />
                Zápis OR: Okresný súd Trnava, <br />
                oddiel Sro, vložka č. 42670/T <br />
                DIČ: 2120806281
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-4 q-pl-lg siteMap">
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
    </div> -->
  </footer>

  <q-dialog v-model="cookiePrompt" seamless position="bottom">
    <q-card class="cookiePrompt">
      <q-card-section class="row items-center no-wrap">
        <div>
          <div class="text-weight-bold">
            We use cookies to ensure the best experience!
          </div>
        </div>

        <q-space></q-space>

        <q-btn
          flat
          round
          color="negative"
          icon="close"
          v-close-popup
          @click="denyCookies"
        ></q-btn>
        <q-btn
          flat
          round
          color="accent"
          icon="check"
          v-close-popup
          @click="acceptCookies"
        ></q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useAuthStore } from "stores/auth";

import { setCookie, getCookie } from "assets/js/cookies";

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
      ],
      // langModel: ref({
      //   label: "Slovencina",
      //   value: "sk",
      //   flag: ref("pic/flags/sk.png"),
      // }),
      langModel: ref("sk"),
      langOptions: [
        {
          label: "SK",
          value: "sk",
          flag: ref("pic/flags/sk.png"),
        },
        {
          label: "HU",
          value: "hu",
          flag: ref("pic/flags/hu.png"),
        },
        {
          label: "EN",
          value: "en",
          flag: ref("pic/flags/en.png"),
        },
      ],
      cookiePrompt: ref(true),
    };
  },
  methods: {
    acceptCookies() {
      setCookie("cookiePromptViewed", true, 30);
    },
    denyCookies() {
      const store = useAuthStore();
      store.setCookiesPrompt(true);
    },
    goHome() {
      this.$router.push("/home");
    },
    goPage(link) {
      if (link == "home") {
        this.navBar = "one";
        this.$router.push("/home");
      }
      if (link == "info") {
        this.navBar = "two";
        this.$router.push("/our_services");
      }
      if (link == "kontakt") {
        this.navBar = "three";
        this.$router.push("/contacts");
      }
    },
  },
  mounted() {
    let doesCookiePromptExist = getCookie("cookiePromptViewed");

    if (doesCookiePromptExist) this.cookiePrompt = doesCookiePromptExist;
  },
});
</script>

<style scoped lang="scss">
.siteMap {
  h5 {
    padding-left: 0px;
  }
  .q-list {
    .q-item {
      padding-left: 0px;
    }
  }
}
.emailItem {
  a {
    text-decoration: none;
    color: black;
  }
}
footer .row {
  //width: 80%;
  //margin: auto;
}
.slogan {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}
.siteLogo {
  transform: scale(0.8) translateX(-14%);
}

footer {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  .footerContent {
    font-weight: bold;
  }
}

.cookiePrompt {
  margin-bottom: 40px;
  width: 80vw;
}
</style>

<style lang="scss">
body,
#q-app {
  min-height: 100vh !important;
}

#q-app {
  display: flex;
  flex-direction: column;
}
</style>
