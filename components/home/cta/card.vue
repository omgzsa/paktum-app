<script setup>
import IconCheckbox from '~/components/icons/IconCheckbox.vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="site-padding">
    <div class="cta-card -mt-32">
      <div class="cta-content">
        <div>
          <h3 class="text-primary-100 dark:text-secondary-100">{{ title }}</h3>
          <p class="text-primary-100 dark:text-secondary-100">
            {{ description }}
          </p>
        </div>
        <div>
          <span class="uppercase text-primary-300 text-xs md:text-sm line"
            >amit az ár tartalmaz</span
          >
        </div>
        <ul class="sm:flex sm:flex-row sm:flex-wrap">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="flex sm:w-1/2 gap-x-4 pb-4 pr-4 text-primary-100 dark:text-secondary-100"
          >
            <IconCheckbox class="shrink-0 w-5" />{{ item }}
          </li>
        </ul>
      </div>
      <div class="cta-sell">
        <p class="text-base md:text-xl font-bold">
          Bérleti szerződések, ügyvéd által hitelesítve, online már
        </p>
        <span class="block text-3xl md:text-4xl font-bold">20.000 Ft-tól</span>
        <NuxtLink v-slot="{ navigate }" to="/szerzodes/berbeado/step-1" custom>
          <button
            class="px-6 py-3 rounded-lg bg-primary-100 font-semibold text-white drop-shadow hover:text-primary-100 border border-primary-100 hover:bg-warning-100 hover:drop-shadow-md transition-all"
            @click="navigate"
          >
            Kérem a szerződésem
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
.cta-card {
  @apply flex flex-col sm:flex-row items-stretch mx-auto max-w-sm sm:max-w-full drop-shadow-md rounded-xl overflow-hidden;
}

.cta-content {
  @apply sm:w-4/6 px-6 py-6 lg:px-12 lg:py-10 space-y-6 bg-white dark:bg-primary-100;
}

.cta-sell {
  @apply sm:w-2/6 p-6 flex flex-col justify-center items-center space-y-8 bg-accent-100 text-primary-100 text-center;
}

.line {
  display: flex;
  align-items: center;
}

.line::after {
  content: '';
  flex: 1;
  margin-left: 1rem;
  border: 0.5px solid;
  max-width: 100%;
  opacity: 0.5;
}
</style>
