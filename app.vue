<script setup>
useHead({
  htmlAttrs: {
    lang: 'hu',
  },
  charset: 'utf-8',
  title: 'PAKTUM',
  titleTemplate: (title) => (title !== 'PAKTUM' ? `${title} · PAKTUM` : title),
  // meta: [],
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
