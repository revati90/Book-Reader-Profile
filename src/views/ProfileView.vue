<script setup lang="ts">
import Header from '@/components/Header.vue'
import UserInfo from '@/components/UserInfo.vue'
import ProfileBooks from '@/components/ProfileBooks.vue'
import BrowseBooks from '@/components/BrowseBooks.vue'
import FooterStick from '@/components/FooterStick.vue'
import 'bootstrap/dist/js/bootstrap.min.js'

import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';

const { getUserData, getAge, getTitle } = storeToRefs(useUserStore())
const { setTitle } = useUserStore();

</script>

<template>
  <main>
    <Header />
    <UserInfo :userData="getUserData" :age="getAge"></UserInfo>

    <div class="container mt-0">
      <div class="p-4">
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a class="nav-link active text-success" data-bs-toggle="tab" href="#profile-books">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#browse-books">Browse Books</a>
          </li>
        </ul>

        <div class="tab-content">
          <div id="profile-books" class="container tab-pane active"><br>
            <ProfileBooks />
          </div>
          <div id="browse-books" class="container tab-pane fade"><br>
            <BrowseBooks />
          </div>
        </div>
      </div>
    </div>

    <FooterStick />
  </main>
</template>
