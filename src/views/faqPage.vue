<template>
  <div class="pt-16 lg:pt-28">
    <!-- Gallary Section -->
    <FaqSection />
    <callToActionSection />
  </div>
</template>

<script>
import FaqSection from "@/components/FaqSection.vue";
import callToActionSection from "@/components/CallToActionSection.vue";

export default {
  name: "servicePage",
  components: {
    FaqSection,
    callToActionSection,
  },
  data() {
    return {
      //
    };
  },
};
</script>
