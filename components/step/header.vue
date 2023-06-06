<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1 class="pt-10">{{ title }}</h1>
</template>
