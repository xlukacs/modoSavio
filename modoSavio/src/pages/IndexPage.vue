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
      :transition-duration="800"
      :autoplay-timeout="6000"
      :style="{ height: carouselHeight }"
    >
      <q-carousel-slide v-for="(slide, index) in slides" 
        :key="index" 
        :name="index + 1"
        class="hero-slide"
      >
        <div class="image-wrapper">
          <img :src="slide.img" :alt="slide.title" class="slide-image" />
        </div>
        <div class="content-overlay">
          <div class="text-content">
            <h1 class="main-title">{{ slide.title }}</h1>
            <h2 class="subtitle">{{ slide.subtitle }}</h2>
            <a href="#services" class="cta-button">Naše služby</a>
          </div>
        </div>
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
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const slide = ref(1);
    const autoplay = ref(true);
    const carouselHeight = ref('calc(100vh - 160px)');

    const slides = [
      {
        title: "Kvalitné a efektívne riešenie škôd",
        subtitle: "s našou odbornosťou",
        img: "pic/waterDamage6.jpg"
      },
      {
        title: "Komplexné riešenie škôd",
        subtitle: "s profesionálnym prístupom",
        img: "pic/fireDamage.jpg"
      },
      {
        title: "Profesionálny prístup",
        subtitle: "s našou odbornosťou",
        img: "pic/naturalDamage2.png"
      }
    ];

    const updateCarouselHeight = () => {
      // Get all toolbars
      const upperToolbar = document.querySelector('.q-toolbar.upperToolbar');
      const bannerToolbar = document.querySelector('.q-toolbar.bannerToolbar');
      const navigationToolbar = document.querySelector('.q-toolbar.navigationToolbar');
      
      const totalHeaderHeight = 
        (upperToolbar?.offsetHeight || 0) + 
        (bannerToolbar?.offsetHeight || 0) + 
        (navigationToolbar?.offsetHeight || 0);
      
      // Add a small buffer (e.g., 2px) for any borders/margins
      carouselHeight.value = `calc(100vh - ${totalHeaderHeight + 2}px)`;
    };

    onMounted(() => {
      // Wait a brief moment for the DOM to be fully rendered
      setTimeout(updateCarouselHeight, 100);
      window.addEventListener('resize', updateCarouselHeight);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateCarouselHeight);
    });

    return {
      slide,
      autoplay,
      carouselHeight,
      slides
    };
  },
});
</script>

<style scoped>
.index-page {
  background-color: #f5f5f5;
}

.hero-carousel {
  position: relative;
  overflow: hidden;
}

.hero-slide {
  padding: 0;
  height: 100%;
}

.image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: zoomEffect 10s linear infinite;
}

@keyframes zoomEffect {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.content-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    rgba(47, 115, 55, 0.9) 0%, 
    rgba(47, 115, 55, 0.8) 50%, 
    rgba(47, 115, 55, 0.4) 100%
  );
  display: flex;
  align-items: center;
}

.text-content {
  padding-left: 10%;
  max-width: 800px;
  color: white;
}

.main-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: white;
  color: #2F7337;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

/* Update Carousel Navigation Styles */
.hero-carousel :deep(.q-carousel__navigation) {
  bottom: 2rem;
  /* width: 100%; */
}

.hero-carousel :deep(.q-carousel__navigation-inner) {
  justify-content: center;
  gap: 8px;
}

.hero-carousel :deep(.q-carousel__navigation-icon--active),
.hero-carousel :deep(.q-carousel__navigation-icon--inactive) {
  font-size: 12px;
  color: white;
  opacity: 0.7;
}

.hero-carousel :deep(.q-carousel__navigation-icon--active) {
  opacity: 1;
}

/* Update Carousel Control Arrows */
.hero-carousel :deep(.q-carousel__control) {
  background: transparent;
  color: white;
  font-size: 2rem;
  margin: 0 1rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.hero-carousel :deep(.q-carousel__control:hover) {
  opacity: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.section-title {
  color: #2F7337;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  padding-bottom: 1rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: #2F7337;
}

.welcome-section {
  background-color: white;
  padding: 5rem 0;
}

.welcome-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.welcome-text {
  margin-bottom: 2rem;
  line-height: 1.8;
  color: #444;
  font-size: 1.1rem;
}

.welcome-text strong {
  color: #2F7337;
  font-weight: 600;
}

.declaration-section {
  background-color: #f8f9fa;
  padding: 5rem 0;
}

.declaration-text {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 3rem;
  line-height: 1.8;
  color: #444;
  font-size: 1.1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
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
  .content-overlay {
    background: linear-gradient(0deg, 
      rgba(47, 115, 55, 0.9) 0%, 
      rgba(47, 115, 55, 0.7) 100%
    );
  }

  .text-content {
    padding: 2rem;
    text-align: center;
    margin: 0 auto;
  }

  .main-title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.4rem;
  }

  .cta-button {
    align-self: center;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .welcome-section,
  .declaration-section {
    padding: 3rem 0;
  }

  .welcome-content,
  .declaration-text {
    padding: 0 1.5rem;
  }

  .declaration-text {
    padding: 1.5rem;
  }

  .welcome-text,
  .declaration-text {
    font-size: 1rem;
    line-height: 1.6;
  }
}
</style>
