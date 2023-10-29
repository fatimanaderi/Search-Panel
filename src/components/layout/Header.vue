<template>
  <q-header flat class="bg-primary text-black">
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar>
          <img
            src="data:image/png;base64,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"
          />
        </q-avatar>
        <span class="text-secondary text-bold"> رجاء </span>
        <q-toggle
          v-on:update:model-value="toggleMode"
          v-model="themeMode"
          color="secondary"
          :icon="themeMode == true ? 'light_mode' : 'nightlight'"
        />
      </q-toolbar-title>
      <q-form @submit="getSearchResult(input)" @reset="onReset" class="w-80">
        <q-input
          class="w-full rounded-borders"
          color="grey-3"
          label-color="secondary"
          outlined
          dense
          v-model="input"
          label="عبارت خود را وارد نمایید"
        >
          <template v-slot:append>
            <q-icon name="search" color="secondary" type="submit" />
          </template>
        </q-input>
      </q-form>
    </q-toolbar>
  </q-header>
</template>
<script setup>
import { ref } from "vue";
import useSearch from "../../composiable/Search";
import { useQuasar } from "quasar";

const { getSearchResult } = useSearch();
const input = ref("");
const onReset = () => {
  console.log("rest")
  input.value = null
};

const q = useQuasar();
const themeMode = ref(true);
const toggleMode = () => q.dark.toggle();
</script>
