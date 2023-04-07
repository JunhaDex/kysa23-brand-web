<template>
  <template v-if="layout === 'pc'">
    <header>
      <img class="logo" src="https://www.gstatic.com/webp/gallery3/4_webp_a.webp" alt="site logo" />
      <nav>
        <RouterLink to="/register">참가신청</RouterLink>
        <RouterLink to="/group">조 편성</RouterLink>
        <a href="https://about.google" target="_blank">대회 시간표</a>
      </nav>
      <button class="btn btn-outline-primary">참가신청 바로가기</button>
    </header>
  </template>
  <template v-else-if="layout === 'mo'">
    <header></header>
  </template>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps<{
  layout: 'pc' | 'mo';
}>();
const layout = computed(() => props.layout ?? 'pc');
</script>
<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100vw;
  height: 87px; // padding + logo
  box-sizing: border-box;
  padding: 16px 32px;
  @include desktop {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
