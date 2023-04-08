<template>
  <header v-if="layout === 'pc'">
    <a class="navbar navbar-brand">
      <img class="logo" src="https://www.gstatic.com/webp/gallery3/4_webp_a.webp" alt="site logo" />
    </a>
    <nav>
      <RouterLink to="/register">참가신청</RouterLink>
      <RouterLink to="/group">조 편성</RouterLink>
      <a href="https://about.google" target="_blank">대회 시간표</a>
    </nav>
    <button class="btn btn-outline-primary coa">참가신청 바로가기</button>
  </header>
  <header v-else-if="layout === 'mo'" class="navbar bg-light">
    <div class="container d-flex justify-content-between">
      <div class="menu-button">
        <img src="@/assets/icons/i-menu-light.svg" alt="" />
      </div>
      <a class="navbar navbar-brand">
        <img
          class="logo"
          src="https://www.gstatic.com/webp/gallery3/4_webp_a.webp"
          alt="site logo"
        />
      </a>
      <button class="btn btn-outline-primary coa">참가신청 바로가기</button>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { bpDesktop } from '@/constants/ui.const';

const layout = ref<'pc' | 'mo'>('pc');
onMounted(() => {
  onResize();
  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
});

function onResize() {
  const width = window.innerWidth;
  if (width <= bpDesktop) {
    layout.value = 'mo';
  } else {
    layout.value = 'pc';
  }
}
</script>
<style lang="scss" scoped>
$header-item-width: 155px;
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  box-sizing: border-box;

  .navbar-brand {
    width: $header-item-width;

    .logo {
      height: 55px;
      margin: 0 auto;
    }
  }

  .coa {
    width: $header-item-width;
  }

  .menu-button {
    display: inline-block;
    width: $header-item-width;
  }

  @include desktop {
    height: 87px; // padding + logo
    padding: 16px 32px;
    nav {
      display: flex;
      width: 20vw;
      justify-content: space-between;

      a {
        text-decoration: none;
        color: $dark;
        display: inline-block;
        box-sizing: border-box;
        cursor: pointer;

        &:hover {
          font-weight: 800;
          color: $primary;
        }
      }
    }
  }
}
</style>
