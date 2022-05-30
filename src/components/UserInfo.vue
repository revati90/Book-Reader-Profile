<script setup lang='ts'>

defineProps(['userData', 'age'])

</script>

<template>
  <div class="user-info-section container">
    <div class="d-flex flex-row p-4">
      <div>
        <img
          class="border border-success rounded-circle border-3"
          src="@/assets/avatar.png"
          width="100"
          height="100"
          alt="Profile avatar"
        />
      </div>
      <div class="mt-2 px-3 d-flex flex-column">
        <h4> {{ userData.firstName + " " + userData.lastName }} </h4>
        <span> {{ userData.email }} </span>
        <span> Age: {{ age }} </span>
      </div>
    </div>
  </div>
</template>

<style></style>
