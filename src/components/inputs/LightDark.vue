<template>
  <div class="mode-switch">
    <img class="dark" src="@/assets/icons/i-sun-light.svg" alt="" />
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" role="switch" />
    </div>
    <img class="dark" src="@/assets/icons/i-moon-light.svg" alt="" />
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.mode-switch {
  display: inline-flex;
  img {
    width: 28px;
    height: 28px;
  }
}

.form-switch {
  padding-left: 0;
  width: 0;
  box-sizing: border-box;
  margin-right: 30px;
  margin-left: 45px;

  .form-check-input {
    width: 55px;
    height: 75%;
  }
}
</style>
