import { defineStore } from "pinia";


export const useUserStore = defineStore("userStore", {
    state: () => ({
        user: {},
    }),
    getters: {
        userExists() {
            return Object.keys(this.user).length != 0;
        }
    },
    actions: {
        addUser(user) {
            this.user = user;
        }
    }
});