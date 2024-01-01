<template>
  <div id="app">
    <!-- navbar ie here -->
    <navbarPage />
    <!-- all pages data ie here -->
    <router-view />
    <!-- footer is here -->
    <pageFooter />
  </div>
</template>

<script>
import navbarPage from "./components/PageNavbar.vue";
import pageFooter from "./components/PageFooter.vue";
export default {
  components: {
    navbarPage,
    pageFooter,
  },
};
</script>
