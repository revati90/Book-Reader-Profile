<script setup lang="ts">

defineProps(['title']);

</script>

<template>
  <header class="navbar-dark bg-success text-center text-white p-3">
    <div class="row px-2 py-4">
      <div v-if="title !== 'Edit Profile'"></div>
      <div class="col-md-2" v-else><router-link to="/" class="text-white text-decoration-none"><span> &lt; Profile </span></router-link></div>
      <div class="col-md-10 text-center">{{ title }}</div>
    </div>
  </header>
</template>

<style>

</style>
