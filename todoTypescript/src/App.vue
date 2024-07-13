<template>
  <div>
    <!-- <Navigation></Navigation> -->

    <TodoView></TodoView>

    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import TodoView from './views/TodoView.vue';
import Navigation from './components/NavPage.vue'
</script>

<style scoped></style>
