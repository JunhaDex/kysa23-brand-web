<template>
  <div :id="recaptchaCid"></div>
  <main>
    <article class="content">
      <h1>참가신청 본인 인증</h1>
      <SmsAuth />
    </article>
    <article class="content">
      <h1>참가 신청서</h1>
      <ApplicationForm />
    </article>
  </main>
</template>
<script lang="ts" setup>
import { recaptchaCid } from '@/services/Auth.service';
import SmsAuth from '@/components/displays/SmsAuth.vue';
import ApplicationForm from '@/components/displays/ApplicationForm.vue';
</script>
<style lang="scss">
.content {
  padding-top: 150px;
}
</style>
