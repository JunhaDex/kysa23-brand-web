<template>
  <main>
    <article class="event-main">
      <div class="content">
        <h2>이벤트</h2>
        <form>
          <label>쿠폰번호</label>
          <input
            v-model="couponId"
            class="form-control mb-3"
            type="text"
            placeholder="foo@example.com"
          />
          <button class="btn btn-primary" type="button" @click="submit">확인하기</button>
        </form>
        <div v-if="isResult" class="content-res">result</div>
      </div>
    </article>
  </main>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { CouponService } from '@/services/Coupon.service';

const couponId = ref<string>('');
const isResult = ref<boolean>(false);
const couponData = ref();
const cpnSvc = new CouponService();

async function submit() {
  // TODO: button click debounce
  couponData.value = await cpnSvc.searchCoupon(couponId.value);
  isResult.value = true;
}
</script>
<style lang="scss" scoped>
main {
  background-image: url('@/assets/images/bg-hmg-night.webp');
}

.event-main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: $bp-mo !important;
  padding-top: $header-mo;
  box-sizing: border-box;
  margin: 0 auto;
  @include desktop {
    padding-top: $header-pc;
  }
}

.content {
  width: 100%;
  box-sizing: border-box;
  border-radius: 0.475rem;
  border: 1px solid #ccc;
  padding: 1.3rem;
  margin: 0 auto;
}
</style>
