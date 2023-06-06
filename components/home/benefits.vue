<script setup>
defineProps({
  benefits: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section
    class="text-primary-100 dark:text-secondary-100 site-padding mx-auto -m-32 mb-auto"
  >
    <div
      class="flex flex-col gap-y-2 items-start sm:flex-row sm:items-start rounded-xl border bg-white dark:bg-primary-100 dark:border dark:border-primary-200"
    >
      <div
        v-for="benefit in benefits"
        :key="benefit.title"
        class="flex-1 space-y-4 xl:flex flex-row xl:space-y-0 xl:space-x-3 p-6 md:p-7 xl:p-9"
      >
        <Icon
          size="40"
          :name="benefit.icon"
          class="shrink-0 text-warning-100"
        />
        <div class="space-y-2">
          <h3>{{ benefit.title }}</h3>
          <p>{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
