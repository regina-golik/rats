<template>
  <v-expansion-panels :class="$style.accordion" v-model="panels">
    <v-expansion-panel>
      <v-expansion-panel-title>
        <div :class="$style.header">
          <div :class="$style.title">{{ title }}</div>
          <div :class="$style.subtitle">{{ subtitle }}</div>
        </div>
        <template v-slot:actions="{ expanded }">
          <img
            src="/public/arrow.svg"
            :class="[$style.arrow, expanded ? $style.arrowUp : '']"
            alt="arrow"
          />
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <slot></slot>
      </v-expansion-panel-text>
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
.arrow {
  transform: rotate(0deg);
  transition: all 0.3s;
  width: 10px;
}
.arrowUp {
  transform: rotate(180deg);
}
@media screen and (max-width: 992px) {
  .accordion {
    :global {
      .v-expansion-panel-title:hover {
        background-color: #fff;
      }
    }
  }
}
@media screen and (max-width: 576px) {
  .title {
    font-size: 1.2rem;
  }
  .accordion {
    :global {
      .v-expansion-panel-title {
        padding: 16px 10px;
      }
    }
  }
}
</style>
