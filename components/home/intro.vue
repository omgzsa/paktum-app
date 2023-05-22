<script setup>
import IconCheckbox from '~/components/icons/IconCheckbox.vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  introList: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="py-16">
    <div class="site-padding flex flex-row gap-x-6 items-center">
      <div class="hidden sm:block md:w-2/5">
        <img
          src="~/assets/images/szerzodes-illustration.png"
          srcset=""
          alt=""
          class="w-full h-80 object-contain"
        />
      </div>
      <div class="space-y-8 md:max-w-xl mx-auto px-6 md:px-0 md:w-3/5">
        <div class="space-y-4">
          <h2>{{ title }}</h2>
          <p>{{ content }}</p>
        </div>
        <ul class="space-y-4">
          <li v-for="item in introList" :key="item.id" class="flex gap-4">
            <IconCheckbox class="shrink-0 w-5" />{{ item.text }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
