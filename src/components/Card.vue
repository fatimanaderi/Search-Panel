<template>
  <q-list bordered class="rounded-borders q-ma-md q-ma-md q-mx-lg-md">
    <q-expansion-item
      icon="explore"
      label="Counter"
      header-class="bg-indigo-1 q-py-lg"
      expand-icon-class="text-primary"
    >
      <template v-slot:header class="row">
        <q-item-section class="col-12 col-sm-3 col-md-2" thumbnail>
          <q-img
            :src="website.screenshot"
            spinner-color="primary"
            class="w-100"
          />
        </q-item-section>

        <q-item-section class="col-12 col-sm-9 col-md-8 q-pa-md">
          <q-item-label class="text-bold">
            <a :href="website.task.url" target="_blank">
              {{ website.page.title }}</a
            >
          </q-item-label>
          <q-item-label caption> {{ website.task.domain }}</q-item-label>
          <q-item-label caption> {{ website.page.asnname }}</q-item-label>
        </q-item-section>

        <q-item-section class="col-12 col-sm-12 col-md-2" side>
          <q-item-label>
            {{ new Date(website.task.time).toLocaleDateString("fa-IR") }}
          </q-item-label>
          <q-item-label>
            {{ findCountry(website.page.country) }}
          </q-item-label>
          <q-item-label caption>{{ website.page.ip }}</q-item-label>
        </q-item-section>
      </template>
      <CardDetails/>
    </q-expansion-item>
  </q-list>
</template>
<script setup>
import { country } from "../data/country.js";
import CardDetails from "./CardDetails.vue"
const props = defineProps(["website"]);
let findCountry = (cca2) => {
  let filteredCountry = country.filter((item) => item.cca2 == cca2);
  return filteredCountry[0].name;
};
</script>
<style>
.w-100 {
  width: 100%;
  height: auto;
  max-width: 200px;
}
.q-item__section--thumbnail img {
  width: 100%;
  height: auto;
}

@media (max-width: 1024px) {
  .q-item {
    flex-wrap: wrap;
  }
  [dir="rtl"] .q-item > .q-focus-helper + .q-item__section--thumbnail {
    margin-right: 0;
  }
}
</style>
