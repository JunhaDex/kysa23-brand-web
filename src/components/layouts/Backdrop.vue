<template>
  <div v-if="showBackdrop" class="backdrop" @click="clickBackdrop"></div>
</template>
<script lang="ts" setup>
import { computed, watch } from 'vue';
import { useUIStore } from '@/stores/UI.store';

const uiStore = useUIStore();
const showBackdrop = computed(() => uiStore.isBackdrop);

watch(
  () => showBackdrop.value,
  (newVal) => {
    if (newVal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }
);

function clickBackdrop() {
  uiStore.setBackdrop(false);
}
</script>
<style lang="scss" scoped>
.backdrop {
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  background-color: rgba($dark, 0.3);
  width: 100%;
  height: 100%;
}
</style>
