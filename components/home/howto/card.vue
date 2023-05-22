<script setup>
// import { useImages } from '~/composables/useImages';
import { useAsset } from '~/composables/useAsset';
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div
    class="flex-1 p-4 md:p-6 space-y-4 mx-auto border border-primary-100 dark:border-secondary-100 rounded-xl max-w-md shadow-md hover:shadow-xl transition-all"
  >
    <img
      class="w-full h-32 object-contain"
      :src="useAsset(`images/${image}`)"
      :alt="title"
    />
    <div
      class="mb-4 flex items-center space-x-4 md:flex-col md:items-start md:space-x-0 md:space-y-4 lg:flex-row lg:items-start lg:space-y-0 lg:space-x-4"
    >
      <img class="w-8 h-8" :src="useAsset(`images/${icon}`)" :alt="title" />
      <h4>{{ title }}</h4>
    </div>
    <p>{{ description }}</p>
  </div>
</template>
