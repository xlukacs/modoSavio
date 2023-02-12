<template>
  <div class="bg"></div>

  <div class="column mainWrapper">
    <h6 class="contactUsAtH6">Kontaktuje nás na:</h6>
    <div class="data" style="font-size: 1.2em">
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
            <q-item-label lines="1"> office@modosavio.sk <br /> </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <span class="q-my-xs block q-mt-xl" style="width: 90%; margin: auto">
        Spoločnosť je vedená obchodným registrom Okresného súdu Trnava, oddiel
        Sro, Vložka č. 42670/T.<br />

        IČO: 51 832 411 <br />
        DIČ: 2120806281
      </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactPage",
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.mainWrapper {
  margin: auto;
  .data {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
  }
}

.contactUsAtH6 {
  text-align: center;
}
</style>
