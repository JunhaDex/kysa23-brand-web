<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/components/layouts/NavBar.vue';
import Footer from '@/components/layouts/TailInfo.vue';
import Backdrop from '@/components/layouts/Backdrop.vue';
</script>

<template>
  <NavBar />
  <Backdrop />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
