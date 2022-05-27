<script lang="ts">

export default {
  data() {
    return {
      books: [
        { id: 1, name: "The Russian", type: "fiction", available: true },
        { id: 2, name: "Just as I Am", type: "non-fiction", available: false },
      ]
    };
  },
};
</script>

<template>
  <div class="profile-books">
    <div class="card mt-3 p-2" v-for="book in books" :key="book.id">
      <div class="row p-2">
        <div class="col-8 flex-column">
          <div><strong> {{ book.name }} </strong></div>
          <div class="text-capitalize"> {{ book.type }} </div>
          <div> {{ book.available }} </div>
        </div>
        <div class="col-4 text-center">
          <i class="bi bi-bookmark" /><br />
          <span>Remove</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
