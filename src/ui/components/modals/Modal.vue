<template>
  <span>
    {{ text }}
    <v-overlay
      activator="parent"
      :content-class="$style.content"
    >
      <v-card class="pa-2">
        <slot></slot>
      </v-card>
    </v-overlay>
  </span>
</template>

<script setup lang="ts">
defineProps({
  text: String,
});
</script>

<style module lang="scss">

.content {
  position: relative !important;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
</style>
