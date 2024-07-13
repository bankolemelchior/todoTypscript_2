<template>
  <div>
    <!-- <Navigation></Navigation> -->

    <header>
      <RouterLink to="/">
        <h1>Todos</h1>
      </RouterLink>
    </header>
    <input
      class="new-todo"
      type="text"
      name=""
      id=""
      placeholder="Votre tâche"
      autofocus
      autocomplete="off"
      @keyup.enter="
      emit('add-todo', ($event.target as HTMLInputElement).value);
      ($event.target as HTMLInputElement).value = ''
      "
    />

    <!-- <div>
      <input type="datetime" name="" id="">
    </div> -->
  </div>
</template>

<script setup lang="ts">
import Navigation from './NavPage.vue';

const emit = defineEmits<{
  (e: 'add-todo', value:string): void
  
}>()
</script>

<style scoped></style>
