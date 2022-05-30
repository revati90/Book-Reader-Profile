<script setup lang="ts">
</script>

<template>
  <footer class="fixed-bottom bg-light bottom-0 w-100">
    <div class="row p-4">
      <div class="col-6 text-center">
        <router-link to="#" class="d-flex flex-column text-decoration-none">
          <i class="bi-search"></i>
          <span>Explore</span>
        </router-link>
      </div>
      <div class="col-6 text-center">
        <router-link to="/edit-profile" class="d-flex flex-column text-decoration-none">
          <i class="bi bi-person"></i>
          <span>Edit Profile </span>
        </router-link>
      </div>
    </div>
  </footer>
</template>
