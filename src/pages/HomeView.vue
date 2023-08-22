<template>
  <div class="bg-home" :class="{ dark: isDark }"></div>
  <main>
    <article class="banner-home">
      <svg
        v-if="layout !== 'mo'"
        class="frag frag-tl"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 875 210"
      >
        <path
          :fill="isDark ? '#022535' : '#87A68E'"
          fill-opacity="0.75"
          d="M0 0H875C875 0 638.021 316.108 415.625 172.66C193.229 29.2113 0 172.66 0 172.66V0Z"
        />
      </svg>
      <svg
        v-if="layout !== 'mo'"
        class="frag frag-tr"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 210 510"
      >
        <path
          :fill="isDark ? '#022535' : '#87A68E'"
          fill-opacity="0.75"
          d="M210 0L210 510C210 510 210 401.5 58.4841 255C-93.0318 108.5 97.7159 5.33973e-07 97.7159 5.33973e-07L210 0Z"
        />
      </svg>
      <img v-if="isDark" class="logo" src="@/assets/images/bg-obj-night.webp" alt="Brand Image" />
      <img v-else class="logo" src="@/assets/images/bg-obj-day.png" alt="Brand Image" />

      <svg
        class="frag frag-btm"
        v-if="layout !== 'mo'"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 125"
      >
        <path
          :fill="isDark ? '#022535' : '#87A68E'"
          fill-opacity="1"
          d="M0 125C0 125 513.5 -24.7603 960 50.1197C1406.5 125 1920 0 1920 0V125L0 125Z"
        ></path>
      </svg>
      <section class="contents">
        <h1>
          초대합니다! <br />
          2023 청년대회
        </h1>
        <p>
          2023년 청년대회가 곧 시작됩니다! <br />
          여러분의 많은 참여에 감사드립니다. <br />
          대회지에서 만나요!
        </p>
        <div class="d-grid gap-2 col-6" :class="{ 'mx-auto': layout === 'mo' }">
          <RouterLink class="btn btn-lg btn-purple" to="/info">대회 정보 확인</RouterLink>
        </div>
      </section>
    </article>
    <div class="info-wrap">
      <article class="info-home">
        <h2>대회 참여정보</h2>
        <section class="dash">
          <div class="d-day">
            <img :src="calIcon" alt="calendar-icon" />
            <span>
              대회 당일까지<br />
              <strong>D-{{ dDay }}</strong>
            </span>
          </div>
          <div class="count">
            <img :src="ticIcon" alt="calendar-icon" />
            <span>
              참가 등록<br />
              <strong
                ><em>{{ regCount }}</em> 명</strong
              >
            </span>
          </div>
        </section>
        <section>
          <p class="scripture my-5">
            <strong>
              주께서 힘을 주사 <br />
              다 그리스도의 기쁨 안에<br />
              삼키우게 하셨더라 <br />
            </strong>
            -앨마서 31:38-
          </p>
        </section>
        <button class="btn btn-lg btn-outline-warning" @click="goForm" disabled>참가신청 바로가기</button>
      </article>
    </div>
    <svg
      v-if="layout !== 'mo'"
      class="frag-md-btm"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 125"
    >
      <path
        :fill="isDark ? '#022535' : '#87A68E'"
        fill-opacity="1"
        d="M0 0H1920V93.717C1920 93.717 1720.5 0 1371 70.9385C1021.5 141.877 739.283 144.155 508.5 70.9385C277.717 -2.27784 0 82.0023 0 82.0023V0Z"
      />
    </svg>
    <article class="boxes-home">
      <div class="info-box bg-blue-slide" :class="`info-box-${isDark ? 'dark' : 'light'}`">
        <img src="@/assets/images/location-info.png" alt="location" />
        <div class="box-contents" @click="goMap">
          <h3 v-if="layout !== 'mo'">대회 일시 및 장소</h3>
          <ul>
            <li class="cal">8월 25~27일</li>
            <li class="loc">천안상록리조트</li>
          </ul>
          <a
            v-if="layout !== 'mo'"
            class="btn btn-primary btn-sm"
            href="https://naver.me/x9JzNkHW"
            target="_blank"
          >
            네이버지도 바로가기
          </a>
        </div>
      </div>
      <div class="info-box bg-blue-slide" :class="`info-box-${isDark ? 'dark' : 'light'}`">
        <div class="box-contents">
          <h3 v-if="layout === 'mo'">
            대회 일정표 <br />
            구경하기
          </h3>
          <h3 v-else>대회 일정표 구경하기</h3>
          <p v-if="layout !== 'mo'">Notion 바로가기</p>
          <button v-if="layout !== 'mo'" class="btn btn-primary btn-sm">바로가기</button>
        </div>
        <img src="@/assets/images/calendar-info.png" alt="location" />
      </div>
      <div class="info-box bg-orange-slide" :class="`info-box-${isDark ? 'dark' : 'light'}`">
        <img src="@/assets/images/discord-info.png" alt="location" />
        <div class="box-contents" @click="goDiscord">
          <h3>디스코드 참여하기</h3>
          <p v-if="layout !== 'mo'">지금 바로 한국 청년독신 공식 디스코드 커뮤니티에 참여하세요!</p>
          <button v-if="layout !== 'mo'" class="btn btn-info btn-sm" @click="goDiscord">
            디스코드 바로가기
          </button>
        </div>
      </div>
      <div
        class="info-box info-box-flex bg-orange-slide"
        :class="`info-box-${isDark ? 'dark' : 'light'}`"
      >
        <div class="box-contents" @click="goForm">
          <h3 :class="layout === 'mo' ? 'text-center' : ''">대회비 납부 안내</h3>
          <button v-if="layout !== 'mo'" class="btn btn-primary sm" @click="goForm">
            납부 안내
          </button>
        </div>
      </div>
    </article>
  </main>
