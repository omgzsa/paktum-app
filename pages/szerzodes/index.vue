<script setup>
//
</script>

<template>
  <section class="site-padding grid place-items-center py-16 space-y-10">
    <!-- main title -->
    <h1>Válaszd ki a szerződésed!</h1>
    <!-- selection of contract type with 2 buttons -->
    <div
      class="inline-flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6"
    >
      <NuxtLink v-slot="{ navigate }" to="/szerzodes/berleti/1" custom>
        <button
          class="h-16 rounded-xl bg-gradient-to-r from-accent-100 via-warning-100 to-accent-100 p-1"
          @click="navigate"
        >
          <div
            class="flex h-full w-full rounded-lg items-center justify-center bg-white dark:bg-primary-200 back"
          >
            <span
              class="text-base font-black text-primary-100 dark:text-secondary-100 px-6 py-3"
            >
              Bérleti szerződés
            </span>
          </div>
        </button>
      </NuxtLink>

      <NuxtLink v-slot="{ navigate }" to="/szerzodes/berbeado/1" custom>
        <button
          class="h-16 rounded-xl bg-gradient-to-r from-accent-100 via-warning-100 to-accent-100 p-1"
          @click="navigate"
        >
          <div
            class="flex h-full w-full rounded-lg items-center justify-center bg-white dark:bg-primary-200 back"
          >
            <span
              class="text-base font-black text-primary-100 dark:text-secondary-100 px-6 py-3"
            >
              Bérbeadó szerződés
            </span>
          </div>
        </button>
      </NuxtLink>
    </div>
  </section>
</template>
