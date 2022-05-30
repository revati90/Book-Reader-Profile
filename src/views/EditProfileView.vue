<script setup lang="ts">
import Header from '@/components/Header.vue'
import FooterStick from '@/components/FooterStick.vue'
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/user';
import 'bootstrap/dist/js/bootstrap.min.js'

const { getUserProfile, getPasswordFieldType } = storeToRefs(useUserStore())
const { updateProfile, cancelProfieForm, switchVisibility } = useUserStore();

const title = 'Edit Profile'

</script>

<template>
  <main>
    <Header :title="title"/>
    <div class="edit-profile-section">
      <div class="text-center py-4">
        <div>
          <img
            class="border border-2 border-success rounded-circle"
            src="@/assets/avatar.png"
            width="100"
            height="100"
            alt="Profile avatar"
          />
        </div>
      </div>

      <div class="p-3 py-2">
        <form @submit.prevent="updateProfile">
          <div class="row mt-2">
            <div class="mb-3"><input type="email" name="email" class="form-control" placeholder="name@example.com" v-model="getUserProfile.email"></div>
            <div class="mb-3"><input type="text" name="firstName" class="form-control" placeholder="Enter first name" v-model="getUserProfile.firstName"></div>
            <div class="mb-3"><input type="text" name="lastName" class="form-control" placeholder="Enter last name" v-model="getUserProfile.lastName"></div>
            <div class="mb-3"><input type="text" name="born" class="form-control" placeholder="Date of birth" v-model="getUserProfile.born"></div>
            <div class="input-group mb-3">
              <input :type="getPasswordFieldType" class="form-control" placeholder="**********">
              <span class="input-group-text" @click="switchVisibility">SHOW</span>
            </div>
          </div>
          <div class="text-center py-2"><button class="form-control btn btn-primary profile-button" type="submit">Done</button></div>
          <div class="text-center py-2"><button class="form-control btn btn-default btn-outline-warning" @click="cancelProfieForm">Cancel</button></div>
        </form>
      </div>
    </div>
    <FooterStick />
  </main>
</template>
