import { ref } from 'vue';
import { defineStore } from 'pinia';

const setAuthState = () => {
  const firebaseToken = ref<string>();

  function setFirebaseToken(token: string) {
    firebaseToken.value = token;
  }

  return {
    firebaseToken,
    setFirebaseToken,
  };
};
setAuthState.persist = true;
export const useAuthStore = defineStore('auth', setAuthState);
