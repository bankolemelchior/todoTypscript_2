<template>
  <div>
    <li :class="{completed: todo.completed}">
        <strong>{{ todo.title }} </strong>
        <p>Deadline: {{ todo.deadline }}</p>
        <div class="view">
          <input type="checkbox" name="" id="" class="toggle">
          <label for=""> {{ todo.title }}</label>
          <button class="destroy"></button>
        </div>
      </li>
  </div>
</template>

<script setup lang='ts'>
import type { Todo } from '@/@types';
const props = defineProps<{
  todo: Todo
}>()

</script>

<style scoped></style>