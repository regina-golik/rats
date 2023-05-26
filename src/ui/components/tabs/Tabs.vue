<template>
  <div :class="$style.tabs">
    <div
      :class="[$style.tab, { [$style.activeTab]: activeTab === tab.value }]"
      @click="$emit('changeTab', tab.value)"
      v-for="tab in tabs"
      :key="tab.value"
    >
      {{ tab.title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TabItem } from "./types";

defineProps({
  activeTab: {
    type: [String, Number],
    required: true,
  },
  tabs: {
    type: Array<TabItem>,
    required: true,
  },
});

defineEmits<{
    (event: 'changeTab', tab: string | number): void;
}>();
</script>

<style lang="scss" module>
.tabs {
  display: inline-flex;
  justify-content: flex-start;
  margin-bottom: 2rem;
  border: 1px solid #ececec;
  border-radius: 6px;
  background-color: #fff;
}
.tab {
  cursor: pointer;
  font-size: 1.2rem;
  padding: 1rem;
  transition: background-color 0.1s linear;

  &:hover {
    background-color: rgba(230, 210, 174, 0.5);
  }
}
.activeTab {
  font-weight: 700;
}
</style>
