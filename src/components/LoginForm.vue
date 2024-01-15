<template>
  <div class="">
    <section
      class="absolute max-w-[360px] min-w-[300px] bg-white p-6 border border-[#F2F6F7] top-11 right-14 rounded shadow-lg z-30"
    >
      <form>
        <label class="text-[#695564] text-sm font-normal font-bevietnam"
          >Email</label
        ><br />
        <input
          type="text"
          placeholder="Enter here"
          class="border font-bevietnam border-[#D0D5DD] rounded py-2 px-2 mt-1.5 mb-2 text-[#DBDBDB] text-sm font-normal w-full"
        /><br />
        <label class="text-[#695564] text-sm font-normal font-bevietnam"
          >Password</label
        ><br />
        <input
          type="text"
          placeholder="*******"
          class="border font-bevietnam border-[#D0D5DD] rounded py-2 px-2 mt-1.5 text-[#DBDBDB] text-sm font-normal w-full"
        /><br />
        <!-- <span class="mt-2 text-sm text-[#005C9A] font-light"
          >Forget Password</span
        > -->
        <button
          class="bg-navbgcolor font-bevietnam rounded text-white font-bold text-sm hover:opacity-85 w-full py-1.5 mt-5"
        >
          Login
        </button>
        <p
          class="text-center text-sm font-light text-[#333333] mt-2 font-bevietnam"
        >
          Don't have an account?<a
            class="text-[#005C9A] ml-1 font-semibold underline cursor-pointer"
            >Signup</a
          >
        </p>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "loginForm",
  data() {
    return {
      //
    };
  },
};
</script>
