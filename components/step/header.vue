<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>
