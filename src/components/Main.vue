<script setup>
import Navbar from "./layout/Navbar.vue";
import useSearch from "../composiable/Search";
const {searchedData} = useSearch();
</script>

<template>
  <q-page>
    <Navbar />
    <h6 class="text-center text-bold" v-if="!searchedData">
      شما هنوز عبارت خود را جست وجو نکرده اید!
    </h6>
    <div v-else>
      <div v-for="item in searchedData.results">
      {{ item.task.domain }}
    </div>
    </div>
  </q-page>
</template>

<style scoped></style>
