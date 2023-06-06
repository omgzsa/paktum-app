<script setup>
//
</script>
<template>
  <section class="site-padding pb-16">
    <div
      class="bg-accent-100 flex items-center p-6 md:p-12 rounded-xl sm:gap-x-4 mx-auto"
    >
      <div class="space-y-6 text-center md:text-left">
        <h2>Az ügyvéd által hitelesített szerződésed már csak pár kattintás</h2>
        <div
          class="inline-flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6"
        >
          <NuxtLink v-slot="{ navigate }" to="/szerzodes/berleti/1" custom>
            <button
              class="px-6 py-3 rounded-lg bg-white font-semibold text-primary-100 drop-shadow hover:bg-accent-300 hover:drop-shadow-md transition-all"
              @click="navigate"
            >
              Bérlői szerződés
            </button>
          </NuxtLink>

          <NuxtLink v-slot="{ navigate }" to="/szerzodes/berbeado/1" custom>
            <button
              class="px-6 py-3 rounded-lg bg-primary-100 font-semibold text-white drop-shadow hover:bg-gray-800 hover:drop-shadow-md transition-all"
              @click="navigate"
            >
              Bérbeadó szerződés
            </button>
          </NuxtLink>
        </div>
      </div>
      <div class="hidden sm:block">
        <img :src="useAsset('images/cta-illustration.png')" alt="" />
      </div>
    </div>
  </section>
</template>
