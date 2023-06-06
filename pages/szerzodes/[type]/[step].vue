<script setup>
import contractRenter from '~/assets/szerzodes-berleti.json';
import contractTenant from '~/assets/szerzodes-berbeado.json';
import { INSPECT_MAX_BYTES } from 'buffer';

definePageMeta({
  layout: 'default',
  key: (route) => route.fullPath,
});

const route = useRoute();
const type = computed(() => route.params.type || 'berleti');

// return contract based on type
const contract = computed(() => {
  if (type.value === 'berleti') {
    return contractRenter;
  }
  return contractTenant;
});

// contract h1 title
const contractTitle = computed(() => contract.value.name);

// contract steps
const steps = computed(() => {
  return contract.value.steps;
});

// contract single step by ID
const step = computed(() => {
  return steps.value.find((step) => step.id == route.params.step);
});

const currentIndex = computed(() => {
  return steps.value.findIndex((step) => step.id == route.params.step);
});

const hasNextItem = computed(() => {
  return currentIndex.value < steps.value.length - 1;
});

const hasPreviousItem = computed(() => {
  return currentIndex.value > 0;
});

const nextStep = computed(() => {
  if (hasNextItem.value) {
    const nextSlug = steps.value[currentIndex.value + 1].id;
    return nextSlug;
  }
  return null;
});

const previousStep = computed(() => {
  if (hasPreviousItem.value) {
    const previousSlug = steps.value[currentIndex.value - 1].id;
    return previousSlug;
  }
  return null;
});

console.log(nextStep.value, previousStep.value);
</script>

<template>
  <section class="site-padding space-y-6 mb-16">
    <!-- header -->
    <StepHeader :title="contractTitle" />
    <!-- step-bar -->
    <StepProgress :steps="steps" />
    <!-- step content -->
    <StepContent :step="step" />

    <!-- <StepInput :step="step" /> -->

    <div class="text-left space-x-4">
      <!-- 2 NuxtLink components -->
      <NuxtLink
        v-if="previousStep"
        v-slot="{ navigate }"
        :to="`/szerzodes/${type}/${previousStep}`"
      >
        <button
          @click="navigate"
          class="inline-flex items-center bg-accent-100 text-primary-100 py-3 px-6 rounded-lg font-bold text-sm lg:text-base tracking-wide border-2 border-white hover:border-accent-100 hover:bg-white transition ease-in-out duration-250"
        >
          Előző
        </button>
      </NuxtLink>
      <NuxtLink
        v-if="nextStep"
        v-slot="{ navigate }"
        :to="`/szerzodes/${type}/${nextStep}`"
      >
        <button
          @click="navigate"
          class="inline-flex items-center bg-primary-200 text-secondary-100 py-3 px-6 rounded-lg font-bold text-sm lg:text-base tracking-wide border-2 border-white hover:text-primary-100 hover:border-primary-100 hover:bg-white transition ease-in-out duration-250"
        >
          Következő
        </button>
      </NuxtLink>
    </div>
    <!-- multi-step component -->
    <!-- <div>
      <FormKit type="form" :actions="true">
        <FormKit type="multi-step" tab-style="progress">
          <FormKit type="step" name="step1">
            <StepInput :step="step" />
          </FormKit>
          <FormKit type="step" name="step2"> valami </FormKit>
          <FormKit type="step" name="step3"> még valami </FormKit>
        </FormKit>
      </FormKit>
    </div> -->
  </section>
</template>
