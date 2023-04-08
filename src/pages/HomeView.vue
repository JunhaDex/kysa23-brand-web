<template>
  <div class="bg-home"></div>
  <main>
    <article class="banner-home">
      <img
        class="logo"
        src="https://www.gstatic.com/webp/gallery3/5_webp_a.webp"
        alt="Brand Image"
      />
      <section class="contents">
        <h1>
          초대합니다! <br />
          2023 청년대회
        </h1>
        <p>
          봄이 그러나 딴은 비둘기, 지나고 봅니다. 이름과 어머니, 속의 까닭입니다. 시와 피어나듯이
          경, 다 내 하나에 릴케 별 이제 있습니다. 같이 차 이름자를 버리었습니다. 언덕 강아지, 지나고
          어머니, 별이 내일 별에도 이런 없이 까닭입니다.
        </p>
        <button class="btn btn-xlg btn-secondary">참가신청 하러가기</button>
      </section>
    </article>
    <article class="info-home">
      <h2>대회 참여정보</h2>
      <section class="dash">
        <div class="d-day">
          <img src="@/assets/icons/i-calendar-light.svg" alt="calendar-icon" />
          <span>
            대회 당일까지<br />
            <strong>D-120</strong>
          </span>
        </div>
        <div class="count">
          <img src="@/assets/icons/i-ticket-light.svg" alt="calendar-icon" />
          <span>
            참가 등록<br />
            <strong><em>+620</em> 명</strong>
          </span>
        </div>
      </section>
      <button class="btn btn-lg btn-warning">참가신청 바로가기</button>
    </article>
    <article class="boxes-home">
      <div class="info-box">
        <h3>대회 일시 및 장소</h3>
        <ul>
          <li>일시: 2023년 8월 25~27일</li>
          <li>장소: 천안상록리조트</li>
        </ul>
        <button>네이버지도 바로가기</button>
      </div>
      <div class="info-box">
        <h3>대회 일정표 구경하기</h3>
        <p>Notion 바로가기</p>
        <button>바로가기</button>
      </div>
      <div class="info-box">
        <h3>디스코드 참여하기</h3>
        <p>지금 바로 한국 청년독신 공식 디스코드 커뮤니티에 참여하세요!</p>
        <button>디스코드 바로가기</button>
      </div>
      <div class="info-box">
        <h3>참가신청 바로가기</h3>
        <p>지금 바로 참가신청하고 얼리버드 할인혜택 받기!</p>
        <button class="btn btn-primary">참가신청</button>
      </div>
    </article>
  </main>
</template>
<script lang="ts" setup>
import { RegisterService } from '@/services/Register.service';

async function save() {
  const regSvc = new RegisterService();
  await regSvc.uploadRegister({
    email: 'foo@example-com',
    name: 'foobar',
    dob: '1111',
    sex: 'f',
    contact: '2222',
    geo: '3333',
    isMember: false,
    joins: [11, 22, 33],
  });
}

async function call() {
  const regSvc = new RegisterService();
  await regSvc.getRegister('foo@example-com');
}
</script>
<style lang="scss" scoped>
$section-btw: 55px;

.bg-home {
  position: absolute;
  background-color: $gray;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 1020px;
}

.banner-home {
  position: relative;
  width: 100%;
  height: 1020px - $header-height;

  @include desktop {
    .contents {
      position: absolute;
      top: 45%;
      transform: translateY(-50%);
      width: 55%;
      box-sizing: border-box;
      margin-left: 5%;

      h1 {
        font-size: 3.5rem;
        margin-bottom: 0;
      }

      p {
        font-size: $font-lg;
      }
    }
    .logo {
      position: absolute;
      width: 40%;
      bottom: 15%;
      right: 7%;
    }
  }
}

.info-home {
  margin: $section-btw 0;

  h2 {
    font-size: $font-xl;
    text-align: center;
    margin: 0;
  }

  .dash {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 26px 0;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 270px;
      margin-right: 26px;

      img {
        width: 55px;
        height: 55px;
        margin-right: 12px;
      }

      span {
        font-size: $font-lg;
        font-weight: 200;
      }

      strong {
        font-size: $font-xl;
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
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1024px;
  margin: $section-btw auto;

  .info-box {
    width: 40%;
    max-width: 500px;
    height: 180px;
    margin-bottom: 55px;
    background-color: $gray;
  }
}
</style>
