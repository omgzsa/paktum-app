<script setup>
const route = useRoute();
</script>

<template>
  <div>{{ route.params.step }}</div>
</template>
