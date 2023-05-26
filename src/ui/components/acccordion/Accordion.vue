<template>
  <v-expansion-panels :class="$style.accordion" v-model="panels">
    <v-expansion-panel>
      <template #title>
        <div :class="$style.header">
          <div :class="$style.title">{{ title }}</div>
          <div :class="$style.subtitle">{{ subtitle }}</div>
        </div>
      </template>
      <template #text>
        <slot></slot>
      </template>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  title: String,
  subtitle: String,
  openAll: {
    type: Boolean,
    default: false,
  },
});

const panels = ref(props.openAll ? [0] : []);
</script>

<style module lang="scss">
.accordion {
  :global {
    .v-expansion-panel__shadow {
      box-shadow: 0 5px 8px 2px rgba(0, 0, 0, 0.08);
    }
  }
}
.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
}
.title {
  font-size: 1.6rem;
  font-weight: 600;
}
.subtitle {
  font-size: 1rem;
  font-weight: 400;
}
</style>
