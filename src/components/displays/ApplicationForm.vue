<template>
  <form>
    <div class="row mb-3">
      <div class="col-sm mb-3">
        <label class="form-label">이름</label>
        <input v-model="register.name" class="form-control" type="text" />
      </div>
      <div class="col-sm">
        <label class="form-label">생년월일</label>
        <div class="d-flex justify-content-around">
          <select v-model="birth.yyyy" class="form-select" name="yyyy">
            <option value="" selected disabled>년도</option>
            <option>1993</option>
          </select>
          <select v-model="birth.mm" class="form-select" name="mm">
            <option value="" selected disabled>월</option>
            <option>02</option>
          </select>
          <select v-model="birth.dd" class="form-select" name="dd">
            <option value="" selected disabled>일</option>
            <option>15</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <label class="form-label">이메일</label>
        <input
          v-model="register.email"
          class="form-control mb-3"
          type="text"
          placeholder="foo@example.com"
        />
        <div class="form-check">
          <input class="form-check-input" type="checkbox" />
          <label class="form-check-label form-text">
            이메일은 8월 31일까지 보관되며, 대회 필수정보 전달을 위해서만 사용됨을 동의합니다.
          </label>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <label class="form-label">성별</label>
      <div class="form-check">
        <input v-model="register.sex" class="form-check-input" type="radio" name="sex" value="m" />
        <label class="form-check-label">형제(남성)</label>
      </div>
      <div class="form-check">
        <input v-model="register.sex" class="form-check-input" type="radio" name="sex" value="f" />
        <label class="form-check-label">자매(여성)</label>
      </div>
      <p class="form-text">원활한 대회 운영 및 조 편성을 위해 필요한 정보입니다.</p>
    </div>
    <div class="row mb-3">
      <label class="form-label">회원 여부</label>
      <p>저는 예수그리스도 후기성도 교회의 회원입니다</p>
      <div class="form-check">
        <input
          v-model="register.isMember"
          class="form-check-input"
          type="radio"
          name="isMember"
          :value="true"
        />
        <label class="form-check-label">예</label>
      </div>
      <div class="form-check">
        <input
          v-model="register.isMember"
          class="form-check-input"
          type="radio"
          name="isMember"
          :value="false"
        />
        <label class="form-check-label">아니오</label>
      </div>
    </div>
    <div v-if="register.isMember" class="row mb-3">
      <div class="col-sm">
        <label class="form-label">소속</label>
        <div class="d-flex justify-content-around">
          <select v-model="origin.stake" class="form-select d-inline-block mr-3" name="stake">
            <option value="" selected disabled>스테이크</option>
            <option value="경기 스테이크">경기 스테이크</option>
          </select>
          <select v-model="origin.ward" class="form-select d-inline-block" name="ward">
            <option value="" selected disabled>와드</option>
            <option value="분당 와드">분당 와드</option>
          </select>
        </div>
      </div>
    </div>
    <div v-else class="row mb-3">
      <div class="col">
        <label class="form-label">소속</label>
        <p>거주지의 도/시/군/구를 입력해 주세요</p>
        <input
          v-model="register.geo"
          class="form-control"
          type="text"
          placeholder="경기도 성남시 분당구"
        />
      </div>
    </div>
    <div>
      <label>참여 날짜 선택</label>
      <input type="checkbox" />
      <label>전체 참석</label>
      <button>8월 25일</button>
      <button>8월 26일</button>
      <button>8월 27일</button>
      <br />
      <label>선택하신 날짜는 아래와 같습니다.</label>
      <p>8월 25~27일 (전체기간)</p>
    </div>
    <div class="row">
      <div class="col mb-3">
        <label class="form-label">정보확인 동의</label>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" />
          <label class="form-check-label">
            위 정보를 2023 전국 청년대회에 제공하는 것을 동의합니다.
          </label>
        </div>
      </div>
      <button class="btn btn-lg btn-primary" type="button" @click="submit">등록하기</button>
    </div>
  </form>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import type { Register } from '@/types/Register.type';
import { useRegisterStore } from '@/stores/Register.store';

const registerStore = useRegisterStore();
const register = ref<Register>({
  email: '',
  name: '',
  dob: '',
  sex: 'm',
  contact: '',
  geo: '',
  isMember: false,
  joins: [],
});
const birth = ref({
  yyyy: '',
  mm: '',
  dd: '',
});
const birthString = computed(() => {
  if (birth.value.yyyy && birth.value.mm && birth.value.dd) {
    return `${birth.value.yyyy}-${birth.value.mm}-${birth.value.dd}`;
  }
  return '';
});
const origin = ref({
  stake: '',
  ward: '',
});
const originString = computed(() => {
  if (origin.value.stake && origin.value.ward) {
    return `${origin.value.stake} ${origin.value.ward}`;
  }
  return '';
});

function submit() {
  const contact = registerStore.register.contact;
  const regInfo = { ...register.value };
  regInfo.dob = birthString.value;
  regInfo.geo = originString.value;
  regInfo.contact = contact;
  registerStore.setRegister(regInfo);
  console.log(registerStore.register);
}
</script>
