<!-- components/contact.vue -->
<template>
  <div class="bg-themebgcolor pb-20">
    <!-- service section -->
    <div class="contact-main md:pt-32 pt-16 md:h-[400px] h-[200px]">
      <h1
        class="font-bevietnam text-center font-bold md:text-4xl text-xl text-white"
      >
        Get in touch
      </h1>
      <p
        class="font-bevietnam text-center md:text-lg text-sm text-white opacity-80 md:mt-4 mt-1 px-3"
      >
        We are here to help, drop us a line if you have any question
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactHeroSection",
  data() {
    return {
      //
    };
  },
  methods: {},
};
</script>

<style scoped>
/* Add any additional styling here */
.contact-main {
  background-image: url("/public/Rectangle 4821 (1).png");
  background-position: bottom;
}
</style>
