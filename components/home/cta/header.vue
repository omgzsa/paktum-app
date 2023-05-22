<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="bg-primary-200 dark:bg-secondary-100 text-secondary-100 dark:text-primary-100 pt-20 pb-48"
  >
    <div class="site-padding space-y-2 text-center">
      <h2>{{ title }}</h2>
      <p>
        {{ content }}
      </p>
    </div>
  </div>
</template>
