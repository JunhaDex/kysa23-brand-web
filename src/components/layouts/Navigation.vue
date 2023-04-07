<template>
  <template v-if="layout === 'pc'">
    <header></header>
  </template>
  <template v-else-if="layout === 'mo'">
    <header></header>
  </template>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  layout: 'pc' | 'mo';
}>();
const layout = computed(() => props.layout ?? 'pc');
</script>
