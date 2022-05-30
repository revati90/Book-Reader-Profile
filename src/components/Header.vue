<script setup lang="ts">
defineProps(["title"]);
</script>

<template>
  <header class="navbar-dark bg-success text-white py-3">
    <div class="container text-center p-0">
      <div class="d-inline float-start" v-if="title === 'Edit Profile'">
        <router-link to="/" class="text-white text-decoration-none">
          <i class="bi bi-chevron-left" />Profile
        </router-link>
      </div>
      <div class="d-inline">{{ title }}</div>
    </div>
  </header>
</template>

<style></style>
