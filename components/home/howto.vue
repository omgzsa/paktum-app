<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  howTo: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="space-y-8 py-16 site-padding">
    <h2 class="text-center">{{ title }}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <HomeHowtoCard
        v-for="step in howTo"
        :key="step.id"
        :title="step.title"
        :description="step.description"
        :icon="step.icon"
        :image="step.image"
      />
    </div>
  </section>
</template>
