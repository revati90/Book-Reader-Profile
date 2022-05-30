import { ref } from "vue";
import { defineStore } from "pinia";
import user from "@/data/user.json";
import type Book from "../types/Book";
import type User from "../types/User";
import router from "@/router";

export const useUserStore = defineStore("UserStore", {
  state: () => {
    const persistedBooks = localStorage.getItem("likedBooks");

    const likedBooks =
      persistedBooks === null ? [] : JSON.parse(persistedBooks);
    user.likedBooks = likedBooks;

    const userData = ref<User>(user);
    const title = "Profile";
    const userProfile = {
      firstName: userData.value.firstName,
      lastName: userData.value.lastName,
      email: userData.value.email,
      born: userData.value.born,
    };
    const passwordFieldType = "password";

    return { userData, likedBooks, title, userProfile, passwordFieldType };
  },

  getters: {
    getUserData: (state) => {
      return state.userData;
    },
    getAge: (state) => {
      const date = new Date(state.userData.born);
      const ageDate = new Date(Date.now() - date.getTime());
      const year = ageDate.getUTCFullYear();

      return Math.abs(year - 1970);
    },
    getTitle: (state) => {
      return state.title;
    },
    getPasswordFieldType: (state) => {
      return state.passwordFieldType;
    },
    getUserProfile: (state) => {
      return state.userProfile;
    },
  },

  actions: {
    setTitle(title: string) {
      this.title = title;
    },
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    addBook(book: Book) {
      this.likedBooks.push(book);
      this.userData.likedBooks = this.likedBooks;
    },
    removeBookmark(id: number) {
      this.likedBooks.splice(
        this.likedBooks.findIndex(
          (element: { id: number }) => element.id === id
        ),
        1
      );
      this.userData.likedBooks = this.likedBooks;
    },
    updateProfile() {
      this.userData.firstName = this.userProfile.firstName;
      this.userData.lastName = this.userProfile.lastName;
      this.userData.email = this.userProfile.email;
      this.userData.born = this.userProfile.born;

      router.push("/");
    },
    cancelProfieForm() {
      this.userProfile.firstName = this.userData.firstName;
      this.userProfile.lastName = this.userData.lastName;
      this.userProfile.email = this.userData.email;
      this.userProfile.born = this.userData.born;

      router.push("/");
    },
  },
});
