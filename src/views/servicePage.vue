<template>
  <div class="pt-16 lg:pt-28">
    <!-- hero section -->
    <heroSection />
    <!-- download section -->
    <downloadSection />
    <!-- call To Action section is here -->
    <callToActionSection />
  </div>
</template>

<script>
import heroSection from "@/components/servicePageSections/ServiceHero.vue";
import downloadSection from "@/components/servicePageSections/DownloadSection.vue";
import callToActionSection from "@/components/CallToActionSection.vue";

export default {
  name: "servicePage",
  components: {
    heroSection,
    downloadSection,
    callToActionSection,
  },
  data() {
    return {
      //
    };
  },
};
</script>
