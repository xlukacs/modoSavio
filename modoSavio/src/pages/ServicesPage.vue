<template>
  <div class="bg"></div>
  <div class="row full-width mainContent">
    <div class="column full-width">
      <!-- HEADLINE -->
      <section class="bg-accent q-px-xl q-py-md text-white">
        <div class="row">
          <h5 class="headline q-my-none">NAŠE SLUŽBY</h5>
        </div>
        <div class="row mainInfo anchorNavigation">
          <ul class="q-my-none">
            <li @click="scrollTo('obhliadka')">Obhliadky škôd</li>
            <li @click="scrollTo('riesenieUdalosti')">
              Komplexné riešenie škodových udalostí
            </li>
            <li @click="scrollTo('rizikoveInzinierstvo')">
              Rizikové inžinierstvo
            </li>
          </ul>
        </div>
        <div class="row mainInfo">
          ďalej poskytujeme konzultačnú, analytickú a expertnú činnosť.
        </div>
      </section>

      <!-- MAIN DATA -->
      <div class="mainData q-px-xl">
        <article class="dataSection row">
          <section class="col-8">
            <div class="row">
              <h6
                class="headline text-green-9 q-my-none q-mt-md"
                id="obhliadka"
              >
                OBHLIADKY ŠKÔD
              </h6>
            </div>
            <div class="row mainInfo">
              Objednávateľom týchto služieb môže byť fyzická alebo právnická
              osoba. <br />
              Zorganizujeme a vykonávame spoločnú obhliadku vzniknutej škody s
              poškodeným / zástupcom poškodeného väčšinou na základe poverenia
              poisťovní.
              <br />
              Služba zahŕňa tieto činnosti: <br />
              <ul class="q-mt-none fullRow">
                <li>zdokumentovanie rozsahu vzniknutej škody</li>
                <li>určenie predbežnej príčiny vzniku škody</li>
                <li>odhad predbežnej výšky vzniknutej škody</li>
              </ul>
            </div>
          </section>
          <section class="col-4">
            <div
              class="visibleImage"
              style="background-image: url(pic/services1.jpg)"
            ></div>
          </section>
        </article>

        <article class="dataSection row">
          <section class="col-3 q-mr-md">
            <div
              class="visibleImage"
              style="background-image: url(pic/services2.jpg)"
            ></div>
          </section>
          <section class="col-8">
            <div class="row">
              <h6 class="headline text-green-9 q-my-none" id="riesenieUdalosti">
                KOMPLEXNÉ RIEŠENIE ŠKODOVÝCH UDALOSTÍ
              </h6>
            </div>
            <div class="row mainInfo">
              Ponúkame férový prístup, rýchle a profesionálne jednanie. <br />
              Sme pripravení riešiť škody najmä z nasledujúcich príčin: <br />
              <ul class="q-my-none fullRow">
                <li>požiar a živelné riziká</li>
                <li>vodovodné škody</li>
                <li>odcudzenie vecí</li>
                <li>škody na strojoch a na elektronických zariadeniach</li>
                <li>stavebno-montážne poistenie</li>
                <li>prerušenie alebo obmedzenie prevádzky</li>
                <li>poistenie zodpovednosti za škody</li>
              </ul>
            </div>
            <div class="row mainInfo">
              Od vykonania prvej obhliadky a zhotovenia dokumentácie, cez
              stanovenie príčiny vzniku škody a vyčíslenia jej celkovej výšky,
              až po posúdenie nároku na poistné plnenie podľa uzavretej poistnej
              zmluvy. <br />
              Počas šetrenia s poškodeným prerokujeme aj možné scenáre na
              efektívne odstránenie následkov vzniknutej škody.
              <br />
              <br />
              Podľa potreby sme pripravení zorganizovať aj sanačné práce na
              odstránenie následkov škody.
              <br />
              <br />
              Služba zahŕňa tieto činnosti:
            </div>
            <div class="row mainInfo">
              <ul class="q-mt-none fullRow">
                <li>zdokumentovanie a stanovenie rozsahu vzniknutej škody</li>
                <li>zistenie a určenie príčiny vzniku škody</li>
                <li>
                  posúdenie technického stavu poistenej veci pred vznikom škody
                  (revízia, kontrola, pravidelná údržba, ...)
                </li>
                <li>
                  stanovenie východiskovej a technickej hodnoty poškodenej
                  nehnuteľnosti
                </li>
                <li>kontrola podpoistenia</li>
                <li>vyčíslenie celkovej výšky škody</li>
                <li>stanovenie nákladov na opravu rozpočtom</li>
                <li>
                  posúdenie predloženej faktúry za opravu; kontrola primeranosti
                  nákladov súvisiacich s odstránením škody
                </li>
                <li>
                  posúdenie ekonomickej efektívnosti nákladov na opravu v
                  prípade, že sa nejedná o totálnu škodu
                </li>
                <li>
                  stanovenie hodnoty zvyškov (na predaj / odpad / náhradný diel)
                </li>
                <li>
                  stanovenie právneho základu v zmysle poistnej zmluvy vo vzťahu
                  k nároku na poskytnutie poistného plnenia
                </li>
                <li>
                  skúmanie možnosti regresu a určenie zodpovedného za vznik
                  škody
                </li>
              </ul>
            </div>
          </section>
        </article>

        <article class="dataSection row">
          <section class="col-8">
            <div class="row">
              <h6
                class="headline text-green-9 q-my-none"
                id="rizikoveInzinierstvo"
              >
                RIZIKOVÉ INŽINIERSTVO
              </h6>
            </div>
            <div class="row mainInfo">
              Na základe našich skúseností sme schopní vypracovať rizikové
              správy, vykonať analýzu poistného rizika, poistných hodnôt majetku
              a stanoviť kvantitatívne ukazovatele hroziacej škody. <br />
              <br />
              Odporúčame aj vhodné preventívne opatrenia za účelom zníženia
              pravepodobnosti vzniku škôd v budúcnosti. <br /><br />
              Túto činnosť vykonávame podľa obvyklých medzinárodných štandardov.
            </div>
          </section>
          <section class="col-3 q-ml-md">
            <div
              class="visibleImage"
              style="
                background-image: url(pic/services3.jpg);
                background-position: 0px -90px;
              "
            ></div>
          </section>
        </article>
        <!-- <div class="row special-inset q-mt-lg">
            <h6 class="headline q-my-none">SKRATKY</h6>
          </div>
          <div class="row special-inset">
            <ul class="q-mt-none">
              <li>PML maximálna možná škoda <i>[Possible Maximum Loss]</i></li>
              <li>
                MFL maximálna predpokladaná škoda <i>[Maximum Foreseeble Loss]</i>
              </li>
              <li>NLE normálna očakávaná škoda <i>[Normal Loss Exeptancy]</i></li>
            </ul>
          </div> -->
      </div>
    </div>
  </div>

  <q-btn color="accent" icon="navigation" class="upBtn" @click="goUp" />
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ServicesPage",
  setup() {
    return {};
  },
  methods: {
    goUp() {
      location.hash = "#q-app";
      location.hash = "";
    },
    scrollTo(hash) {
      console.log(hash);
      location.hash = "#" + hash;
      location.hash = "";
    },
  },
});
</script>

<style scoped lang="scss">
.visibleImage {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
}
.dataSection {
  background-color: white;

  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
}
.mainInfo {
  font-size: 1.2em;
}

.headline {
  font-weight: bold;
}

.anchorNavigation ul li {
  cursor: pointer;
}

.anchorNavigation ul li:hover {
  font-weight: bold;
}

.fullRow {
  width: 100%;
}

.special-inset {
  padding-left: 50px;
}

//=============================
@media (max-width: 730px) {
  .mainContent {
    .column {
      section {
        padding: 0px 5px;
      }
      .mainData {
        padding: 0px 5px;
        article {
          flex-direction: column;
          section {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
