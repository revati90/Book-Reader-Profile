<script setup lang="ts">
import Header from '@/components/Header.vue'
import UserInfo from '@/components/UserInfo.vue'
import FooterStick from '@/components/FooterStick.vue'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useUserStore } from '@/store/user';
import { useBookStore } from '@/store/book';
import { storeToRefs } from 'pinia';

const { getUserData, getAge, getTitle } = storeToRefs(useUserStore())
const { setTitle } = useUserStore();
const { getBooks } = storeToRefs(useBookStore())
const { addBookmark, isBookmarked } = useBookStore();

</script>

<template>
  <main>
    <Header :title="getTitle" />
    <UserInfo :userData="getUserData" :age="getAge"></UserInfo>

    <div class="container mt-0 brp-tabs">
      <div class="p-4">
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a class="nav-link active border-0 border-bottom" data-bs-toggle="tab" href="#profile-books" @click="setTitle('Profile')">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link border-0 border-bottom" data-bs-toggle="tab" href="#browse-books" @click="setTitle('Browse Books')">Browse Books</a>
          </li>
        </ul>

        <div class="tab-content">

          <div id="profile-books" class="container tab-pane active"><br>
            <div class="card mt-3" v-for="book in getUserData.likedBooks">
              <div class="row p-2">
                <div class="col-8 flex-column">
                  <div><strong> {{ book.name }} </strong></div>
                  <div class="text-capitalize"> {{ book.type }} </div>
                  <div> Available: {{ book.available ? "Yes" : "No" }} </div>
                </div>
                <div class="col-4 text-center">
                  <i class="bi bi-bookmark" /><br />
                  <span @click="addBookmark(book, $event, false)">Remove</span>
                </div>
              </div>
            </div>
          </div>

          <div id="browse-books" class="container tab-pane fade"><br>
            <div class="card mt-3" v-for="book in getBooks" >
              <div class="row p-2">
                <div class="col-8 flex-column">
                  <div><strong> {{ book.name }} </strong></div>
                  <div class="text-capitalize"> {{ book.type }} </div>
                  <div> Available: {{ book.available ? "Yes" : "No" }} </div>
                </div>
                <div class="col-4 text-center">
                  <i class="bi bi-bookmark" /><br />
                  <span @click="addBookmark(book, $event, true)">
                    {{ isBookmarked(book.id) ? "Remove" : "Add" }}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <FooterStick />
  </main>
</template>

<style scoped>
.brp-tabs {
  padding-bottom: 84px;
}

a.nav-link.active {
  color: #198754;
}
</style>
