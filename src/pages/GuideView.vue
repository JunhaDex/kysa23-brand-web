<template>
  <main>
    <h1>Header Number One 111!</h1>
    <h2>Header Number Two 222@</h2>
    <h3>Header Number Three 333#</h3>
    <p class="fonts">
      <span class="xl">Font Size Tester</span><br />
      <span class="lg">Font Size Tester</span><br />
      <span class="md">Font Size Tester</span><br />
      <span class="sm">Font Size Tester</span><br />
      <span class="xs">Font Size Tester</span><br />
    </p>
  </main>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
  console.log('Guide View');
});
</script>
<style lang="scss">
.fonts {
  .xl {
    font-size: #{$font-xl};
  }

  .lg {
    font-size: #{$font-lg};
  }

  .md {
    font-size: #{$font-md};
  }

  .sm {
    font-size: #{$font-sm};
  }

  .xs {
    font-size: #{$font-xs};
  }
}
</style>
