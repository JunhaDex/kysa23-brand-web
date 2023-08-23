<template>
  <header :class="[`bg-${bgLevel}`, isDark ? `bg-${bgLevel}-dark` : '']" v-if="layout === 'pc'">
    <a class="navbar navbar-brand" href="/">
      <span class="logo-txt">2023 KYSA 전국 청년대회</span>
    </a>
    <nav>
      <!--      <RouterLink class="me-5" to="" @click="blockMenu">참가신청</RouterLink>-->
      <RouterLink class="me-5" to="/info">조 편성</RouterLink>
      <RouterLink class="me-5" to="/event">참가 이벤트</RouterLink>

      <a
        class="me-5"
        href="https://kysa23-finance.notion.site/2023-2e75c081bf054430ab54e7fbd8e8b7f2"
        target="_blank"
        >대회비 납부</a
      >
      <!--      <RouterLink class="me-5" to="/group">조 편성</RouterLink>-->
      <!--      <a href="https://about.google" target="_blank">대회 시간표</a>-->
    </nav>
    <div class="coa">
      <LightDark />
    </div>
  </header>
  <header v-else class="navbar p-0" :class="isDark ? 'bg-dark' : 'bg-light'">
    <div class="container-fluid d-flex justify-content-between">
      <div class="menu-button">
        <img @click="toggleMenu" :src="menuIcon" alt="" />
      </div>
      <a class="navbar navbar-brand" href="/">
        <span class="logo-txt">KYSA2023</span>
      </a>
      <div class="coa">
        <a
          class="btn btn-primary btn-sm"
          href="https://kysa23-finance.notion.site/2023-2e75c081bf054430ab54e7fbd8e8b7f2"
          target="_blank"
          >납부안내</a
        >
      </div>
    </div>
  </header>
  <MainMenu :is-open="isMenu" @close-menu="isMenu = false" @block-menu="blockMenu" />
  <ToastAlert
    v-if="showToast"
    :type="toastItem.type"
    :message="toastItem.message"
    @close-toast="showToast = false"
  />
</template>
<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { bpDesktop, bpTablet } from '@/constants/ui.const';
import LightDark from '@/components/inputs/LightDark.vue';
import MainMenu from '@/components/layouts/MainMenu.vue';
import { useUIStore } from '@/stores/UI.store';
import ToastAlert from '@/components/displays/ToastAlert.vue';
import type { ToastItem } from '@/types/UI.types';

const uiStore = useUIStore();
const layout = computed(() => uiStore.layout);
const isDark = computed(() => uiStore.colorTheme === 'dark');
const menuIcon = computed(() => uiStore.getImageName('menu'));

const bgLevel = ref<number>(0);
const isMenu = ref<boolean>(false);
const showToast = ref<boolean>(false);
const toastItem = ref<ToastItem>({
  type: 'danger',
  message: '',
});
onMounted(() => {
  onResize();
  window.addEventListener('resize', onResize);
  window.addEventListener('scroll', onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
  window.removeEventListener('scroll', onScroll);
});

function toggleMenu() {
  isMenu.value = !isMenu.value;
}

function onResize() {
  const width = window.innerWidth;
  if (width < bpTablet) {
    uiStore.setLayout('mo');
  } else if (width >= bpTablet && width < bpDesktop) {
    uiStore.setLayout('tb');
  } else {
    uiStore.setLayout('pc');
  }
}

function onScroll() {
  const gradTH = 65;
  const level = Math.floor(window.scrollY / gradTH);
  bgLevel.value = level < 0 ? 0 : level > 5 ? 5 : level;
}

function blockMenu() {
  showToast.value = true;
  toastItem.value = {
    type: 'info',
    message: '아직 준비중인 메뉴입니다!',
  };
}
</script>
<style lang="scss" scoped>
$header-item-width: 25%;
@for $i from 1 to 6 {
  .bg-#{$i} {
    background: rgba($light, calc(($i + 1) / 6));

    &-dark {
      background: rgba($dark, calc(($i + 1) / 6));
    }

    border-bottom: 2px solid rgba($gray-dark, calc($i / 6));
  }
}

.logo-txt {
  color: var(--text-color);
  font-weight: 800;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: $pc-min;
  height: $header-mo;
  box-sizing: border-box;

  .navbar-brand {
    width: $header-item-width;

    .logo {
      height: 35px;
      margin: 0 auto;
    }
  }

  .coa {
    width: $header-item-width;
    text-align: right;
  }

  .menu-button {
    display: inline-block;
    width: $header-item-width;

    img {
      height: 35px;
    }
  }

  @include desktop {
    height: 87px; // padding + logo
    padding: 16px 32px;
    .logo {
      height: 55px;
      margin-left: 0 !important;
    }
    nav {
      display: flex;
      flex: 1;
      max-width: 520px;
      justify-content: space-between;

      a {
        text-decoration: none;
        color: var(--text-color);
        display: inline-block;
        box-sizing: border-box;
        cursor: pointer;

        &:hover {
          font-weight: 800;
          color: var(--color-a);
        }
      }
    }
  }
}
</style>
