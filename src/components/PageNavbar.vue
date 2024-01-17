<template>
  <div>
    <topbar :dialogBox="dialogBox" @closeDialog="closeModal" />
    <nav class="bg-navbgcolor fixed w-full z-20 lg:top-10 top-0 start-0">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3.5 lg:px-6 px-4"
      >
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="logo.svg" alt="user" class="md:w-44 w-36" />
        </a>
        <div class="block md:hidden ml-auto mr-4">
          <button
            class="bg-white font-bevietnam rounded px-3 py-1.5 flex text-[#244E6A] font-bold text-sm items-center hover:opacity-85"
            @click="toggle2"
          >
            <!-- , () -->
            Login<svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              class="ml-2"
            >
              <path
                d="M2.10413 5.92723L7.06748 10.5986C7.5566 11.059 8.31956 11.059 8.80868 10.5986L13.772 5.92723C14.0275 5.68682 14.0396 5.28486 13.7992 5.02943C13.5588 4.77399 13.1569 4.76181 12.9014 5.00222L7.93808 9.67361L2.97473 5.00222C2.7193 4.76181 2.31734 4.77399 2.07693 5.02943C1.83652 5.28486 1.8487 5.68682 2.10413 5.92723Z"
                fill="#244E6A"
              />
            </svg>
          </button>
        </div>
        <div class="">
          <button
            type="button"
            class="inline-flex font-bevietnam items-center p-2 w-10 h-10 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2"
            @click="toggle"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="#00A2D3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0"
          >
            <li v-for="value in pagesLinks" :key="value.title">
              <router-link
                :to="value.link"
                :class="{ 'border-b': $route.path === value.link }"
                class="block pt-2 mb-2 font-bevietnam font-normal text-white text-lg"
              >
                {{ value.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- mobile navbar -->
    <div
      class="w-full h-full fixed z-20 top-[65px] bg-navbgcolor md:hidden sm:block"
      v-if="isToggled"
    >
      <div class="px-4">
        <ul class="py-4 font-medium rounded-lg">
          <li v-for="value in pagesLinks" :key="value.title" @click="toggle">
            <router-link
              :to="value.link"
              :class="{ 'border-b': $route.path === value.link }"
              class="pt-2 mb-2 mx-2 font-bevietnam font-normal text-white inline-block text-lg"
            >
              {{ value.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import topbar from "./Topbar.vue";
export default {
  name: "PageNavbar",
  components: {
    topbar,
  },
  data() {
    return {
      dialogBox: false,
      isToggled: false,
      pagesLinks: [
        { title: "Home", link: "/" },
        { title: "Our Services", link: "/services" },
        { title: "Gallery", link: "/gallery" },
        { title: "Place Order", link: "/placeOrder" },
        { title: "FAQ’s", link: "/faq" },
        { title: "Contact Us", link: "/contact" },
      ],
    };
  },
  methods: {
    toggle() {
      this.isToggled = !this.isToggled;
    },
    toggle2() {
      this.dialogBox = !this.dialogBox;
    },
    closeModal() {
      this.dialogBox = false;
    },
  },
};
</script>
