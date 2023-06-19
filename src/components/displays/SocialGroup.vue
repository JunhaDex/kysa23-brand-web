<template>
  <div class="shortcuts">
    <a href="https://instagram.com/2023_kysa?igshid=MzRlODBiNWFlZA==" target="_blank">
      <img src="@/assets/icons/i-insta-light.svg" alt="instagram link" />
    </a>
    <a href="https://www.churchofjesuschrist.org/?lang=kor" target="_blank">
      <img src="@/assets/icons/i-discord-light.svg" alt="discord link" />
    </a>
    <a
      href="https://kysa23-finance.notion.site/2023-2e75c081bf054430ab54e7fbd8e8b7f2"
      target="_blank"
    >
      <img src="@/assets/icons/i-notion-light.svg" alt="notion link" />
    </a>
    <a href="https://www.churchofjesuschrist.org/?lang=kor" target="_blank">
      <img src="@/assets/icons/i-web-light.svg" alt="church link" />
    </a>
    <a href="https://github.com/JunhaDex/kysa23-brand-web" target="_blank">
      <img src="@/assets/icons/i-github-light.svg" alt="church link" />
    </a>
  </div>
</template>
<style lang="scss" scoped>
.shortcuts {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 28px 0;
  @include mobile {
    justify-content: center !important;
  }

  a {
    margin-right: 32px;

    &:last-child {
      margin: 0;
    }
  }

  img {
    width: 32px;
    height: 32px;
  }
}
</style>
