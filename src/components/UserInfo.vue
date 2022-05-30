<script lang="ts">
import user from '@/data/user.json'

export default {
  data() {
    return {
      user
    };
  },
};
</script>

<template>
  <div class="user-info-section container">
    <div class="d-flex flex-row p-4">
      <div>
        <img
          class="border-success rounded-circle"
          src="@/assets/avatar.png"
          width="100"
          height="100"
          alt="Profile avatar"
        />
      </div>
      <div class="mt-3 d-flex flex-column">
        <h4> {{ user.firstName + ' ' + user.lastName}} </h4>
        <span> {{ user.email }} </span>
        <span> Age: {{ user.born }} </span>
      </div>
    </div>
  </div>
</template>

<style></style>
