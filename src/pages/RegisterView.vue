<template>
  <div :id="recaptchaCid"></div>
  <main>
    <article v-show="regStage === 'auth'" class="content">
      <h1>참가신청 본인 인증</h1>
      <hr />
      <div class="form-wrap">
        <SmsAuth @open-toast="setToastItem" />
      </div>
    </article>
    <article v-show="regStage === 'form'" class="content">
      <!--  <article class="content">  -->
      <h1>참가 신청서</h1>
      <hr />
      <ApplicationForm />
    </article>
  </main>
  <ToastAlert
    v-if="showToast"
    :type="toastItem.type"
    :message="toastItem.message"
    @close-toast="showToast = false"
  />
</template>
<script lang="ts" setup>
import { recaptchaCid } from '@/services/Auth.service';
import SmsAuth from '@/components/displays/SmsAuth.vue';
import ApplicationForm from '@/components/displays/ApplicationForm.vue';
import { useUIStore } from '@/stores/UI.store';
import { computed, ref } from 'vue';
import ToastAlert from '@/components/displays/ToastAlert.vue';
import type { ToastItem } from '@/types/UI.types';

const uiStore = useUIStore();
const regStage = computed(() => uiStore.regStage);
const showToast = ref<boolean>(false);
const toastItem = ref<ToastItem>({
  type: 'danger',
  message: '',
});

function setToastItem(item: ToastItem) {
  showToast.value = true;
  toastItem.value = item;
}
</script>
<style lang="scss">
main {
  padding-top: $header-mo;
  @include desktop {
    align-items: center;
    padding-top: $header-pc;
  }
}

.content {
  position: relative;
  background-color: $gray;
  box-sizing: border-box;
  border-radius: 0.475rem;
  min-height: calc(100vh - $header-mo);
  margin: 0 auto;
  padding: 4rem 5.5rem;
  width: calc($bp-tb - 1.5rem);

  h1 {
    margin: 0;
  }

  @include mobile {
    width: 100%;
    padding: 4rem 4rem;
    h1 {
      text-align: center;
    }
  }
}

.form-wrap {
  position: absolute;
  width: calc(100% - 8rem);
  top: 50%;
  transform: translateY(-50%);
}
</style>
