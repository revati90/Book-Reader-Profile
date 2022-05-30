<script lang="ts">

export default {
  methods: {
    goBack() {
      return this.$router.push('/');
    }
  },
};
</script>

<template>
  <header class="navbar-dark bg-success text-center text-white p-3">
    <div class="row p-4">
      <div @click="goBack" class="col-1">Back</div>
      <div class="col-10 text-center">Profile</div>
      </div>
  </header>
</template>

<style>

</style>
