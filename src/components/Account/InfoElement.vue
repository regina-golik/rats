<template>
  <div :class="$style.item">
    <div :class="$style.itemInfo">
      <div :class="$style.time">{{ item.time }}</div>
      <div :class="$style.num">{{ item.sum }}₽</div>
      <div :class="$style.reason">{{ item.reason }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
});
</script>

<style module lang="scss">
.item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  font-size: 16px;

  &:last-child {
    border-bottom: none;
  }
}

.itemInfo {
  margin: 0 auto;
  display: inline-flex;
  justify-content: space-between;
}

.num {
  width: 120px;
}
.time {
  width: 120px;
}
.reason {
  width: calc(100% - 240px);
}
@media screen and (max-width: 576px) {
  .info {
    padding: 20px;
  }
  .balance {
    font-size: 28px;
  }
}
</style>
