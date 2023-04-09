<template>
  <transition :name="layout === 'mo' ? 'slide-top' : 'slide-left'">
    <aside v-if="isOpen">menu</aside>
  </transition>
</template>
<script lang="ts" setup>
import { useUIStore } from '@/stores/UI.store';
import { computed, watch } from 'vue';

const uiStore = useUIStore();
const props = defineProps<{ isOpen: boolean }>();
const emit = defineEmits(['closeMenu']);
const layout = computed(() => uiStore.layout);

watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      uiStore.setBackdrop(true);
    } else {
      uiStore.setBackdrop(false);
    }
  }
);

watch(
  () => uiStore.isBackdrop,
  (isBackdrop) => {
    if (!isBackdrop) {
      closeMenu();
    }
  }
);

function closeMenu() {
  return emit('closeMenu');
}
</script>
<style lang="scss" scoped>
@include mobile {
  @include slide-top(100%, 0.5s);
}

@include tablet {
  @include slide-left(350px, 0.5s);
}

aside {
  z-index: 5;
  position: fixed;
  top: $header-mo;
  left: 0;
  width: 380px;
  background-color: $light;
  @include mobile {
    width: 100%;
  }
  height: calc(100% - $header-mo);
}
</style>
