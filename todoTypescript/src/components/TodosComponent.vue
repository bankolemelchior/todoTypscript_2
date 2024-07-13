<template>
  <div>
    <!-- Header -->
    <TodoHeader @add-todo="addTodo"></TodoHeader>
    <!-- Main -->
    <TodoMain :tasks="todos"></TodoMain>
    <!-- Footer  -->
    <TodoFooter :todos="todos"></TodoFooter>
  </div>
</template>

<script setup lang="ts">
import TodoHeader from './TodoHeader.vue';
import TodoMain from './TodoMain.vue';
import TodoFooter from './TodoFooter.vue';
import { ref } from 'vue';
import type { Todo } from '@/@types';
import { nanoid } from 'nanoid';

// //Interface d'une todo
// interface Todo {
//   id: number
//   title: string
//   deadline: string
//   completed: boolean
// }

const todos = ref<Todo[]>([  {id: "1", title: "Tâche 1",deadline:"2024-07-13", completed: false},
  {id: "2", title: "Tâche 2",deadline:"2024-07-12", completed: true},
  {id: "3", title: "Tâche 3",deadline:"2024-07-15", completed: false},
  {id: "4", title: "Tâche 4",deadline:"2024-07-14", completed: false}]);

const addTodo = (theTodo: string) => {
  todos.value.push({id:nanoid(), title:theTodo, deadline: String(Date.now()), completed:false});
}

</script>

<style scoped></style>
