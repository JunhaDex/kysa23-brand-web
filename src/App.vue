<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/components/layouts/NavBar.vue';
import Footer from '@/components/layouts/TailInfo.vue';
</script>

<template>
  <NavBar  layout="pc"/>
  <RouterView />
  <Footer />
</template>

<style scoped></style>
