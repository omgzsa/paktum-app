<script setup>
const benefits = [
  {
    title: 'Lorem impum',
    icon: 'ph:wallet-light',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id rhoncus aliquam.',
  },
  {
    title: 'Dolor sit',
    icon: 'ph:signature-light',
    description:
      'Lorem ipsum adipiscing elit. Sed euismod, adipiscing diam id rhoncus aliquam.',
  },
  {
    title: 'Amet',
    icon: 'ph:timer-light',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam idam.',
  },
];
</script>

<template>
  <div
    class="text-secondary-100 dark:text-primary-100 max-w-screen-xl px-4 sm:px-8 mx-auto -m-36 mb-auto"
  >
    <div
      class="flex flex-col gap-y-8 items-start sm:flex-row sm:items-start sm:gap-x-4 rounded-xl bg-primary-200 dark:bg-secondary-100 dark:border dark:border-primary-200"
    >
      <div
        v-for="benefit in benefits"
        :key="benefit.title"
        class="flex-1 space-y-4 xl:flex flex-row xl:space-y-0 xl:space-x-4 p-6 md:p-8 lg:p-10"
      >
        <Icon
          size="40"
          :name="benefit.icon"
          color="white dark:text-primary-300"
          class="shrink-0"
        />
        <div class="space-y-2">
          <h3>{{ benefit.title }}</h3>
          <p>{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
