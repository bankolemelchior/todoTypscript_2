<template>
  <div>
    <li :class="{completed: todo.completed, editing: editing}">
        <!-- <strong>{{ todo.title }} </strong>
        <p>Deadline: {{ todo.deadline }}</p> -->
        <div class="view">
          <input type="checkbox" name="" id="" class="toggle" v-model="isTodoCompleted">
          <label
          @dblclick="startEditing"
          for=""> {{ todo.title }}</label>
          <button class="destroy" @click="emit('delete-todo', todo)"></button>
        </div>

        <div class="input-container">
          <input 
          @keyup.enter="finishEdit"
          @blur="cancelEdit"
          class="edit" type="text" name="" id="edit-to-input" v-model="editInput">
          <label class="hidden" for="edit-to-input">Editer</label>
        </div>
      </li>
      <!-- <pre>{{ todo }}</pre> -->
  </div>
</template>

<script setup lang='ts'>
import type { Todo } from '@/@types';
import { computed, ref } from 'vue';
const props = defineProps<{
  todo: Todo
}>()

const emit = defineEmits<{
  (e: 'delete-todo', todo: Todo): void
  (e: 'complete-todo', todo: Todo, completeVal: boolean): void
  (e: "edit-todo", todo: Todo, value: string): void
}>()

const isTodoCompleted = computed<boolean>({
  get: () => props.todo.completed,
  set: (newVal :boolean) => emit('complete-todo', props.todo, newVal)
})

const editing = ref<boolean>(false)
//la valeur du nouveau texte
const editText = ref<string>("")

const editInput = computed({
  get: () => props.todo.title,
  set: (val) => editText.value = val
})

function startEditing() {
  editing.value = true;
}

function finishEdit() {
  editing.value = false;

  editTodo();
}

function  editTodo() {
  emit("edit-todo", props.todo, editText.value ) //Emettre un event

  editText.value = "";
}
function cancelEdit() {
  console.log("edit");
  
}

</script>

<style scoped></style>