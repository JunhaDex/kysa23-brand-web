<template>
  <form>
    <div class="form-group auth-grp">
      <label for="auth-phone">전화번호</label>
      <input
        v-model="phone"
        class="form-control"
        id="auth-phone"
        type="text"
        placeholder="010-1234-5432"
        :disabled="checkCode"
      />
      <div v-if="!checkCode" class="btn-grp">
        <button class="btn btn-primary" type="button" @click="sendCode">인증번호 전송</button>
      </div>
    </div>
    <transition name="slide-top" appear>
      <div v-if="checkCode" class="auth-grp auth-otp mt-3">
        <label for="auth-code">인증코드</label>
        <OtpInput
          v-model:value="code"
          class="otp-grp"
          id="auth-code"
          ref="otpInput"
          input-classes="otp-input"
          separator=""
          :num-inputs="OTP_LENGTH"
        />
        <div class="btn-grp">
          <button class="btn btn-primary" @click="confirmCode" :disabled="!codeFilled">
            인증번호 확인
          </button>
        </div>
      </div>
    </transition>
  </form>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { AuthService } from '@/services/Auth.service';
import OtpInput from 'vue3-otp-input';

const OTP_LENGTH = 6;
const emit = defineEmits(['verifyPhone']);
const phone = ref<string>('');
const code = ref<string>('');
const checkCode = ref<boolean>(false);
const codeFilled = ref<boolean>(false);
const otpInput = ref<InstanceType<typeof OtpInput> | null>(null);

let authSvc: AuthService;
onMounted(() => {
  authSvc = new AuthService();
});

watch(
  () => code.value,
  (newCode) => {
    codeFilled.value = newCode.length === OTP_LENGTH;
  }
);

function validatePhone(): boolean {
  return /^010-?([0-9]{4})-?([0-9]{4})$/.test(phone.value);
}

async function sendCode() {
  if (validatePhone()) {
    const phoneNumber = `+82 ${phone.value.slice(1)}`;
    await authSvc.signInPhone(phoneNumber);
    checkCode.value = true;
  } else {
    console.log('incorrect number');
  }
}

async function confirmCode() {
  await authSvc.confirmCode(code.value);
  return emit('verifyPhone', phone.value);
}
</script>
<style lang="scss">
@include slide-top(10px, 0.3s);
.auth-grp {
  margin: 0 auto;
  max-width: 21rem;
  box-sizing: border-box;

  .btn-grp {
    margin-top: 24px;
    text-align: center;
  }
}

.form-control {
  box-sizing: border-box;
}

.otp-grp {
  justify-content: center;

  div {
    margin-right: 0.5rem;

    &:last-child {
      margin-right: 0;
    }
  }
}

.otp-input {
  width: 2.5rem;
  height: 3rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  font-size: $font-xl;
  line-height: 1;
}
</style>
