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

<script setup>
import InfoElement from "./InfoElement.vue";
import { Accordion } from "../../ui";

const props = defineProps({
  dateInfo: Object,
  showSubtitle: Boolean,
});

const sum = props.dateInfo.items
  .map((item) => item.sum)
  .reduce((sum, current) => {
    return +sum + +current;
  });
</script>

<style module lang="scss">
.accordion {
  margin: 20px 0;
}
</style>
