<template>
  <div class="pt-16">
    <!-- contact hero us Section -->
    <contactHeroSection />
    <!-- contact form Section -->
    <contactFormSection />
    <!-- call to action Section -->
    <callToActionSection />
  </div>
</template>

<script>
import contactHeroSection from "@/components/contactPageSections/ContactHeroSection.vue";
import contactFormSection from "@/components/contactPageSections/FormSection.vue";
import callToActionSection from "@/components/CallToActionSection.vue";

export default {
  name: "contactUsPage",
  components: {
    contactHeroSection,
    contactFormSection,
    callToActionSection,
  },
  data() {
    return {
      //
    };
  },
};
</script>
