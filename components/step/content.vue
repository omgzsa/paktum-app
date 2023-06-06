<script setup>
const props = defineProps({
  step: {
    type: Object,
    required: true,
  },
});

const stepTitle = computed(() => `${props.step.name} | ${props.step.title}`);
</script>

<template>
  <section class="mb-16">
    <div class="md:flex gap-x-8">
      <div class="space-y-6 flex-1">
        <h2 class="border-b-2 border-primary-100 pb-2 mb-2">
          {{ stepTitle }}
        </h2>
        <div v-for="question in step.decisions" :key="question.id">
          <h4 class="mb-2">{{ question.question }}</h4>
          <div
            v-for="decision in question.options"
            :key="decision.id"
            class="space-x-2"
          >
            <input
              type="radio"
              :name="decision.id"
              :id="decision.id"
              :value="decision.id"
            />
            <label :for="decision.id">{{ decision.label }}</label>
          </div>
        </div>
      </div>
      <div class="hidden md:block md:flex-1">
        <img
          :src="useAsset(`images/${step.contentImage}`)"
          alt=""
          class="p-6"
        />
      </div>
    </div>
  </section>
</template>
