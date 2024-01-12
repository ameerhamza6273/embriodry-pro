<template>
  <div>
    <nav
      class="bg-white fixed w-full z-40 top-0 start-0 py-1.5 lg:block hidden"
    >
      <div class="max-w-screen-xl mx-auto">
        <ul
          class="flex font-bold text-base text-[#244E6A] items-center max-w-[1015px] ml-auto"
        >
          <li class="px-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                class="inline mr-1 mt-[-4px]"
              >
                <path
                  d="M15.8021 11.7454C15.9188 12.0579 15.9871 12.3929 15.9975 12.7438C16 12.7771 16 12.8104 16 12.845C16 14.5871 14.5871 16 12.845 16C5.75083 16 0 10.2492 0 3.15458C0 1.41292 1.41292 0 3.15458 0C3.18958 0 3.22292 -5.32468e-08 3.25625 0.0025C3.60708 0.0129166 3.94333 0.0808333 4.25542 0.197917L5.44 5.32583C5.44 5.32833 5.43875 5.32958 5.43625 5.33083L3.26375 6.30708L3.2575 6.30958C4.25417 9.345 6.655 11.7454 9.69042 12.7425L9.69292 12.7358L10.6704 10.5625L15.8021 11.7454Z"
                  fill="#244E6A"
                />
              </svg>
              07940908052
            </a>
          </li>
          <li class="px-4 border-l border-[#244E6A]">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
                class="inline mr-1 mt-[-4px]"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.4615 1.28202H2.53178L8.60514 5.94634C8.83615 6.12346 9.1576 6.12346 9.38862 5.94634L15.4615 1.28202ZM1.28534 1.94366V12.8308H16.7084V1.94319L10.1721 6.96317C9.47905 7.49549 8.51423 7.49549 7.82119 6.96317L1.28534 1.94366ZM0 1.28202C0 0.573512 0.575425 -0.000976562 1.28534 -0.000976562H16.7084C17.4183 -0.000976562 17.9938 0.573512 17.9938 1.28202V12.8308C17.9938 13.5398 17.4183 14.1143 16.7084 14.1143H1.28534C0.575425 14.1143 0 13.5398 0 12.8308V1.28202Z"
                  fill="#244E6A"
                />
              </svg>
              info@thenationalmovers.co.uk
            </a>
          </li>
          <li class="px-4 border-l border-[#244E6A]">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="21"
                viewBox="0 0 14 21"
                fill="none"
                class="inline mr-1 mt-[-4px]"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.88235 21C7.95772 21 13.7647 10.866 13.7647 7C13.7647 3.13401 10.6834 0 6.88235 0C3.08133 0 0 3.13401 0 7C0 10.866 5.80699 21 6.88235 21ZM6.88603 10.0601C8.54897 10.0601 9.89706 8.68893 9.89706 6.99756C9.89706 5.30619 8.54897 3.93506 6.88603 3.93506C5.22308 3.93506 3.875 5.30619 3.875 6.99756C3.875 8.68893 5.22308 10.0601 6.88603 10.0601Z"
                  fill="#244E6A"
                />
              </svg>
              We operate all High Wycombe Areas, UK and Europe
            </a>
          </li>
          <li class="px-4">
            <button
              class="bg-navbgcolor rounded pl-2 pr-2 py-1 flex text-white font-bold text-sm items-center hover:opacity-85"
              v-on:click="show = !show"
            >
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
                  fill="#F2F2F2"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <!-- <loginForm v-if="showLogin" /> -->
    <section
      v-if="showLogin"
      class="absolute max-w-[360px] min-w-[300px] bg-white p-6 border border-[#F2F6F7] top-11 right-14 rounded shadow-lg z-30"
    >
      <form>
        <h1
          class="font-bold text-[#005C9A] text-center text-xl mt-[-10px] mb-1"
        >
          Sign Up
        </h1>
        <div class="border mb-2"></div>
        <label class="text-[#695564] text-sm font-normal">Username</label><br />
        <input
          type="text"
          placeholder="Username..."
          class="border border-[#D0D5DD] rounded py-2 px-2 mt-1.5 mb-2 text-[#DBDBDB] text-sm font-normal w-full"
        /><br />
        <label class="text-[#695564] text-sm font-normal">Email</label><br />
        <input
          type="email"
          placeholder="Email..."
          class="border border-[#D0D5DD] rounded py-2 px-2 mt-1.5 mb-2 text-[#DBDBDB] text-sm font-normal w-full"
        /><br />
        <label class="text-[#695564] text-sm font-normal">Password</label><br />
        <input
          type="text"
          placeholder="*******"
          class="border border-[#D0D5DD] rounded py-2 px-2 mt-1.5 text-[#DBDBDB] text-sm font-normal w-full"
        /><br />
        <!-- <span class="mt-2 text-sm text-[#005C9A] font-light"
            >Forget Password</span
          > -->
        <button
          class="bg-navbgcolor rounded text-white font-bold text-sm hover:opacity-85 w-full py-1.5 mt-5"
        >
          Signup
        </button>
        <p class="text-center text-sm font-light text-[#333333] mt-2">
          Already have an account?<a
            class="text-[#005C9A] ml-1 font-semibold underline cursor-pointer"
            @click="updateVariables(false, true)"
            >Login</a
          >
        </p>
      </form>
    </section>
    <section
      v-if="show"
      class="absolute max-w-[360px] min-w-[300px] bg-white p-6 border border-[#F2F6F7] top-11 right-14 rounded shadow-lg z-30"
    >
      <form>
        <h1
          class="font-bold text-[#005C9A] text-center text-xl mt-[-10px] mb-1"
        >
          Login
        </h1>
        <div class="border mb-2"></div>
        <label class="text-[#695564] text-sm font-normal">Email</label><br />
        <input
          type="text"
          placeholder="Enter here"
          class="border border-[#D0D5DD] rounded py-2 px-2 mt-1.5 mb-2 text-[#DBDBDB] text-sm font-normal w-full"
        /><br />
        <label class="text-[#695564] text-sm font-normal">Password</label><br />
        <input
          type="text"
          placeholder="*******"
          class="border border-[#D0D5DD] rounded py-2 px-2 mt-1.5 text-[#DBDBDB] text-sm font-normal w-full"
        /><br />
        <!-- <span class="mt-2 text-sm text-[#005C9A] font-light"
          >Forget Password</span
        > -->
        <button
          class="bg-navbgcolor rounded text-white font-bold text-sm hover:opacity-85 w-full py-1.5 mt-5"
        >
          Login
        </button>
        <p class="text-center text-sm font-light text-[#333333] mt-2">
          Don't have an account?<a
            class="text-[#005C9A] ml-1 font-semibold underline cursor-pointer"
            @click="updateLoginVariables(false, true)"
            >Signup</a
          >
        </p>
      </form>
    </section>
  </div>
</template>

<script>
// import loginForm from "./LoginForm.vue";
// import signupForm from "./SignupForm.vue";
export default {
  name: "topbar",
  components: {
    // loginForm,
    // signupForm,
  },
  data() {
    return {
      show: false,
      showLogin: false,
    };
  },
  methods: {
    updateVariables(firstValue, secondValue) {
      this.showLogin = firstValue;
      this.show = secondValue;
    },
    updateLoginVariables(firstValue, secondValue) {
      this.show = firstValue;
      this.showLogin = secondValue;
    },
  },
};
</script>
