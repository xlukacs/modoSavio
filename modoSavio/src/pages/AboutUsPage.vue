<template>
  <div class="about-us-page">
    <!-- Green header section -->
    <div class="header-section">
      <h1 class="page-title">O NÁS</h1>
      <p class="subtitle">Sme tu pre Vás</p>
    </div>

    <div class="content-container">
      <!-- Main content box -->
      <div class="content-box">
        <h2 class="section-title">Doplňujúce informácie</h2>

        <div class="info-section">
          <ul class="info-list">
            <li>
              <div class="info-item">
                <strong>Osvedčenia a certifikáty</strong>
                <div class="details certificate-container">
                  <q-img src="pic/MENDELU_certificate.png" class="certificate-img" fit="contain"/>
                </div>
              </div>
            </li>
            <li>
              <div class="info-item">
                <strong>Partneri</strong>
                <div class="details">
                  <div class="partners-grid">
                    <div class="partner" @click="openUrl('https://www.sanac.sk/')">
                      <div class="img-container">
                        <q-img src="pic/softwares/sanac.png" class="partner-img" />
                      </div>
                      <span class="partner-name">SANAC s.r.o.</span>
                    </div>
                    <div class="partner" @click="openUrl('https://www.decont.sk/')">
                      <div class="img-container">
                        <q-img src="pic/softwares/decont.png" class="partner-img" />
                      </div>
                      <span class="partner-name">Decontamination s.r.o.</span>
                    </div>
                    <div class="partner" @click="openUrl('https://www.drystar.sk/')">
                      <div class="img-container">
                        <q-img src="pic/softwares/drystar.png" class="partner-img" />
                      </div>
                      <span class="partner-name">Drystar Slovakia s.r.o.</span>
                    </div>
                    <div class="partner" @click="openUrl('https://www.sanaciesk.sk/')">
                      <div class="img-container">
                        <q-img src="pic/softwares/sanacie.png" class="partner-img" />
                      </div>
                      <span class="partner-name">Sanácie SK s.r.o.</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="info-item">
                <strong>Technická podpora</strong>
                <div class="details">
                  <div class="software-grid">
                    <div class="software" @click="openUrl('https://www.odis.sk/')">
                      <div class="img-container">
                        <q-img src="pic/softwares/odis.png" class="software-img" />
                      </div>
                      <span class="software-name">ODIS s.r.o.</span>
                    </div>
                    <div class="software" @click="openUrl('https://www.kros.sk/hypo/')">
                      <div class="img-container">
                        <q-img src="pic/softwares/kros.png" class="software-img" />
                      </div>
                      <span class="software-name">KROS a.s. (HYPO Znalecký softvér)</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUsPage',
  data() {
    return {
      // Data can be added here if needed
    }
  },
  methods: {
    openUrl(url) {
      window.open(url, '_blank');
    }
  }
}
</script>

<style scoped>
.about-us-page {
  width: 100%;
  background-color: #f5f5f5;
}

.header-section {
  background-color: #2F7337;
  color: white;
  padding: 3rem 0;
  text-align: center;
  margin-bottom: 2rem;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.subtitle {
  font-size: 1.2rem;
  margin-top: 0;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.content-box {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 800px;
}

.section-title {
  color: #3a7d3a;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #3a7d3a;
}

.info-section {
  margin-bottom: 2rem;
}

.info-section h3 {
  color: #333;
  margin-bottom: 1rem;
}

.info-list {
  list-style-type: none;
  padding-left: 0;
}

.info-list li {
  margin-bottom: 2.5rem;
}

.info-item {
  display: flex;
  flex-direction: column;
}

.info-item strong {
  color: #3a7d3a;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.details {
  color: #555;
  margin-left: 0.5rem;
}

/* Certificate styling */
.certificate-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  width: 50%;
  max-height: 500px;
  margin-left: auto;
  margin-right: auto;
}

.certificate-img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Partners grid styling */
.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
  width: 100%;
}

.partner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.partner:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  background-color: #f9f9f9;
}

.img-container {
  width: 150px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.partner-img, .software-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.partner-name {
  color: #3a7d3a;
  font-weight: 500;
  margin-top: 0.5rem;
}

.partner:hover .partner-name {
  text-decoration: underline;
}

/* Software grid styling */
.software-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
  width: 100%;
}

.software {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.software:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  background-color: #f9f9f9;
}

.software-name {
  color: #3a7d3a;
  font-weight: 500;
  margin-top: 0.5rem;
}

.software:hover .software-name {
  text-decoration: underline;
}

a {
  color: #3a7d3a;
  text-decoration: none;
  transition: color 0.3s;
  font-weight: 500;
  margin-top: 0.5rem;
}

a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .header-section {
    padding: 2rem 0;
  }

  .page-title {
    font-size: 2rem;
  }

  .content-box {
    padding: 1.5rem;
  }

  .partners-grid, .software-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }

  .img-container {
    width: 120px;
    height: 100px;
  }

  .certificate-img {
    max-width: 100%;
  }
}
</style>
