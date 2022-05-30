import { ref } from 'vue';
import { defineStore } from 'pinia'
import user from '@/data/user.json'
import type User from '../types/User';
import router from '@/router';

export const useUserStore = defineStore('UserStore', {
    state: () => {
        const userData = ref<User>(user);
        const title = 'Profile';
        const userProfile = {
            firstName: userData.value.firstName,
            lastName: userData.value.lastName,
            email: userData.value.email,
            born: userData.value.born,
        };
        const passwordFieldType = "password";

        return { userData, title, userProfile, passwordFieldType };
    },

    getters: {
        getUserData: (state) => {
            return state.userData;
        },
        getAge: (state) => {
            let date = new Date(state.userData.born);
            let ageDate = new Date(Date.now() - date.getTime());
            let year = ageDate.getUTCFullYear();

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
        }
    },

    actions: {
        setTitle(title: string) {
            this.title = title;
        },
        switchVisibility() {
          this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
        },
        updateProfile() {
            this.userData.firstName = this.userProfile.firstName;
            this.userData.lastName = this.userProfile.lastName;
            this.userData.email = this.userProfile.email;
            this.userData.born = this.userProfile.born;

            router.push('/');
        },
        cancelProfieForm() {
            this.userProfile.firstName = this.userData.firstName;
            this.userProfile.lastName = this.userData.lastName;
            this.userProfile.email = this.userData.email;
            this.userProfile.born = this.userData.born;

            router.push('/');
        }
    }

})
