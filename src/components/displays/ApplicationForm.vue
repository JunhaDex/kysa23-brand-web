<template>
  <form>
    <div>
      <label>이름</label>
      <input v-model="register.name" type="text" />
      <label>생년월일</label>
      <span>
        <select v-model="birth.yyyy" name="yyyy">
          <option value="" selected disabled>년도</option>
          <option>1993</option>
        </select>
        <select v-model="birth.mm" name="mm">
          <option value="" selected disabled>월</option>
          <option>02</option>
        </select>
        <select v-model="birth.dd" name="dd">
          <option value="" selected disabled>일</option>
          <option>15</option>
        </select>
      </span>
    </div>
    <div>
      <label>성별</label>
      <p>원활한 대회 운영 및 조 편성을 위해 필요한 정보입니다.</p>
      <input v-model="register.sex" type="radio" name="sex" value="m" />
      <label>형제(남성)</label>
      <input v-model="register.sex" type="radio" name="sex" value="f" />
      <label>자매(여성)</label>
    </div>
    <div>
      <label>이메일</label>
      <input v-model="register.email" type="text" placeholder="foo@example.com" />
      <br />
      <input type="checkbox" />
      <label>
        이메일은 8월 31일까지 보관되며, 대회 필수정보 전달을 위해서만 사용됨을 동의합니다.
      </label>
    </div>
    <div>
      <label>회원 여부</label>
      <p>저는 예수그리스도 후기성도 교회의 회원입니다</p>
      <input v-model="register.isMember" type="radio" name="isMember" :value="true" />
      <label>예</label>
      <input v-model="register.isMember" type="radio" name="isMember" :value="false" />
      <label>아니오</label>
    </div>
    <div>
      <label>소속</label>
      <select v-model="origin.stake" name="stake">
        <option value="" selected disabled>스테이크</option>
        <option value="경기 스테이크">경기 스테이크</option>
      </select>
      <select v-model="origin.ward" name="ward">
        <option value="" selected disabled>와드</option>
        <option value="분당 와드">분당 와드</option>
      </select>
    </div>
    <div>
      <label>소속</label>
      <p>거주지의 도/시/군/구를 입력해 주세요</p>
      <input v-model="register.geo" type="text" placeholder="경기도 성남시 분당구" />
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
    <div>
      <label>정보확인 동의</label>
      <input type="checkbox" />
      <label>
        위 정보를 모두 확인했으며, 상기내용을 2023 전국 청년대회에 제공하는 것을 동의합니다.
      </label>
      <button type="button" @click="submit">등록하기</button>
    </div>
  </form>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { Register } from '@/types/Register.type';
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
