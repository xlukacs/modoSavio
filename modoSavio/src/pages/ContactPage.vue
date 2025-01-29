<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="main-title">KONTAKT</h1>
        <p class="subtitle">Sme tu pre Vás</p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Info Card -->
          <div class="contact-card">
            <h2 class="section-title">Kontaktné údaje</h2>
            
            <div class="contact-info">
              <div class="info-item">
                <div class="icon-wrapper">
                  <q-icon name="location_on" size="2rem" color="accent" />
                </div>
                <div class="info-text">
                  <strong>Adresa</strong>
                  <p>MODO SAVIO s.r.o.<br>Jazdecká 44, 931 01 Šamorín</p>
                </div>
              </div>

              <div class="info-item">
                <div class="icon-wrapper">
                  <q-icon name="call" size="2rem" color="accent" />
                </div>
                <div class="info-text">
                  <strong>Telefón</strong>
                  <p><a href="tel:+421905345386">+421 905 345 386</a></p>
                </div>
              </div>

              <div class="info-item">
                <div class="icon-wrapper">
                  <q-icon name="mail" size="2rem" color="accent" />
                </div>
                <div class="info-text">
                  <strong>Email</strong>
                  <p><a href="mailto:office@modosavio.sk">office@modosavio.sk</a></p>
                </div>
              </div>
            </div>
          </div>

          <!-- Company Info Card -->
          <div class="contact-card">
            <h2 class="section-title">Firemné údaje</h2>
            <div class="company-info">
              <p>Spoločnosť je vedená obchodným registrom Okresného súdu Trnava, oddiel Sro, Vložka č. 42670/T.</p>
              
              <div class="info-grid">
                <div class="info-group">
                  <strong>IČO:</strong>
                  <span>51 832 411</span>
                </div>
                <div class="info-group">
                  <strong>DIČ:</strong>
                  <span>2120806281</span>
                </div>
                <div class="info-group">
                  <strong>IČ DPH:</strong>
                  <span>SK2120806281</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactPage",
});
</script>

<style scoped lang="scss">
.contact-page {
  background-color: #f5f5f5;
}

.hero-section {
  background-color: #2F7337;
  padding: 2.5rem 2rem;
  color: white;
  text-align: center;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.contact-section {
  padding: 3rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.contact-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.section-title {
  color: #2F7337;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #2F7337;
  }
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  .icon-wrapper {
    width: 48px;
    height: 48px;
    background: rgba(47, 115, 55, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .info-text {
    flex: 1;
    strong {
      display: block;
      color: #2F7337;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }

    p {
      margin: 0;
      color: #444;
      font-size: 1.1rem;
      line-height: 1.5;
    }

    a {
      color: #444;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #2F7337;
      }
    }
  }
}

.company-info {
  p {
    color: #444;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
}

.info-grid {
  display: grid;
  gap: 1rem;
}

.info-group {
  display: flex;
  gap: 1rem;
  align-items: center;
  
  strong {
    color: #2F7337;
    min-width: 80px;
  }

  span {
    color: #444;
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 1rem;
  }

  .main-title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .contact-section {
    padding: 2rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .contact-card {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 320px) {
  .info-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;

    .icon-wrapper {
      width: 40px;
      height: 40px;
    }
  }

  .section-title::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .info-group {
    flex-direction: column;
    gap: 0.25rem;
    text-align: center;

    strong {
      min-width: auto;
    }
  }
}
</style>
