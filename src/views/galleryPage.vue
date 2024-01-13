<template>
  <div class="pt-16 lg:pt-28">
    <!-- Gallary Section -->
    <gallarySection />
    <callToActionSection />
  </div>
</template>

<script>
import gallarySection from "@/components/GallarypageSections.vue";
import callToActionSection from "@/components/CallToActionSection.vue";
export default {
  name: "servicePage",
  components: {
    gallarySection,
    callToActionSection,
  },
  data() {
    return {
      //
    };
  },
};
</script>
