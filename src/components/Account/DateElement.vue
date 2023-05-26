<template>
  <Accordion
    :title="dateInfo.date"
    :subtitle="showSubtitle ? '+' + sum + '₽' : ''"
    :openAll="!showSubtitle"
    :class="$style.accordion"
  >
    <InfoElement v-for="item in dateInfo.items" :item="item" />
  </Accordion>
</template>

<script setup lang="ts">
import InfoElement from "./InfoElement.vue";
import { Accordion } from "../../ui";
import { DataAccount } from "./types.ts";
import { PropType } from "vue";

const props = defineProps({
  dateInfo: {
    type: Object as PropType<DataAccount>,
    required: true,
  },
  showSubtitle: Boolean,
});

const sum = props.dateInfo
  ? props.dateInfo.items
      .map((item) => +item.sum)
      .reduce((sum, current) => {
        return +sum + +current;
      })
  : 0;
</script>

<style module lang="scss">
.accordion {
  margin: 20px 0;
}
</style>
