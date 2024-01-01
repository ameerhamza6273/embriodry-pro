<template>
  <div>
    <nav class="bg-navbgcolor fixed w-full z-20 top-0 start-0">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 lg:px-6 px-4"
      >
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="logo.svg" alt="user" class="w-48" />
        </a>
        <div class="">
          <button
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2"
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
      class="w-full h-full fixed z-20 top-[80px] bg-navbgcolor md:hidden sm:block"
      v-if="isToggled"
    >
      <div class="px-4">
        <ul class="py-4 font-medium rounded-lg">
          <li v-for="value in pagesLinks" :key="value.title" @click="toggle">
            <router-link
              :to="value.link"
              class="block py-2 px-3 md:p-0 font-bevietnam font-normal text-white"
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
export default {
  name: "PageNavbar",
  data() {
    return {
      isToggled: false,
      pagesLinks: [
        { title: "Home", link: "/" },
        { title: "Our Services", link: "/services" },
        { title: "Gallery", link: "/gallery" },
        { title: "FAQ’s", link: "/faq" },
        { title: "Contact Us", link: "/contact" },
      ],
    };
  },
  methods: {
    toggle() {
      this.isToggled = !this.isToggled;
    },
  },
};
</script>
