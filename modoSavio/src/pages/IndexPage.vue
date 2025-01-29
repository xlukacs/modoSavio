<template>
  <div class="index-page">
    <!-- Existing header and navbar code ... -->

    <!-- Hero Section with Carousel -->
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      class="hero-carousel"
    >
      <!-- First Slide -->
      <q-carousel-slide name="1" class="hero-slide">
        <div class="hero-content">
          <div class="text-content">
            <h1 class="main-title">Kvalitné a efektívne riešenie škôd</h1>
            <h2 class="subtitle">s našou odbornosťou</h2>
            <a href="#services" class="cta-button">Naše služby</a>
          </div>
          <div class="image-content">
            <q-img src="pic/waterDamage6.jpg" />
          </div>
        </div>
        <div class="hero-overlay"></div>
      </q-carousel-slide>

      <!-- Second Slide -->
      <q-carousel-slide name="2" class="hero-slide">
        <div class="hero-content">
          <div class="text-content">
            <h1 class="main-title">Komplexné riešenie škôd</h1>
            <h2 class="subtitle">s profesionálnym prístupom</h2>
            <a href="#services" class="cta-button">Naše služby</a>
          </div>
          <div class="image-content">
            <q-img src="pic/fireDamage.jpg" />
          </div>
        </div>
        <div class="hero-overlay"></div>
      </q-carousel-slide>

      <!-- Third Slide -->
      <q-carousel-slide name="3" class="hero-slide">
        <div class="hero-content">
          <div class="text-content">
            <h1 class="main-title">Profesionálny prístup</h1>
            <h2 class="subtitle">s našou odbornosťou</h2>
            <a href="#services" class="cta-button">Naše služby</a>
          </div>
          <div class="image-content">
            <q-img src="pic/naturalDamage2.png" />
          </div>
        </div>
        <div class="hero-overlay"></div>
      </q-carousel-slide>
    </q-carousel>

    <!-- Welcome Section -->
    <section class="welcome-section">
      <div class="container">
        <h2 class="section-title">VITAJTE</h2>
        <div class="welcome-content">
          <p class="welcome-text">Spoločnosť <strong>MODO SAVIO s.r.o.</strong> bola založená v roku 2018 so zameraním na poskytovanie administratívnych služieb.</p>
          <p class="welcome-text">V roku 2022 bola činnosť rozšírená o poskytovanie služieb v oblasti likvidácii škôd z poistenia majetku a zodpovednosti, ďalej o rizikové inžinierstvo a vykonávanie hodnotenia rizík.</p>
          <p class="welcome-text">Odborným garantom pre vysokú úroveň poskytovaných služieb je <strong>Ing. Peter Lukács</strong> s dlhoročnou praxou a skúsenosťami v oblasti poisťovníctva.</p>
        </div>
      </div>
    </section>

    <!-- Declaration Section -->
    <section class="declaration-section">
      <div class="container">
        <h2 class="section-title">PREHLÁSENIE O NEZÁVISLOSTI, NESTRANNOSTI A NEZAUJATOSTI</h2>
        <p class="declaration-text">
          Spoločnosť vyhlasuje, že je bez záväzkov, ktoré by bránili v jej nezávislosti a nestrannosti. Spoločnosť nie je ani z časti vlastnená žiadnou maklérskou spoločnosťou, poisťovňou alebo iným poskytovateľom finančných služieb.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      slide: ref('1'),
      autoplay: ref(true)
    };
  },
});
</script>

<style scoped>
.index-page {
  background-color: #f5f5f5;
}

.hero-carousel {
  height: 60vh;
  min-height: 400px;
  max-height: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.hero-slide {
  padding: 0;
  position: relative;
}

.hero-content {
  height: 100%;
  display: flex;
  position: relative;
  z-index: 2;
}

.text-content {
  flex: 0 0 60%;
  padding: 4rem;
  background-color: #2F7337;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
}

.image-content {
  flex: 0 0 40%;
  position: relative;
  overflow: hidden;
}

.image-content .q-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(47, 115, 55, 0.1);
  z-index: 1;
}

.main-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #ffffff;
  color: #2F7337;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.cta-button:hover {
  background-color: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.section-title {
  color: #2F7337;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.welcome-section {
  background-color: white;
}

.welcome-content {
  max-width: 800px;
  margin: 0 auto;
}

.welcome-text {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #333;
}

.declaration-section {
  background-color: #f8f9fa;
}

.declaration-text {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: #333;
}

@media (max-width: 1024px) {
  .main-title {
    font-size: 2.8rem;
  }
  
  .subtitle {
    font-size: 1.8rem;
  }
  
  .text-content {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-carousel {
    height: 500px;
  }

  .hero-content {
    flex-direction: column;
  }

  .text-content {
    flex: 0 0 60%;
  }

  .image-content {
    flex: 0 0 40%;
  }

  .main-title {
    font-size: 2.2rem;
  }
  
  .subtitle {
    font-size: 1.5rem;
  }

  .cta-button {
    align-self: center;
  }
}
</style>
