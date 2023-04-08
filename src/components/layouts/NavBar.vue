<template>
  <header :class="`bg-${bgLevel}`" v-if="layout === 'pc'">
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
const bgLevel = ref<number>(0);
onMounted(() => {
  onResize();
  window.addEventListener('resize', onResize);
  window.addEventListener('scroll', onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
  window.removeEventListener('scroll', onScroll);
});

function onResize() {
  const width = window.innerWidth;
  if (width <= bpDesktop) {
    layout.value = 'mo';
  } else {
    layout.value = 'pc';
  }
}

function onScroll() {
  const gradTH = 45;
  const level = Math.floor(window.scrollY / gradTH);
  bgLevel.value = level < 0 ? 0 : level > 5 ? 5 : level;
  console.log(bgLevel.value);
}
</script>
<style lang="scss" scoped>
$header-item-width: 25%;
@for $i from 1 to 6 {
  .bg-#{$i} {
    background: linear-gradient(rgba($light, calc(($i + 1) / 6)), 85%, rgba($light, calc($i / 6)));
    border-bottom: 2px solid rgba($gray-dark, calc($i / 6));
  }
}

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
      margin-left: 0 !important;
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
          color: var(--color-a);
        }
      }
    }
  }
}
</style>
