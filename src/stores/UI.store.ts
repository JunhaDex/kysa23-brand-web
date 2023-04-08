import { ref } from 'vue';
import type { ThemeType } from '@/types/UI.types';
import { defineStore } from 'pinia';

const setUIState = () => {
  const colorTheme = ref<ThemeType>();

  function setColorTheme(value: ThemeType) {
    colorTheme.value = value;
  }

  return {
    colorTheme,
    setColorTheme,
  };
};

export const useUIStore = defineStore('ui', setUIState);
