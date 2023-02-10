import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    cookiesViewed: false,
  }),

  getters: {
    isAuthenticatedFunc(state) {
      return state.isAuthenticated;
    },

    hasViewedCookiesPrompt(state) {
      return state.cookiesViewed;
    },
  },

  actions: {
    setAuth(val) {
      this.isAuthenticated = val;
    },
    setCookiesPrompt(val) {
      this.cookiesViewed = val;
    },
  },
});
