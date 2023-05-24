<template>
  <aside class="toast">
    <transition :name="layout === 'mo' ? 'slide-top' : 'slide-right'">
      <div v-show="showToast" class="toast-contents" :class="type">
        <p>{{ message }}</p>
        <span class="close" @click="closeToast"></span>
      </div>
    </transition>
  </aside>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { useUIStore } from '@/stores/UI.store';
import { sleep } from '@/providers/Util.provider';
import type { ToastType } from '@/types/UI.types';

const TOAST_TIMER = 3000; // ms
const prop = defineProps<{ message: string; type: ToastType }>();
const emit = defineEmits(['closeToast']);
const uiStore = useUIStore();
const showToast = ref<boolean>(false);
const layout = computed(() => uiStore.layout);
onMounted(() => {
  showToast.value = true;
  setTimeout(async () => {
    await closeToast();
  }, TOAST_TIMER);
});

async function closeToast() {
  showToast.value = false;
  await sleep(300);
  return emit('closeToast');
}
</script>
<style lang="scss" scoped>
@include slide-top(30px, 0.3s);
@include slide-right(18%, 0.3s);
@include desktop {
  .close {
    width: 18px;
    height: 18px;
  }
}

.toast {
  position: fixed;
  top: calc($header-mo);
  left: 0;
  z-index: 10;
  @include desktop {
    top: calc($header-pc);
  }
  width: 100%;
}

.success {
  background-color: $success;
  color: $light;

  .close {
    background-image: url('@/assets/icons/i-close-dark.svg');
  }
}

.warning {
  background-color: $warning;
}

.danger {
  background-color: $danger;
  color: $light;

  .close {
    background-image: url('@/assets/icons/i-close-dark.svg');
  }
}

.info {
  background-image: linear-gradient(135deg, hsla(192, 48%, 56%, 1) 0%, hsla(149, 59%, 74%, 1) 100%);
  border: 2px solid $info;
}

.toast-contents {
  padding: 0 0.725rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 60px;
  border-radius: 0.325rem;
  margin: 0 auto;
  @include desktop {
    margin-right: 36px !important;
  }

  p {
    flex: 1;
    margin: 0;
  }
}
</style>
