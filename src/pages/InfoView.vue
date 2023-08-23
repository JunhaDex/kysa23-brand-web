<template>
  <main>
    <article class="event-main">
      <div class="content">
        <h2>대회 둘러보기</h2>
        <div class="wrapper">
          <div class="item">
            <label>조편성 및 방배정</label>
            <button class="btn btn-info btn-lg w-100" @click="linkTo('https://dash.kysa.page/')">
              조편성 / 방배정 확인
            </button>
          </div>
          <div class="item">
            <label>입소식</label>
            <button class="btn btn-outline-secondary btn-lg w-100" @click="blockMenu" disabled>
              대회 체크인
            </button>
          </div>
          <div class="item">
            <label>대회 시간표</label>
            <button
              class="btn btn-info btn-lg w-100"
              @click="
                linkTo(
                  'https://firebasestorage.googleapis.com/v0/b/kysa23-project.appspot.com/o/public%2F%E1%84%83%E1%85%A2%E1%84%92%E1%85%AC%20%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%91%E1%85%AD.png?alt=media&token=d23c1494-08bd-464a-ac5d-e4aac37593db'
                )
              "
            >
              대회 시간표 보기
            </button>
          </div>
          <div class="item">
            <label>앱 다운로드</label>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=app.kysa.daldal.daldal"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kysa23-project.appspot.com/o/public%2Fgoogle-play-kr.png?alt=media&token=2625e3dd-1d14-4868-ab55-62db071c1e4d"
                alt="google-banner"
                style="display: inline-block; width: 50%"
              />
            </a>
            <a target="_blank" href="https://apps.apple.com/kr/app/%EB%8B%AC%EB%8B%AC/id6451050932">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/kysa23-project.appspot.com/o/public%2Fapple-download-kr.png?alt=media&token=e1f258cd-04a3-41fc-9900-5598b5df4d51"
                alt="apple-banner"
                style="display: inline-block; width: 50%"
              />
            </a>
          </div>
        </div>
      </div>
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
import ToastAlert from '@/components/displays/ToastAlert.vue';
import { ref } from 'vue';
import type { ToastItem } from '@/types/UI.types';

const showToast = ref<boolean>(false);
const toastItem = ref<ToastItem>({
  type: 'danger',
  message: '',
});

function linkTo(link: string) {
  window.open(link, '_blank');
}

function blockMenu() {
  showToast.value = true;
  toastItem.value = {
    type: 'info',
    message: '아직 준비중인 메뉴입니다!',
  };
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
  background-color: #dee5e5;
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
}

.wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .item {
    margin-bottom: 16px;
    width: 100%;

    label {
      display: block;
      margin-bottom: 5px;
      font-size: $font-sm;
      font-weight: bold;
      color: $dark;
    }
  }

  .item:last-child {
    margin-bottom: 0;
  }
}
</style>
