<template>
  <main class="main">
    <ul class="todo-list">
      <!-- <li :class="{completed: todo.completed}" v-for="todo in tasks" :key="todo.id">
        <strong>{{ todo.title }} </strong>
        <p>Deadline: {{ todo.deadline }}</p>
        <div class="view">
          <input type="checkbox" name="" id="" class="toggle">
          <label for=""> {{ todo.title }}</label>
          <button class="destroy"></button>
        </div>
      </li> -->
      <TodoItem v-for="todo in tasks" :key="todo.id" :todo="todo"/>
    </ul>
  </main>
</template>

<script setup lang="ts">
import 'todomvc-app-css/index.css';
import TodoItem from '@/components/TodoItem.vue';
import type { Todo } from '@/@types';

const props = defineProps<{
  tasks: Todo[]
}>();


</script>

<style scoped></style>
