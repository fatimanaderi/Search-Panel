<template>
  <q-list bordered class="rounded-borders q-ma-md q-ma-md q-mx-lg-md">
    <q-expansion-item
      icon="explore"
      label="Counter"
      header-class="q-py-lg"
      expand-icon-class="text-primary"
      @before-show="getDataDetails"
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
            {{ findCountry(website.page.country).name }}
          </q-item-label>
          <q-item-label caption>{{ website.page.ip }}</q-item-label>
        </q-item-section>
      </template>
        <CardDetails v-if="Object.keys(searchedDetails).length != 0"  :data="searchedDetails"/>
    </q-expansion-item>
  </q-list>
</template>
<script setup>
import CardDetails from "./CardDetails.vue"
import useSearchDetails from "../composiable/useSearchDetails"
import findCountry from "../composiable/findCountry";
const {getDataDetails ,searchedDetails} =useSearchDetails()
const props = defineProps(["website"]);

</script>