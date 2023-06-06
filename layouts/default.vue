<script setup></script>

<template>
  <div class="h-full w-full grid">
    <NavBar />

    <div class="relative">
      <slot />
    </div>

    <Footer />
  </div>
</template>
