<template>
  <q-card>
    <q-card-section>
      <div class="q-pa-sm text-grey-7">
        <div class="row items-center justify-between">
          <div class="text-h5 q-mt-sm q-mb-xs text-grey-9">
            شهر : {{ data.city }}
          </div>
          <div>{{ data.ip }}</div>
        </div>
        <div>
          <div class="row items-center">
            <div class="q-mx-sm">کشور : {{ data.country_name }}</div>
            <!-- img doesnt exist or loading img -->
            <img
              v-if="imageLoading"
              class="flag-img"
              :src="imgsrc"
              @load="imageLoading = false"
              @error="imageLoading = false"
            />
            <div v-else>{{ findCountry(data.country_code).flag }}</div>
          </div>
          <div class="row items-center">
            <div class="q-mx-sm">قاره : {{ data.continent_name }}</div>
            <div>منطقه : {{ data.region_name }}</div>
          </div>
        </div>
        <div class=" w-map">
          <NeshanMap
            mapKey="web.5b396628f36349f9a07e3c55ba624a38"
            :center="{
              latitude: data.latitude,
              longitude: data.longitude,
            }"
            :zoom="12"
            :scale="0.8"
          />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import NeshanMap from "@neshan-maps-platform/vue3-openlayers";
import findCountry from "../composiable/findCountry";
const imageLoading = ref(false);
const props = defineProps(["data"]);
const imgsrc = ref(props.data?.location?.flag);
onMounted(() => {
  imageLoading.value = true;
});
watch(imgsrc, () => {
  imageLoading.value = true;
});
</script>
<style>
.w-map {
  width: 100%;
  height: 300px;
  margin-top: 20px;
}
</style>
