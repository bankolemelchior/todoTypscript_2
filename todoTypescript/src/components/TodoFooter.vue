<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{ remaining }}</strong> tâche{{ remaining > 1 ? 's' : '' }} restante{{ remaining > 1 ? 's': '' }}
    </span>
    

    <ul class="filters">
      <li>
        <RouterLink to="#">Tous</RouterLink>
      </li>
      <li>
        <RouterLink to="#">En cours</RouterLink>
      </li>
      <li>
        <RouterLink to="#">Terminés</RouterLink>
      </li>
    </ul>

    <button class="clear-completed">Eff. tâches terminées</button>

  </footer>
</template>

<script setup lang="ts">
import { ref, computed} from 'vue';
import type { Todo } from '@/@types';

const props = defineProps<{
  todos : Todo[]
}>()

const remaining = computed(() => props.todos.filter(el  => !el.completed).length);

</script>

<style scoped></style>
