<script setup>
defineProps({
  steps: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div
    class="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100"
  >
    <ol
      class="relative z-10 flex justify-between text-sm font-medium text-gray-500"
    >
      <li v-for="step in steps" class="flex items-center gap-2 bg-white p-2">
        <span
          class="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold"
        >
          <img :src="useAsset(`images/${step.image}`)" alt="" />
        </span>

        <span class="hidden sm:block"> {{ step.title }} </span>
      </li>
    </ol>
  </div>
</template>
