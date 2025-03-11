<template>
  <q-resize-observer @resize="onResize"></q-resize-observer>

  <!-- Green top bar -->
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

  <!-- Logo and contact info -->
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

  <!-- Clean Simple Navbar -->
  <div class="clean-navbar" v-if="!hamburgerMenu">
    <div class="navbar-inner">
      <div
        class="nav-link"
        :class="{ active: activeRoute === 'home' }"
        @click="goPage('home')"
      >
        <q-icon name="home" size="xs" class="q-mr-xs nav-icon" />
        PROFIL SPOLOČNOSTI
      </div>
      <div
        class="nav-link"
        :class="{ active: activeRoute === 'info' }"
        @click="goPage('info')"
      >
        <q-icon name="info" size="xs" class="q-mr-xs nav-icon" />
        NAŠE SLUŽBY
      </div>
      <div
        class="nav-link"
        :class="{ active: activeRoute === 'kontakt' }"
        @click="goPage('kontakt')"
      >
        <q-icon name="contact_phone" size="xs" class="q-mr-xs nav-icon" />
        KONTAKT
      </div>
      <div
        class="nav-link"
        :class="{ active: activeRoute === 'aboutus' }"
        @click="goPage('aboutus')"
      >
        <q-icon name="info" size="xs" class="q-mr-xs nav-icon" />
        O NÁS
      </div>
    </div>
  </div>

  <!-- Mobile Menu Button -->
  <div class="mobile-navbar" v-if="hamburgerMenu">
    <div class="mobile-navbar-inner">
      <div class="mobile-nav-title">MENU</div>
      <q-btn
        flat
        dense
        icon="menu"
        color="accent"
        @click="toggleMobileMenu"
      />
    </div>
  </div>

  <!-- Mobile Navigation -->
  <div class="mobile-menu" :class="{ 'menu-open': mobileMenuOpen }" v-if="hamburgerMenu">
    <div class="mobile-nav-item" :class="{ active: activeRoute === 'home' }" @click="goPageMobile('home')">
      <q-icon name="home" />
      <span>PROFIL SPOLOČNOSTI</span>
    </div>
    <div class="mobile-nav-item" :class="{ active: activeRoute === 'info' }" @click="goPageMobile('info')">
      <q-icon name="info" />
      <span>NAŠE SLUŽBY</span>
    </div>
    <div class="mobile-nav-item" :class="{ active: activeRoute === 'kontakt' }" @click="goPageMobile('kontakt')">
      <q-icon name="contact_phone" />
      <span>KONTAKT</span>
    </div>
    <div class="mobile-nav-item" :class="{ active: activeRoute === 'aboutus' }" @click="goPageMobile('aboutus')">
      <q-icon name="info" />
      <span>O NÁS</span>
    </div>
  </div>

  <div class="page-content">
    <router-view></router-view>
  </div>

  <footer class="footer">
    <div class="footer-content">
      <span class="copyright">© {{ currentYear }} BenceDesign TEESEN s.r.o.</span>
    </div>
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
import { defineComponent, ref, computed } from "vue";
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
    const currentYear = computed(() => new Date().getFullYear());

    return {
      url,
      cookiePrompt: ref(true),
      currentYear,
    };
  },
  data() {
    return {
      hamburgerMenu: false,
      mobileMenuOpen: false,
      activeRoute: 'home'
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    onResize(size) {
      console.log(size);
      if (size.width <= 730) {
        this.hamburgerMenu = true;
      } else {
        this.hamburgerMenu = false;
        this.mobileMenuOpen = false;
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
      this.activeRoute = 'home';
    },
    goPage(link) {
      this.activeRoute = link;

      if (link == "home") {
        this.$router.push("/home");
      }
      if (link == "info") {
        this.$router.push("/our_services");
      }
      if (link == "kontakt") {
        this.$router.push("/contacts");
      }
      if (link == "aboutus") {
        this.$router.push("/aboutus");
      }
    },
    goPageMobile(link) {
      this.goPage(link);
      this.mobileMenuOpen = false;
    }
  },
  mounted() {
    let doesCookiePromptExist = getCookie("cookiePromptViewed");

    if (doesCookiePromptExist) this.cookiePrompt = doesCookiePromptExist;

    // Set active route based on current path
    const path = this.$router.currentRoute.value.path;
    if (path.includes('home') || path === '/') {
      this.activeRoute = 'home';
    } else if (path.includes('our_services')) {
      this.activeRoute = 'info';
    } else if (path.includes('contacts')) {
      this.activeRoute = 'kontakt';
    } else if (path.includes('aboutus')) {
      this.activeRoute = 'aboutus';
    }
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

.footer {
  background-color: white;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: auto;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 0.9rem;
}

.copyright {
  font-weight: 500;
}

.cookiePrompt {
  margin-bottom: 40px;
  width: 80vw;
}

/* Clean Navbar Styling */
.clean-navbar {
  background-color: white;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
}

.navbar-inner {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  height: 60px;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  height: 100%;
  position: relative;
}

.nav-link:hover {
  color: #2F7337;
}

.nav-link:hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #2F7337;
  transform: scaleX(1);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #2F7337;
  transform: scaleX(0);
  transition: transform 0.3s;
}

.nav-link.active {
  color: #2F7337;
  font-weight: 600;
}

.nav-link.active::after {
  transform: scaleX(1);
}

/* Mobile Navbar */
.mobile-navbar {
  background-color: white;
  height: 50px;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
}

.mobile-navbar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 100%;
}

.mobile-nav-title {
  color: #333;
  font-weight: 600;
  font-size: 16px;
}

/* Mobile Menu */
.mobile-menu {
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  z-index: 99;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
}

.mobile-menu.menu-open {
  transform: translateY(0);
}

.mobile-nav-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.mobile-nav-item:hover {
  background-color: #f5f5f5;
}

.mobile-nav-item.active {
  color: #2F7337;
  font-weight: bold;
  border-left: 3px solid #2F7337;
}

.mobile-nav-item .q-icon {
  margin-right: 10px;
}

.page-content {
  min-height: 400px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .nav-link {
    padding: 0 10px;
    font-size: 13px;
  }
}

@media (max-width: 1024px) {
  .bannerToolbar {
    flex-direction: column;
    .q-toolbar__title {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .nav-link {
    padding: 0 1rem;
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
}

.nav-icon {
  font-size: 16px;
  margin-right: 6px;
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
