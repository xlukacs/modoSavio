import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false
  }),

  getters: {
    isAuthenticatedFunc (state) {
      return state.isAuthenticated
    }
  },

  actions: {
    setAuth (val) {
      this.isAuthenticated = val
    }
  }
})
