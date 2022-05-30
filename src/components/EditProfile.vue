<script lang="ts">

export default {
  data() {
    return {
      passwordFieldType: "password",
      email: '',
      firstName: '',
      lastName: '',
      born: '',
      password: ''
    }
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },
    updateProfile: function () {
      console.log({email: this.email});
      alert('Updated user profile.');
    },
  }
};

</script>

<template>
    <div class="p-3 py-2">
      <form @submit.prevent="updateProfile">
        <div class="row mt-2">
          <div class="mb-3"><input type="email" name="email" class="form-control" placeholder="name@example.com" v-model="email"></div>
          <div class="mb-3"><input type="text" name="firstName" class="form-control" placeholder="Enter first name" v-model="firstName"></div>
          <div class="mb-3"><input type="text" name="lastName" class="form-control" placeholder="Enter last name" v-model="lastName"></div>
          <div class="mb-3"><input type="text" name="born" class="form-control" placeholder="Date of birth" v-model="born"></div>
          <div class="input-group mb-3">
            <input :type="passwordFieldType" class="form-control" placeholder="**********" v-model="password">
            <span class="input-group-text" @click="switchVisibility">SHOW</span>
          </div>
        </div>
        <div class="text-center py-2"><button class="form-control btn btn-primary profile-button" type="submit">Done</button></div>
        <div class="text-center py-2"><input type="reset" class="form-control btn btn-default btn-outline-warning" value="Cancel"></div>
      </form>
    </div>
</template>

<style></style>
