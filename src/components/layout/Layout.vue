<template>
  <q-layout view="hHh lpR fFf">
    <Header/>
    <q-page-container>
      <Main/>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import Main from "../Main.vue";
import Header from "./Header.vue"

</script>
<style>
.w-80{
  width: 60%;
}
</style>