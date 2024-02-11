<template>
  <v-toolbar density="compact" title="IR Lab SoSe 2023/24">
    <v-tabs v-if="!is_mobile">
      <v-tab to="/ir-lab-sose-23/">About</v-tab>
      <v-tab to="/ir-lab-sose-23/milestones">Milestones</v-tab>
      <v-tab to="/ir-lab-sose-23/topics">Browse Topics</v-tab>
      <v-tab to="/ir-lab-sose-23/docs">Browse Documents</v-tab>
      <v-tab to="/ir-lab-sose-23/runs">Browse Runs</v-tab>
      <!--<v-tab to="/ir-lab-sose-23/qrels">Browse Qrels</v-tab>-->
    </v-tabs>
    <v-menu v-if="is_mobile">
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-menu" v-bind="props"></v-btn>
      </template>
      <v-list>
        <v-list-item to="/ir-lab-sose-23/">About</v-list-item>
        <v-list-item to="/ir-lab-sose-23/milestones">Milestones</v-list-item>
        <v-list-item to="/ir-lab-sose-23/topics">Browse Topics</v-list-item>
        <v-list-item to="/ir-lab-sose-23/docs">Browse Documents</v-list-item>
        <v-list-item to="/ir-lab-sose-23/runs">Browse Runs</v-list-item>
        <!--<v-list-item to="/ir-lab-sose-23/qrels">Browse Qrels</v-list-item>-->
      </v-list>
    </v-menu>
  </v-toolbar>
  <router-view />
</template>

<script lang="ts">
import {ref} from 'vue'
import {is_mobile} from "@/main";

export default {
  data: () => ({
    text: 'loading...',
    is_mobile: is_mobile(),
  }),
  computed: {
    currentRouteName() {
      return this.$route;
    },
    urlSuffix() {
      return (ref(window.location).value.href + '?').split('?')[1]
    }
  }
}
</script>
