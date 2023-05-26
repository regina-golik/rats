<template>
  <header :class="$style.header">
    <div :class="$style.container">
      <div :class="$style.title">
        Сообщество помощи брошенным и ненужным крысам
      </div>
    </div>
  </header>
</template>

<script lang="ts"></script>

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
  padding: 24px 16px;
  margin: 0 auto;
  width: 1600px;
  max-width: 90%;
}
@media screen and (max-width: 992px) {
  .title {
    font-size: 20px;
  }
}

</style>
