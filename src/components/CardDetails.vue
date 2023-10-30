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
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import findCountry from "../composiable/findCountry";
const imageLoading = ref(false);
const props = defineProps(["data"]);
const imgsrc =ref(props.data?.location?.flag);
onMounted(() => {
  imageLoading.value = true
});
watch(imgsrc, () => {
  imageLoading.value = true;
});
</script>
