<template>
  <v-carousel
    :show-arrows="images?.length > 1 ? 'hover' : false"
    :hide-delimiters="images?.length <= 1"
  >
    <v-carousel-item
      v-for="image in images"
      :key="image"
      :src="image"
      :cover="true"
    ></v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
defineProps({
  images: {
    type: Array<String>,
    required: true,
  },
});
</script>

<style module lang="scss"></style>
