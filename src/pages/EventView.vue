<template>
  <main>
    <article class="event-main">
      <div class="content" :class="isResult ? 'after' : 'before'">
        <h2>참가신청 이벤트</h2>
        <hr />
        <div v-if="isResult" class="mt-3 content-res">
          <div class="congrats">당첨을 축하드립니다!</div>
          <h3>{{ couponData!.rank }}</h3>
          <div class="info">
            <img src="@/assets/images/trn_sample1.png" alt="event-image" />
            <p v-if="rankInNum === 1">청년대회 마스코트 "토로니" 키링</p>
            <p v-else-if="rankInNum === 2">청년대회 마스코트 "토로니" 그립톡</p>
            <p v-else-if="rankInNum === 3">청년대회 노트북 스티커 세트</p>
          </div>
          <ul>
            <li>상품 수령은 대회 당일 입소 상품수령 부스에서 진행됩니다.</li>
            <li>상품 수령시 당첨자 이름과 이메일을 확인 후 상품을 받으실 수 있습니다.</li>
            <li>
              그 외 다양한 청년대회 이벤트 정보는 청년대회 인스타그램을 통해 확인하실 수 있습니다.
            </li>
          </ul>
        </div>
        <div v-else class="content-before">
          <p>참가신청 쿠폰번호의 당첨여부를 확인해 보세요!</p>
          <form>
            <label>쿠폰번호</label>
            <input v-model="couponId" class="form-control mb-3" type="text" placeholder="eXamPle" />
            <div class="d-grid gap-2">
              <button
                class="btn btn-purple"
                type="button"
                @click="submit"
                :disabled="couponId.length === 0"
              >
                확인하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </article>
  </main>
  <ToastAlert
    v-if="showToast"
    type="danger"
    message="유효하지 않은 쿠폰번호 입니다!"
    @close-toast="showToast = false"
  />
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { CouponService } from '@/services/Coupon.service';
import { useUIStore } from '@/stores/UI.store';
import ToastAlert from '@/components/displays/ToastAlert.vue';

const uiStore = useUIStore();
const couponId = ref<string>('');
const isResult = ref<boolean>(false);
const showToast = ref<boolean>(false);
const couponData = ref<{ code: string; rank: string }>();
const rankInNum = computed((): number => {
  if (couponData.value) {
    return Number(couponData.value.rank.charAt(0));
  }
  return 0;
});
const cpnSvc = new CouponService();

onMounted(() => {
  uiStore.colorTheme = 'dark';
  console.log(uiStore.colorTheme);
});

async function submit() {
  try {
    couponData.value = await cpnSvc.searchCoupon(couponId.value);
  } catch (e) {
    showToast.value = true;
    return;
  }
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

.before {
  background-color: #dee5e5;
}

.after {
  background-image: linear-gradient(#fff, #7c65a9);
}

.content {
  width: 100%;
  box-sizing: border-box;
  border-radius: 0.475rem;
  border: 1px solid #ccc;
  padding: 1.3rem;
  margin: 0 auto;
  color: #000;

  h2 {
    text-align: center;
  }

  label {
    font-size: $font-sm;
  }

  .form-control:focus {
    border-color: #7c65a9;
    box-shadow: 0 0 0 0.25rem rgba(#7c65a9, 0.25);
  }
}

.content-res {
  .congrats {
    text-align: center;
    font-weight: bold;
    font-size: $font-md;
  }

  .info {
    text-align: center;
    font-weight: bold;
  }

  h3 {
    font-size: $font-xl;
    text-align: center;
    margin: 0.5rem auto;
    color: $primary;
  }

  img {
    width: 160px;
    height: 160px;
    margin: 0 auto;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 1rem;
      font-size: $font-sm;
    }
  }
}
</style>
