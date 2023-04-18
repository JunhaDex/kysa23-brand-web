import { ref } from 'vue';
import { defineStore } from 'pinia';

const setAuthState = () => {
  const firebaseToken = ref<string>();
  return {
    firebaseToken,
  };
};
setAuthState.persist = true;
export const useAuthStore = defineStore('auth', setAuthState);
