<script setup lang="ts">

defineProps(['title']);

</script>

<template>
  <header class="navbar-dark bg-success text-center text-white p-3">
    <div class="row p-4">
      <router-link to="/" class="col-2 text-white text-decoration-none">
        <span> &lt; Profile </span>
      </router-link>
      <div class="col-10 text-center">{{ title }}</div>
      </div>
  </header>
</template>

<style>

</style>
