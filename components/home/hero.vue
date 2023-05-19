<script setup></script>

<template>
  <div class="bg-accent-100 pt-20 pb-56 text-center">
    <div class="site-padding dark:text-primary-100 space-y-20">
      <h1 class="">
        Kösd meg bérleti szerződésed otthonról, gyorsan, egyszerűen
      </h1>
      <div
        class="inline-flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 pb-16"
      >
        <NuxtLink v-slot="{ navigate }" to="/contract/rental/step-2" custom>
          <button
            class="px-6 py-3 rounded-lg bg-white font-semibold text-primary-100 drop-shadow hover:bg-accent-300 hover:drop-shadow-md transition-all"
            @click="navigate"
          >
            Bérlői szerződés
          </button>
        </NuxtLink>

        <NuxtLink v-slot="{ navigate }" to="/contract/rental/step-2" custom>
          <button
            class="px-6 py-3 rounded-lg bg-primary-100 font-semibold text-white drop-shadow hover:bg-gray-800 hover:drop-shadow-md transition-all"
            @click="navigate"
          >
            Bérbeadó szerződés
          </button>
        </NuxtLink>
      </div>
    </div>
    <img
      src="~/assets/images/hero-illustrations.png"
      srcset=""
      alt=""
      class="w-full object-contain rounded-lg max-w-screen-xl mx-auto"
    />
  </div>
</template>
