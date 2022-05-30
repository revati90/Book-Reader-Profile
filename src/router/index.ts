import { createRouter, createWebHistory } from "vue-router";
import EditProfileViewVue from "../views/EditProfileView.vue";
import ProfileViewVue from "../views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "profile",
      component: ProfileViewVue,
    },
    {
      path: "/edit-profile",
      name: "edit-profile",
      component: EditProfileViewVue,
    },
  ],
});

export default router;
