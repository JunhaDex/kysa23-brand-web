<template>
  <header v-if="layout === 'pc'">
    <a class="navbar navbar-brand" href="/">
      <img class="logo" src="https://www.gstatic.com/webp/gallery3/4_webp_a.webp" alt="site logo" />
    </a>
    <nav>
      <RouterLink to="/register">참가신청</RouterLink>
      <RouterLink to="/group">조 편성</RouterLink>
      <a href="https://about.google" target="_blank">대회 시간표</a>
    </nav>
    <div class="coa">
      <LightDark />
    </div>
  </header>
  <header v-else-if="layout === 'mo'" class="navbar bg-light">
    <div class="container d-flex justify-content-between">
      <div class="menu-button">
        <img src="@/assets/icons/i-menu-light.svg" alt="" />
      </div>
      <a class="navbar navbar-brand" href="/">
        <img
          class="logo"
          src="https://www.gstatic.com/webp/gallery3/4_webp_a.webp"
          alt="site logo"
        />
      </a>
      <div class="coa">
        <button class="btn btn-primary">참가신청</button>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { bpDesktop } from '@/constants/ui.const';
import LightDark from '@/components/inputs/LightDark.vue';

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
$header-item-width: 25%;
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
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
    }
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