</template>
<script lang="ts" setup>
import { useUIStore } from '@/stores/UI.store';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { unixDate, unixNow } from '@/utils';
import { RegisterService } from '@/services/Register.service';

const uiStore = useUIStore();
const calIcon = computed(() => uiStore.getImageName('calendar'));
const ticIcon = computed(() => uiStore.getImageName('ticket'));
const isDark = computed(() => uiStore.colorTheme === 'dark');
const layout = computed(() => uiStore.layout);
const EVENT_DAY = '2023-08-25';
const dDay = ref<string>('');
const regCount = ref<string>('');
const regSvc = new RegisterService();

const dDayInterval = setInterval(updateDday, 30000);
onMounted(() => {
  updateDday();
  updateCount();
});
onBeforeUnmount(() => {
  clearInterval(dDayInterval);
});

function updateDday() {
  const now = unixNow();
  const due = unixDate(EVENT_DAY);
  if (due - now > 0) {
    dDay.value = Math.ceil((due - now) / 86400).toString();
  } else {
    dDay.value = 'Today';
  }
}

function updateCount() {
  regSvc.getCount().then((count: number) => {
    regCount.value = count.toString();
  });
}

function goForm() {
  window.open('https://kysa23-finance.notion.site/2023-2e75c081bf054430ab54e7fbd8e8b7f2', '_blank');
}

function goMap() {
  window.open('https://discord.gg/v2Vd2kbDmk', '_blank');
}

function goDiscord() {
  window.open('https://discord.gg/v2Vd2kbDmk', '_blank');
}
</script>
<style lang="scss" scoped>
$section-btw: 55px;

.bg-home {
  position: absolute;
  background-image: url('@/assets/images/bg-hmg-day.png');
  background-position: left bottom;
  background-size: cover;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 1120px - $header-pc;
  @include mobile {
    background-image: url('@/assets/images/bg-hmg-day-mo.webp');
    height: calc(95vh - $header-mo);
    background-position: 33% 0;
  }
}

