<template>
  <main class="main">
    <ul class="todo-list">
      <TodoItem v-for="todo in tasks" :key="todo.id" :todo="todo" 
      @delete-todo="emit('delete-todo', todo)"
      @complete-todo="updateTodo"
      />
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

const emit = defineEmits<{
  (e: 'delete-todo', todo: Todo): void
  (e: 'complete-todo', todo: Todo, completeVal: boolean): void
  (e: "edit-todo", todo: Todo, value: string): void

}>()

function updateTodo(todo: Todo, completedVal: boolean) {
  emit('complete-todo', todo, completedVal)
}

function  editTodo(todo: Todo, value: string) {
  emit("edit-todo", todo, value ) //Emettre un event

}



</script>

<style scoped></style>
