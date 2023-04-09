import { ref } from 'vue';
import type { LayoutType, ThemeType } from '@/types/UI.types';
import { defineStore } from 'pinia';

const setUIState = () => {
  const colorTheme = ref<ThemeType>();
  const isBackdrop = ref<boolean>(false);
  const layout = ref<LayoutType>('pc');

  function setColorTheme(value: ThemeType) {
    colorTheme.value = value;
  }

  function setBackdrop(value: boolean) {
    isBackdrop.value = value;
  }

  function setLayout(value: LayoutType) {
    layout.value = value;
  }

  return {
    colorTheme,
    isBackdrop,
    layout,
    setColorTheme,
    setBackdrop,
    setLayout,
  };
};

export const useUIStore = defineStore('ui', setUIState);
