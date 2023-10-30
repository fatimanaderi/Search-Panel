<template>
  <q-card v-if="Object.keys(data).length != 0">
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
            <div class="q-mr-sm">کشور : {{ data.country_name }}</div>
            <img
              v-if="imageLoading"
              class="flag-img"
              :src="data.location.flag"
              @load="imageLoading = false"
            />
            <div v-else>{{ findCountry(data.country_code).flag }}</div>
          </div>
          <div class="row items-center">
            <div class="">قاره : {{ data.continent_name }}</div>
            <div class="q-mx-sm">منطقه : {{ data.region_name }}</div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { ref, watch } from "vue";
import findCountry from "../composiable/findCountry";
const imageLoading = ref(false);
const props = defineProps(["data"]);
watch(props.data?.location?.flag, (newValue, oldValue) => {
  imageLoading.value = true;
  console.log("okay")
});
</script>
