<template>
  <div class="mode-switch">
    <img class="dark" :src="sunIcon" alt="" />
    <div class="form-check form-switch">
      <input
        v-model="userTheme"
        true-value="dark"
        false-value="light"
        class="form-check-input"
        type="checkbox"
        role="switch"
        @change="switchTheme"
      />
    </div>
    <img class="dark" :src="moonIcon" alt="" />
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue';
import type { ThemeType } from '@/types/UI.types';
import { useUIStore } from '@/stores/UI.store';

const uiStore = useUIStore();
const userTheme = ref<ThemeType>();
const currentTheme = computed(() => uiStore.colorTheme);
const sunIcon = computed(() => uiStore.getImageName('sun'));
const moonIcon = computed(() => uiStore.getImageName('moon'));
onMounted(() => {
  userTheme.value =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  switchTheme();
});

watch(
  () => currentTheme.value,
  (newVal) => {
    console.log(newVal);
    if (newVal) {
      uiStore.setColorTheme(newVal);
      document.documentElement.setAttribute('data-theme', newVal);
    }
  }
);

function switchTheme() {
  if (userTheme.value) {
    uiStore.setColorTheme(userTheme.value!);
    document.documentElement.setAttribute('data-theme', userTheme.value);
  }
}
</script>
<style lang="scss" scoped>
.mode-switch {
  display: inline-flex;

  img {
    width: 28px;
    height: 28px;
  }
}

.form-switch {
  padding-left: 0;
  width: 0;
  box-sizing: border-box;
  margin-right: 30px;
  margin-left: 45px;

  .form-check-input {
    width: 55px;
    height: 75%;
  }
}
</style>
