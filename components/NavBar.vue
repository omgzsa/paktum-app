<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <header>
    <nav class="flex items-center justify-between site-padding">
      <NuxtLink to="/" class="py-2">
        <img
          v-if="isDark"
          src="./../assets/images/logo/paktum-logo-white-green.png"
          alt="PAKTUM light logo"
          width="120"
          height="60"
          class="w-full h-8"
        />
        <img
          v-else
          src="./../assets/images/logo/paktum-logo-black-green.svg"
          alt="PAKTUM dark logo"
          width="120"
          height="60"
          class="w-full h-8"
        />
      </NuxtLink>
      <button
        @click="toggleDark()"
        class="text-primary-100 dark:text-secondary-100"
      >
        {{ !isDark ? 'Light' : 'Dark' }}
      </button>
    </nav>
  </header>
</template>
