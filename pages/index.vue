<script setup>
// watch value if updated console.log its value
const value = ref();
watch(value, (val) => {
  console.log(val);
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
</script>

<template>
  <div>
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
    <div class="site-padding mt-16 flex flex-wrap justify-evenly gap-4">
      <div class="flex flex-col items-center gap-y-2 text-xs">
        <div class="w-10 h-10 rounded-lg bg-primary-100"></div>
        primary-100
      </div>
      <div class="flex flex-col items-center gap-y-2 text-xs">
        <div class="w-10 h-10 rounded-lg bg-primary-200"></div>
        primary-200
      </div>
      <div class="flex flex-col items-center gap-y-2 text-xs">
        <div class="w-10 h-10 rounded-lg bg-primary-300"></div>
        primary-300
      </div>
      <div class="flex flex-col items-center gap-y-2 text-xs">
        <div class="w-10 h-10 rounded-lg bg-secondary-100"></div>
        secondary-100
      </div>
      <div class="flex flex-col items-center gap-y-2 text-xs">
        <div class="w-10 h-10 rounded-lg bg-secondary-200"></div>
        secondary-200
      </div>
      <div class="flex flex-col items-center gap-y-2 text-xs">
        <div class="w-10 h-10 rounded-lg bg-secondary-300"></div>
        secondary-300
      </div>
      <div class="flex flex-col items-center gap-y-2 text-xs">
        <div class="w-10 h-10 rounded-lg bg-accent-100"></div>
        accent-100
      </div>
      <div class="flex flex-col items-center gap-y-2 text-xs">
        <div class="w-10 h-10 rounded-lg bg-accent-200"></div>
        accent-200
      </div>
      <div class="flex flex-col items-center gap-y-2 text-xs">
        <div class="w-10 h-10 rounded-lg bg-accent-300"></div>
        accent-300
      </div>
      <div class="flex flex-col items-center gap-y-2 text-xs">
        <div class="w-10 h-10 rounded-lg bg-warning-100"></div>
        warning-100
      </div>
    </div>
    <div class="site-padding space-y-10">
      <FormKit
        type="text"
        label="Name"
        validation="required|length:3"
        help="Enter your full name."
        :validation-messages="{
          required: 'Please enter your name.',
          length: 'Your name must be at least 3 characters long.',
        }"
      />

      <FormKit
        type="date"
        label="Birthday"
        validation="required|date_between:1990-01-01 00:00:00,1999-12-31 23:59:59"
        :validation-messages="{
          date_between: 'Only for those born in the 90s.',
        }"
        help="Enter your date of birth"
      />

      <!-- We override validation-visibility for the input below: -->
      <FormKit
        type="tel"
        label="Phone Number"
        placeholder="xxx-xxx-xxxx"
        validation="required|matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
        validation-visibility="live"
        help="What are your digits?"
      />

      <FormKit
        v-model="value"
        type="radio"
        label="Preferred transportation"
        :options="['E-Bike', 'E-Scooter', 'Electric car']"
      />

      <FormKit type="button" label="Lakástv." />

      <FormKit
        type="checkbox"
        label="Terms and Conditions"
        help="Do you agree to our terms of service?"
        name="terms"
        :value="true"
        validation="accepted"
        validation-visibility="dirty"
      />
    </div>
  </div>
</template>

<style scoped></style>
