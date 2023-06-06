<script setup>
definePageMeta({
  layout: 'default',
  title: 'PAKTUM | Kezdőoldal',
});
const benefits = [
  {
    title: 'Lorem impum',
    icon: 'ph:wallet-light',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id rhoncus aliquam.',
  },
  {
    title: 'Dolor sit',
    icon: 'ph:signature-light',
    description:
      'Lorem ipsum adipiscing elit. Sed euismod, adipiscing diam id rhoncus aliquam.',
  },
  {
    title: 'Amet',
    icon: 'ph:timer-light',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam idam.',
  },
];

const introList = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus.',
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus.',
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus.',
  },
];

const howTo = [
  {
    id: 1,
    icon: 'one.svg',
    image: 'valaszd-ki.svg',
    title: 'Válaszd ki a szerződés típusát',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus sed neque eu enim congue risus.',
  },
  {
    id: 2,
    icon: 'two.svg',
    image: 'szabd-igenyeidre.svg',
    title: 'Szabd igényeidre a szerződést',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus sed neque eu enim congue risus.',
  },
  {
    id: 3,
    icon: 'three.svg',
    image: 'ird-ala.svg',
    title: 'Írd alá és töltsd le a dokumentumot',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus sed neque eu enim congue risus.',
  },
];
</script>

<template>
  <section>
    <HomeHero
      title="Kösd meg bérleti szerződésed otthonról, gyorsan, egyszerűen"
    />
    <HomeBenefits :benefits="benefits" />
    <HomeIntro
      :intro-list="introList"
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit sagittis"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus sed neque eu enim congue risus."
    />
    <HomeCtaWrapper />
    <HomeHowto :how-to="howTo" title="Hogyan működik?" />
    <HomeCtaTwo />
  </section>
</template>
