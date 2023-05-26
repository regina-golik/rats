<template>
  <div :class="$style.account">
    <h1>Фонд сообщества</h1>
    <div :class="$style.info">
      <div :class="$style.text">Баланс фонда</div>
      <div :class="$style.balance">7 845.25₽</div>
    </div>
    <div :class="$style.items">
      <Tabs :activeTab="activeTab" :tabs="tabs" @changeTab="changeTab" />
      <DateElement
        v-for="date in receipt"
        :dateInfo="date"
        :showSubtitle="true"
        v-show="activeTab === 0"
      />
      <DateElement
        v-for="date in debiting"
        :dateInfo="date"
        :showSubtitle="false"
        v-show="activeTab === 1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import DateElement from "../components/Account/DateElement.vue";
import { ref } from "vue";
import { Tabs } from "../ui";
import { receipt, debiting } from '../store/accounts.ts';

const activeTab = ref<string | number>(0);

function changeTab(tab: string | number) {
  activeTab.value = tab;
}

const tabs = [
  {
    title: "Поступления",
    value: 0,
  },
  {
    title: "Расходы",
    value: 1,
  },
  // {
  //   title: "Запланированные расходы",
  //   value: 2,
  // },
];
</script>

<style module lang="scss">
.account {
  margin: 40px 0;
}
.info {
  background-color: #b48ad0;
  padding: 40px;
  border-radius: 6px 6px 0 0;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.text {
  font-size: 2rem;
  font-weight: 600;
}

.balance {
  font-size: 4rem;
  font-weight: 600;
}

.items {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  padding: 20px 40px;
}

.item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  font-size: 16px;

  &:last-child {
    border-bottom: none;
  }
}

.itemInfo {
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
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
