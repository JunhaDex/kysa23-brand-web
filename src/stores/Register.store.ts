import { ref } from 'vue';
import type { Register } from '@/types/Register.type';
import { defineStore } from 'pinia';

const setRegisterState = () => {
  const register = ref<Register>({
    email: '',
    name: '',
    dob: '',
    sex: 'm',
    contact: '',
    geo: '',
    isMember: false,
    joins: [],
  });

  function setRegister(info: Register) {
    register.value = info;
  }

  return {
    register,
    setRegister,
  };
};

export const useRegisterStore = defineStore('register', setRegisterState);
