<script setup>
const props = defineProps({
  step: {
    type: Object,
    required: true,
  },
});

const optionsArr = computed(() => {
  return props.step.decisions.map((decision) => {
    return decision.options.map((option) => {
      return {
        label: option.label,
        value: option.isTrue,
      };
    });
  });
});

// console.log(optionsArr.value);
</script>

<template>
  <div v-for="(point, i) in step.decisions" :key="point.id">
    <FormKit
      type="radio"
      :label="point.question"
      validation="required"
      :options="optionsArr[i]"
    />
  </div>
</template>
