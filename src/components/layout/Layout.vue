<template>
  <q-layout view="hHh lpR fFf">
    <Header @getInput="setInput" />
    <q-page-container>
      <q-page class="q-pa-md">
        <Main :searchedData="searchedData" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import useSearch from "../../composiable/useSearch";
import Main from "../Main.vue";
import Header from "./Header.vue";
const { searchedData  ,getSearchResult} = useSearch();
const setInput =(value)=>{
  getSearchResult(value)
}
</script>