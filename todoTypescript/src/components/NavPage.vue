<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/todo">Todo</RouterLink>
        <RouterLink to="/agenda">Agenda</RouterLink>
        <RouterLink to="/calendrier">Calendrier</RouterLink>
        <RouterLink to="/note">Note</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
/* nav {
  background-color: black;
  padding-block: .2rem;
}

ul li a{
  color: aliceblue;
  text-decoration: none;
  margin: 1rem;
} */

/* li {
  list-style: none;
  margin-block: 1.5rem;
} */
</style>
