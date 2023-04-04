<template>
  <main>
    Home View
    <div>
      <button @click="save" type="button">save</button>
      <button @click="call" type="button">call</button>
    </div>
  </main>
</template>
<script lang="ts" setup>
import { RegisterService } from '@/services/Register.service'

async function save() {
  const regSvc = new RegisterService()
  await regSvc.uploadRegister({
    email: 'foo@example-com',
    name: 'foobar',
    dob: '1111',
    sex: 'f',
    contact: '2222',
    geo: '3333',
    isMember: false,
    joins: [11, 22, 33]
  })
}

async function call() {
  const regSvc = new RegisterService()
  await regSvc.getRegister('foo@example-com')
}
</script>
