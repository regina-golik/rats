<template>
  <div :class="$style.item">
    <div :class="$style.itemInfo">
      <div :class="$style.element">
        <div :class="$style.time">{{ item.time }}</div>
        <div :class="$style.num">{{ item.sum }}₽</div>
      </div>
      <div :class="$style.element">
        <div :class="$style.reason">{{ item.reason }}</div>
        <div :class="$style.check" v-if="item?.images">
          <Modal text="Посмотреть чек">
            <Carousel :images="item?.images" />
          </Modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Modal } from "../../ui";
import Carousel from "./Carousel.vue";
import { PropType } from "vue";
import { DataAccountItem } from "./types.ts";

defineProps({
  item: Object as PropType<DataAccountItem>,
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
  width: 100%;
}
.element {
  display: inline-flex;

  &:nth-child(2) {
    width: calc(100% - 240px);
  }
}

.num {
  width: 120px;
}
.time {
  width: 120px;
}
.reason {
  width: 300px;
}
.check {
  font-size: 1rem;
  width: 140px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  cursor: pointer;
  color: gray;
  transition: color 0.1s;

  &:hover {
    color: #333;
  }
}
@media screen and (max-width: 992px) {
  .itemInfo {
    flex-direction: column;
    gap: 20px;
  }
  .element {
    width: 100%;

    &:nth-child(2) {
      justify-content: space-between;
      width: 100%;
    }
  }
  .reason {
    width: 200px;
  }
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
