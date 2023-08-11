<template>
  <transition :name="layout === 'mo' ? 'slide-top' : 'slide-left'">
    <aside v-if="isOpen">
      <section class="menu-header">
        <h2>살펴보기</h2>
        <span class="close" :class="{ 'close-dark': isDark }" @click="closeMenu"></span>
      </section>
      <section class="menu-items">
        <div class="d-flex justify-content-center">
          <LightDark />
        </div>
        <a class="m-item" href="https://forms.gle/RCRMoeGBMFtAXHTR9" target="_blank">참가신청</a>
        <RouterLink to="/event" class="m-item" @click="closeMenu">참가 이벤트</RouterLink>
        <RouterLink to="" class="m-item" @click="blockMenu">조 편성</RouterLink>
        <!--        <a href="" target="_blank" class="m-item" @click="blockMenu"> 대회 시간표 </a>-->
      </section>
      <SocialGroup />
      <section class="menu-footer">
        <span>2023 KYSA 전국 청년대회</span>
      </section>
    </aside>
  </transition>
</template>
<script lang="ts" setup>
import { useUIStore } from '@/stores/UI.store';
import { computed, watch } from 'vue';
import LightDark from '@/components/inputs/LightDark.vue';
import SocialGroup from '@/components/displays/SocialGroup.vue';

const uiStore = useUIStore();
const props = defineProps<{ isOpen: boolean }>();
const emit = defineEmits(['closeMenu', 'blockMenu']);
const layout = computed(() => uiStore.layout);
const isDark = computed(() => uiStore.colorTheme === 'dark');

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

function blockMenu() {
  return emit('blockMenu');
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
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  top: $header-mo;
  left: 0;
  width: 380px;
  background-color: var(--background-color);
  border-radius: 0 0 0.8rem 0;
  padding-top: 36px;

  section {
    box-sizing: border-box;
    padding: 0 36px 0 36px;
  }

  @include mobile {
    width: 100%;
    border-radius: 0 0 0.8rem 0.8rem;
  }
  height: calc(100% - $header-mo);
}

.menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    display: inline-flex;
    align-items: center;
    color: $success;
    letter-spacing: 0.2rem;

    &::before {
      display: inline-block;
      content: '';
      background-image: url('@/assets/icons/i-pkg-light.svg');
      background-size: cover;
      width: 36px;
      height: 36px;
      margin-right: 6px;
    }
  }
}

.menu-items {
  flex: 1;
  padding: 36px 18px 0 18px;
  border-top: 2px solid $gray-dark;

  .m-item {
    text-decoration: none;
    color: var(--text-color);
    display: block;
    margin-top: 18px;
    padding-left: 24px;
    height: 65px;
    line-height: 65px;
    border-radius: 0.7rem;
    font-size: $font-lg;

    &:active {
      background-color: $gray;
      font-weight: 400;
    }
  }
}

.menu-footer {
  padding: 18px 0 18px 0;
  box-sizing: border-box;
  text-align: center;
  color: $gray-dark;
  background-color: $gray;
  border-radius: 0 0 0.8rem 0;
  border-top: 2px solid $gray-dark;
  @include mobile {
    border-radius: 0 0 0.8rem 0.8rem;
  }
}
</style>
