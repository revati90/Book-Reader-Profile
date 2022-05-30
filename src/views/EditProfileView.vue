<script setup lang="ts">
import Header from '@/components/Header.vue'
import EditProfile from '@/components/EditProfile.vue'
import FooterStick from '@/components/FooterStick.vue'
import 'bootstrap/dist/js/bootstrap.min.js'

</script>

<template>
  <main>
    <Header/>
    <div class="edit-profile-section">
      <div class="text-center py-4">
        <div>
          <img
            class="border-success rounded-circle"
            src="@/assets/avatar.png"
            width="100"
            height="100"
            alt="Profile avatar"
          />
        </div>
      </div>
      <EditProfile />
    </div>
    <FooterStick />
  </main>
</template>
