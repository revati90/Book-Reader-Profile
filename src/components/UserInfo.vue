<script lang="ts">

export default {
  data() {
    return {
      user: [
        {
          "name":"John",
          "lastName":"Doe",
          "email":"johnfdoe",
          "born":"1-1-2000",
          "likedBooks":[]
        }
      ]
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
      <div class="mt-3 d-flex flex-column" v-for="user in user" :key="user.id">
        <h4> {{ user.name + ' ' + user.lastName}} </h4>
        <span> {{ user.email }} </span>
        <span> Age: {{ user.born }} </span>
      </div>
    </div>
  </div>
</template>

<style></style>
