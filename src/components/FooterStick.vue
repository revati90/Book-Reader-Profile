<template>
  <footer class="fixed-bottom bg-light bottom-0 w-100">
    <div class="row p-4">
      <div class="col-6 text-center">
        <router-link to="#" class="d-flex flex-column text-decoration-none">
          <i class="bi-search text-success"></i>
          <span>Explore</span>
        </router-link>
      </div>
      <div class="col-6 text-center">
        <router-link
          to="/edit-profile"
          class="d-flex flex-column text-decoration-none"
        >
          <span>
            <img
              class="border border-1 border-success rounded-circle"
              src="@/assets/avatar.png"
              width="25"
              height="25"
              alt="Profile avatar"
            />
          </span>
          <span>Edit Profile </span>
        </router-link>
      </div>
    </div>
  </footer>
</template>
