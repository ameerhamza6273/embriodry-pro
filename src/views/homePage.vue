<template>
  <div class="pt-16">
    <!-- hero section & about section -->
    <heroSection />
    <!-- servise section is here -->
    <serviseSection />
    <!-- Recent Work section is here -->
    <recentWorkSection />
    <!-- Customer Says section is here -->
    <customerSays />
    <!-- call To Action section is here -->
    <callToActionSection />
  </div>
</template>

<script>
import heroSection from "@/components/homePageSections/HeroSection.vue";
import serviseSection from "@/components/homePageSections/ServiseSection.vue";
import recentWorkSection from "@/components/homePageSections/RecentWorkSection.vue";
import customerSays from "@/components/homePageSections/CustomerSays.vue";
import callToActionSection from "@/components/CallToActionSection.vue";
export default {
  name: "homePage",
  components: {
    heroSection,
    serviseSection,
    recentWorkSection,
    customerSays,
    callToActionSection,
  },
  data() {
    return {
      //
    };
  },
};
</script>
