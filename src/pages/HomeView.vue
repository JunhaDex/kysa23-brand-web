<template>
  <div>Home Background</div>
  <main>
    <article>
      <img src="https://www.gstatic.com/webp/gallery3/5_webp_a.webp" alt="Brand Image" />
      <section>
        <h1>Main Theme Message</h1>
        <p>
          Main Sub Title ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis egestas
        </p>
        <button>main action</button>
      </section>
    </article>
    <article>
      <hr />
      <h2>register information</h2>
      <section>
        <div>
          <span>logo</span>
          <span>text</span>
        </div>
        <div>
          <span>logo</span>
          <span>text</span>
        </div>
      </section>
      <button>main action</button>
    </article>
    <article>
      <div class="info-box">
        <p>some text</p>
        <button>action 1</button>
      </div>
      <div class="info-box">
        <p>some text</p>
        <button>action 2</button>
      </div>
      <div class="info-box">
        <p>some text</p>
        <button>action 3</button>
      </div>
      <div class="info-box">
        <p>some text</p>
        <button>action 4</button>
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
