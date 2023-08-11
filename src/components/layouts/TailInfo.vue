<template>
  <hr />
  <footer>
    <section class="footer-contents">
      <div class="left">
        <h3>2023 KYSA 전국 청년대회</h3>
      </div>
      <div class="right">
        <SocialGroup />
        <p class="contact">
          사이트 전반에 관련된 문의사항은 아래 개발자 연락처로 문의주시기 바랍니다.<br />
          <a :href="`mailto:${email}`">{{ email }}</a>
        </p>
      </div>
    </section>
    <section class="copyright">
      <span>Copyright © 2023 KYSA Group | All Rights Reserved.</span>
    </section>
  </footer>
</template>
<script lang="ts" setup>
import SocialGroup from '@/components/displays/SocialGroup.vue';

const email = 'kjunha77@gmail.com';
</script>
<style lang="scss" scoped>
hr {
  height: 2px;
  border: none;
  background-color: $primary;
  //background-image: linear-gradient(
  //  -45deg,
  //  #cc33cc 0%,
  //  #0000ee 25%,
  //  #33ff33 50%,
  //  #eeee00 75%,
  //  #cc3333 100%
  //);
}

.footer-contents {
  margin: 25px 65px;
  display: flex;

  div {
    flex: 1;
  }

  @include mobile {
    margin: 15px 0;
    display: block;
    div {
      flex: none;
    }
  }

  .left {
    display: flex;
    align-items: center;
    @include mobile {
      justify-content: center;
    }

    .logo {
      height: 35px;
    }

    img {
      margin-right: 16px;
    }
  }

  .right {
    height: 100%;
    text-align: right;
    @include mobile {
      text-align: center;
    }
  }

  .contact {
    margin: 0;
    text-align: right;
    line-height: 1.6;
    font-size: $font-sm;
    color: $gray-dark;
    @include mobile {
      text-align: center !important;
    }

    a {
      display: inline-flex;
      align-items: center;
      font-weight: 800;
      color: $success;

      &::before {
        // TODO: Dark Mode
        display: inline-block;
        content: '';
        background-image: url('@/assets/icons/i-msg-light.svg');
        background-size: cover;
        width: 12px;
        height: 12px;
        margin-right: 6px;
      }
    }
  }
}

.copyright {
  padding: 15px 0;
  background-color: $gray;
  color: $gray-dark;
  font-weight: 200;
  font-size: $font-sm;
  text-align: center;
}
</style>
