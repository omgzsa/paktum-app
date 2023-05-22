<script setup>
const ctaCard = {
  title: 'Választott bérleti szerződés',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam idam.',
  contains: [
    'Condimentum dui, ut vel faucibus',
    'Lorem ipsum dolor sit amet, consectetur adipiscing ',
    'Condimentum dui, ut vel faucibus ajgekhg adl',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus.',
  ],
};
</script>

<template>
  <section>
    <HomeCtaHeader
      title="Egyszerű és átlátható árazás"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus sed neque eu enim congue risus."
    />
    <HomeCtaCard
      :title="ctaCard.title"
      :description="ctaCard.description"
      :items="ctaCard.contains"
    />
  </section>
</template>
