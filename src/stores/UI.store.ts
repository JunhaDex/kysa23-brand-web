import { ref } from 'vue';
import type { LayoutType, RegisterStage, ThemeType } from '@/types/UI.types';
import { defineStore } from 'pinia';

const setUIState = () => {
  const colorTheme = ref<ThemeType>();
  const isBackdrop = ref<boolean>(false);
  const layout = ref<LayoutType>('pc');
  const regStage = ref<RegisterStage>('auth');

  function setColorTheme(value: ThemeType) {
    colorTheme.value = value;
  }

  function setBackdrop(value: boolean) {
    isBackdrop.value = value;
  }

  function setLayout(value: LayoutType) {
    layout.value = value;
  }

  function setRegStage(value: RegisterStage) {
    regStage.value = value;
  }

  return {
    colorTheme,
    isBackdrop,
    layout,
    regStage,
    setColorTheme,
    setBackdrop,
    setLayout,
    setRegStage,
  };
};

export const useUIStore = defineStore('ui', setUIState);