.dark {
  background-image: linear-gradient(rgba(#000, 0.2), rgba(#000, 0.2)),
    url('@/assets/images/bg-hmg-night.webp');
  background-repeat: no-repeat;
  background-size: cover;
  @include mobile {
    background-image: linear-gradient(rgba(#000, 0.2), rgba(#000, 0.2)),
      url('@/assets/images/bg-hmg-night-mo.webp');
  }
}

.banner-home {
  position: relative;
  width: 100%;
  height: 1120px - $header-pc;
  @include mobile {
    height: calc(95vh - $header-mo);
  }

  .frag {
    z-index: 1;
    position: absolute;

    &-btm {
      width: 100vw;
      bottom: 0;
      left: 0;
      @media (min-width: #{$pc-max}) {
        left: calc((100vw - $pc-max) * -1 / 2);
      }
    }

    &-tl {
      top: 0;
      left: 0;
      width: 27vw;
      @media (min-width: #{$pc-max}) {
        left: calc((100vw - $pc-max) * -1 / 2);
      }
    }

    &-tr {
      top: 0;
      right: 0;
      width: 8vw;
      @media (min-width: #{$pc-max}) {
        right: calc((100vw - $pc-max) * -1 / 2);
      }
    }
  }

  .logo {
    display: block;
    margin: $header-mo auto 0 auto;
    padding-top: 5%;
    box-sizing: border-box;
    height: 35%;
    @include desktop {
      margin-bottom: $header-mo;
    }
  }

  .contents {
    height: 65%;
    z-index: 3;
    text-align: center;
    @include tablet {
      padding: 0 10%;
    }
    @include mobile {
      padding: 0 5%;
    }

    h1 {
      font-size: 3.2rem;
      margin-top: 0;
      margin-bottom: 0;
    }

    p {
      font-size: $font-lg;
      text-align: left;
    }
  }

  @include desktop {
    .contents {
      position: absolute;
      top: 45%;
      transform: translateY(-50%);
      width: 45%;
      box-sizing: border-box;
      text-align: left;
      margin-left: 5%;
    }
    .logo {
      position: absolute;
      height: auto;
      max-width: 650px;
      width: 40%;
      bottom: 7%;
      right: 7%;
    }
  }
}

.info-wrap {
  background-color: var(--background-theme-color);
}

.info-home {
  box-sizing: border-box;
  padding: 3rem 0;

  h2 {
    font-size: $font-xl;
    text-align: center;
  }

  p {
    font-size: $font-lg;
    margin: 0 auto;
    max-width: $bp-tb;
    text-align: center;
    line-height: 2;

    strong {
      line-height: 1.5;
      font-size: 3.2rem;
      @include mobile {
        font-size: 2.3rem;
      }
    }
  }

  .dash {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 135px;
    margin: 0 auto;
    border-radius: 0.75rem;
    box-shadow: inset 3px 5px 10px #000;
    box-sizing: border-box;
    background-color: var(--background-color);
    @include tablet {
      width: 75%;
    }
    @include mobile {
      width: 90%;
    }

    @include mobile {
      width: 90%;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 270px;
      margin-right: 5rem;
      @include mobile {
        margin-right: 0;
      }

      img {
        width: 3.3rem;
        height: 3.3rem;
        margin-right: 12px;
      }

      span {
        font-size: $font-lg;
        font-weight: 200;
        @include mobile {
          font-size: $font-md;
        }
      }

      strong {
        font-size: $font-xl;
        @include mobile {
          font-size: $font-lg;
        }
      }
    }

    .count {
      em {
        font-style: normal;
        color: $success;
      }
    }

    div:last-child {
      margin: 0;
    }
  }

  .btn {
    display: block;
    margin: 0 auto;
  }
}

.boxes-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: $section-btw !important;
  margin-bottom: $section-btw !important;
  @include desktop {
    flex-direction: row;
  }
}
</style>
