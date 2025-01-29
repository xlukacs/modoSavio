<template>
  <div class="services-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="main-title">NAŠE SLUŽBY</h1>
        <div class="services-nav">
          <button 
            v-for="service in services" 
            :key="service.id"
            @click="scrollTo(service.id)"
            class="nav-button"
          >
            {{ service.title }}
          </button>
        </div>
        <p class="subtitle">ďalej poskytujeme konzultačnú, analytickú a expertnú činnosť.</p>
      </div>
    </section>

    <!-- Services Content -->
    <div class="services-content">
      <!-- Obhliadky Section -->
      <section class="service-section" id="obhliadka">
        <div class="container">
          <div class="service-grid">
            <div class="service-text">
              <h2 class="section-title">OBHLIADKY ŠKÔD</h2>
              <p>Objednávateľom týchto služieb môže byť fyzická alebo právnická osoba.</p>
              <p>Zorganizujeme a vykonávame spoločnú obhliadku vzniknutej škody s poškodeným / zástupcom poškodeného väčšinou na základe poverenia poisťovní.</p>
              <p>Služba zahŕňa tieto činnosti:</p>
              <ul>
                <li>zdokumentovanie rozsahu vzniknutej škody</li>
                <li>určenie predbežnej príčiny vzniku škody</li>
                <li>odhad predbežnej výšky vzniknutej škody</li>
              </ul>
            </div>
            <div class="service-image">
              <img src="pic/services1.jpg" alt="Obhliadky škôd" />
            </div>
          </div>
        </div>
      </section>

      <!-- Komplexné riešenie Section -->
      <section class="service-section bg-light" id="riesenieUdalosti">
        <div class="container">
          <div class="service-grid reverse">
            <div class="service-image">
              <img src="pic/services2.jpg" alt="Komplexné riešenie" />
            </div>
            <div class="service-text">
              <h2 class="section-title">KOMPLEXNÉ RIEŠENIE ŠKODOVÝCH UDALOSTÍ</h2>
              <p>Ponúkame férový prístup, rýchle a profesionálne jednanie.</p>
              <p>Sme pripravení riešiť škody najmä z nasledujúcich príčin:</p>
              <ul class="services-list">
                <li>požiar a živelné riziká</li>
                <li>vodovodné škody</li>
                <li>odcudzenie vecí</li>
                <li>škody na strojoch a na elektronických zariadeniach</li>
                <li>stavebno-montážne poistenie</li>
                <li>prerušenie alebo obmedzenie prevádzky</li>
                <li>poistenie zodpovednosti za škody</li>
              </ul>
              <p>Od vykonania prvej obhliadky a zhotovenia dokumentácie, cez stanovenie príčiny vzniku škody a vyčíslenia jej celkovej výšky, až po posúdenie nároku na poistné plnenie podľa uzavretej poistnej zmluvy.</p>
              <p>Počas šetrenia s poškodeným prerokujeme aj možné scenáre na efektívne odstránenie následkov vzniknutej škody.</p>
              <p>Podľa potreby sme pripravení zorganizovať aj sanačné práce na odstránenie následkov škody.</p>
              <p>Služba zahŕňa tieto činnosti:</p>
              <ul>
                <li>zdokumentovanie a stanovenie rozsahu vzniknutej škody</li>
                <li>zistenie a určenie príčiny vzniku škody</li>
                <li>posúdenie technického stavu poistenej veci pred vznikom škody (revízia, kontrola, pravidelná údržba, ...)</li>
                <li>stanovenie východiskovej a technickej hodnoty poškodenej nehnuteľnosti</li>
                <li>kontrola podpoistenia</li>
                <li>vyčíslenie celkovej výšky škody</li>
                <li>stanovenie nákladov na opravu rozpočtom</li>
                <li>posúdenie predloženej faktúry za opravu; kontrola primeranosti nákladov súvisiacich s odstránením škody</li>
                <li>posúdenie ekonomickej efektívnosti nákladov na opravu v prípade, že sa nejedná o totálnu škodu</li>
                <li>stanovenie hodnoty zvyškov (na predaj / odpad / náhradný diel)</li>
                <li>stanovenie právneho základu v zmysle poistnej zmluvy vo vzťahu k nároku na poskytnutie poistného plnenia</li>
                <li>skúmanie možnosti regresu a určenie zodpovedného za vznik škody</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Rizikové inžinierstvo Section -->
      <section class="service-section" id="rizikoveInzinierstvo">
        <div class="container">
          <div class="service-grid">
            <div class="service-text">
              <h2 class="section-title">RIZIKOVÉ INŽINIERSTVO</h2>
              <p>Na základe našich skúseností sme schopní vypracovať rizikové správy, vykonať analýzu poistného rizika, poistných hodnôt majetku a stanoviť kvantitatívne ukazovatele hroziacej škody.</p>
              <p>Odporúčame aj vhodné preventívne opatrenia za účelom zníženia pravepodobnosti vzniku škôd v budúcnosti.</p>
              <p>Túto činnosť vykonávame podľa obvyklých medzinárodných štandardov.</p>
            </div>
            <div class="service-image">
              <img src="pic/services3.jpg" alt="Rizikové inžinierstvo" />
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Scroll to top button -->
    <q-btn
      color="accent"
      icon="navigation"
      class="scroll-top-btn"
      @click="goUp"
      v-show="showScrollTop"
    />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "ServicesPage",
  setup() {
    const showScrollTop = ref(false);
    const services = [
      { id: 'obhliadka', title: 'Obhliadky škôd' },
      { id: 'riesenieUdalosti', title: 'Komplexné riešenie škodových udalostí' },
      { id: 'rizikoveInzinierstvo', title: 'Rizikové inžinierstvo' }
    ];

    const checkScroll = () => {
      showScrollTop.value = window.scrollY > 300;
    };

    onMounted(() => {
      window.addEventListener('scroll', checkScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', checkScroll);
    });

    return {
      services,
      showScrollTop
    };
  },
  methods: {
    goUp() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
});
</script>

<style scoped lang="scss">
.services-page {
  background-color: #f5f5f5;
}

.hero-section {
  background-color: #2F7337;
  padding: 4rem 2rem;
  color: white;
  text-align: center;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
}

.main-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.services-nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.nav-button {
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    background: white;
    color: #2F7337;
  }
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.service-section {
  padding: 5rem 0;

  &.bg-light {
    background-color: white;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.service-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  &.reverse {
    direction: rtl;
    .service-text {
      direction: ltr;
    }
  }
}

.service-text {
  h2 {
    color: #2F7337;
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #444;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding-left: 0;

    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
      color: #444;

      &:before {
        content: "•";
        color: #2F7337;
        position: absolute;
        left: 0;
      }
    }
  }
}

.service-image {
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
}

.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 99;
}

@media (max-width: 1024px) {
  .main-title {
    font-size: 2.5rem;
  }

  .service-grid {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .service-grid {
    grid-template-columns: 1fr;
    gap: 2rem;

    &.reverse {
      direction: ltr;
    }
  }

  .service-image img {
    height: 300px;
  }

  .nav-button {
    width: 100%;
  }

  .service-text h2 {
    font-size: 1.8rem;
  }
}
</style>
