<template>
  <q-resize-observer @resize="onResize"></q-resize-observer>

  <q-toolbar class="bg-accent text-white upperToolbar" style="min-height: 40px">
    <q-toolbar-title shrink>
      <span
        class="text-white text-body2 q-mr-md q-ml-xl"
        style="white-space: break-spaces"
      >
        <q-icon name="schedule" size="1.8em" />
        Prac. doba Po - Pia: 9:00 - 17:00 hod. ;
        <span class="mobileNewLine"
          >v urgentných prípadov sme dostupní na telefóne</span
        >
      </span>

      <!-- <span class="text-white text-body2">
        <q-icon name="location_on" size="1.8em" />
        Jazdecká 44, 931 01 Šamorín
      </span> -->
    </q-toolbar-title>
  </q-toolbar>

  <q-toolbar class="bg-white text-black q-py-lg bannerToolbar" inset>
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
        <a
          href="mailto:office@modosavio.sk"
          class="text-black"
          style="text-decoration: none"
          >office@modosavio.sk</a
        >
      </div>
      <div class="callItem q-ml-md">
        <q-icon
          name="call"
          color="accent"
          size="1.8em"
          left
          class="q-mr-none"
        />
        <a
          href="tel:+421 905 345 386"
          class="text-black"
          style="text-decoration: none"
          >+421 905 345 386</a
        >
      </div>
    </span>
  </q-toolbar>

  <q-separator></q-separator>

  <q-toolbar
    class="bg-white text-black navigationToolbar"
    sticky
    style="border-bottom: 1px solid lightgray"
    v-if="!hamburgerMenu"
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
      <q-btn-toggle
        v-model="langModel"
        toggle-color="accent"
        :options="langOptions"
        disable
      />
    </div>
  </q-toolbar>

  <div class="menuMobileController" v-if="hamburgerMenu">
    <q-btn
      flat
      icon="menu"
      class="text-h6 text-white q-mr-lg"
      @click="toggleHamburgerMenu"
    />
  </div>

  <q-toolbar
    class="bg-white text-black navigationHamburgerToolbar"
    sticky
    style="
      border-bottom: 1px solid lightgray;
      overflow: hidden;
      transition: height 200ms;
    "
    v-if="hamburgerMenu"
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
      <q-btn-toggle
        v-model="langModel"
        toggle-color="accent"
        :options="langOptions"
        disable
      />
    </div>
  </q-toolbar>

  <router-view></router-view>

  <footer class="q-pa-sm bg-white text-center text-bold">
    <span class="footerContent"> © 2023 BenceDesign TEESEN s.r.o. </span>
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

import { useMeta } from "quasar";

const metaData = {
  // sets document title
  title: "modosavio",
};

export default defineComponent({
  name: "MainLayout",
  setup() {
    useMeta(metaData);
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
  data() {
    return {
      hamburgerMenu: false,
      isMenuOpen: false,
    };
  },
  methods: {
    toggleHamburgerMenu() {
      var menu = document.getElementsByClassName(
        "navigationHamburgerToolbar"
      )[0];
      if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        menu.style.height = "0px";
      } else {
        menu.classList.add("open");
        menu.style.height = "150px";
      }
    },
    onResize(size) {
      console.log(size);
      if (size.width <= 730) {
        this.hamburgerMenu = true;
      } else {
        this.hamburgerMenu = false;
      }
    },
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

.menuMobileController {
  background: var(--q-accent) !important;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);
}

.navigationHamburgerToolbar {
  height: 0px;
  flex-direction: column;
  padding: 0px;
  min-height: 0px;
  .q-btn-group {
    flex-direction: column;
    width: 100%;
  }
  .langSelector {
    margin-top: 5px;
    margin-bottom: 5px;
    width: auto;
    .q-btn-group {
      flex-direction: row;
      width: auto;
    }
  }
}

//=========================================
@media (max-width: 1024px) {
  .bannerToolbar {
    flex-direction: column;
    .q-toolbar__title {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}

@media (max-width: 730px) {
  .upperToolbar {
    white-space: normal;
    span {
      margin: 0px;
    }
  }
  .mobileNewLine {
    display: block;
    font-size: 0.9em;
  }

  .bannerToolbar {
    padding: 0px;
    .q-toolbar__title {
      padding-right: 0px;
    }
    :not(.q-toolbar__title) {
      justify-content: center;
    }
    .q-img {
      width: 310px !important;
      transform: none;
      margin: auto;
      img {
        object-fit: contain !important;
      }
    }
  }

  //hamburger menu
}
</style>
