<script setup>
import { useDark } from '@vueuse/core';

const isDark = useDark();
</script>

<template>
  <div
    class="bg-secondary-100 dark:bg-primary-100 text-primary-100 dark:text-secondary-100 py-4"
  >
    <div class="site-padding flex justify-between items-center">
      <div>
        <NuxtLink to="/">
          <img
            v-if="isDark"
            src="./../assets/images/logo/paktum-logo-white-green.png"
            alt="PAKTUM light logo"
            width="120"
            height="60"
            class="h-8"
          />
          <img
            v-else
            src="./../assets/images/logo/paktum-logo-black-green.svg"
            alt="PAKTUM dark logo"
            width="120"
            height="60"
            class="h-8"
          />
        </NuxtLink>
      </div>

      <div class="flex space-x-4 items-center">
        <p>How it works</p>
        <p>Terms and Conitions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>

      <div class="flex space-x-2">
        <Icon name="fa6-brands:facebook" size="25" />
        <Icon name="fa6-brands:twitter" size="25" />
        <Icon name="fa6-brands:linkedin" size="25" />
        <Icon name="fa6-brands:square-instagram" size="25" />
      </div>
    </div>
  </div>
</template>
