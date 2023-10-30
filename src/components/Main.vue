<script setup>
import Navbar from "./layout/Navbar.vue";
import useSearch from "../composiable/Search";
import Card from "./Card.vue"
const { searchedData } = useSearch();
</script>

<template>
  <q-page>
    <Navbar />
    <h6 class="text-center text-bold" v-if="Object.keys(searchedData).length == 0">
      شما هنوز عبارت خود را جست وجو نکرده اید!
    </h6>
    <div class="q-mt-xl row" v-else>
      <div class="col-12" v-for="item in searchedData.results">
       <Card :website="item" :key="item._id"/>
      </div>
    </div>
  </q-page>
</template>
