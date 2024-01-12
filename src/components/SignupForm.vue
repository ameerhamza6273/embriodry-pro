<template>
  <div class="">
    <section
      class="absolute max-w-[360px] min-w-[300px] bg-white p-6 border border-[#F2F6F7] top-11 right-14 rounded shadow-lg z-30"
    >
      <form>
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
            >Login</a
          >
        </p>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "signupForm",
  data() {
    return {
      //
    };
  },
};
</script>
