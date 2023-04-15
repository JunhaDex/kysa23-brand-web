<template>
  <aside>
    <p>toast message</p>
    <span class="close" @click="closeToast"></span>
  </aside>
</template>
<script lang="ts" setup>
const emit = defineEmits(['closeToast']);

function closeToast() {
  return emit('closeToast');
}
</script>
<style lang="scss"></style>
