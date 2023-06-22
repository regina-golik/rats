<template>
  <header :class="$style.header">
    <div :class="$style.container">
      <div :class="$style.image">
        <img
          src="/public/logo.png"
          alt="Логотип сообщества помощи брошенным и ненужным крысам"
        />
      </div>
      <div :class="$style.title">
        Сообщество помощи брошенным и ненужным крысам
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style module lang="scss">
.header {
  background-color: #fff;
}
.title {
  font-size: 24px;
  font-weight: 600;
  color: #666;
}
.container {
  padding: 0 16px;
  margin: 0 auto;
  width: 1600px;
  max-width: 90%;
  display: flex;
  align-items: center;
  gap: 20px;
}
.image {
  width: 90px;
}
@media screen and (max-width: 992px) {
  .title {
    font-size: 20px;
  }
}
@media screen and (max-width: 768px) {
  .container {
    padding: 16px;
  }
  .image {
    width: 70px;
  }
  .title {
    width: calc(100% - 90px);
  }
}
@media screen and (max-width: 576px) {
  .container {
    gap: 10px;
  }
  .title {
    font-size: 18px;
    width: calc(100% - 80px);
  }
}
</style>
