<template>
  <div class="bg-themebgcolor mt-16">
    <div class="max-w-[1200px] mx-auto py-16 px-2">
      <h1 class="text-headingclr text-4xl font-bold font-bevietnam text-center">
        Our Services
      </h1>
      <p
        class="font-bevietnam text-center max-w-[1200px] mx-auto mt-6 font-normal text-base text-textcolor"
      >
        Lorem ipsum dolor sit amet consectetur. Augue curabitur et elit fames
        faucibus eget maecenas egestas posuere. Lorem ipsum dolor sit amet
        consectetur. Augue curabitur et elit fames faucibus eget maecenas
        egestas posuere.
      </p>
      <hr class="bg-[#CFCFCF] mt-10" />
      <div
        class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-20"
      >
        <div
          v-for="card in serviseCards"
          :key="card.icon"
          class="bg-white rounded-xl p-3 shadow-lg cursor-pointer"
          @click="$router.push('/services')"
        >
          <div class="flex justify-between px-3 py-2 items-center">
            <h2 class="text-xl font-bold font-bevietnam text-cardheadingclr">
              {{ card.title }}
            </h2>
            <img :src="card.icon" alt="user" class="h-14" />
          </div>
          <img :src="card.img" alt="user" class="mt-3 w-full" />
        </div>
      </div>
      <button
        class="bg-navbgcolor rounded px-4 py-2 flex text-white mx-auto mt-12 font-bold text-sm items-center hover:opacity-85"
        @click="$router.push('/services')"
      >
        View More<img src="Arrow 4.png" alt="user" class="ml-2 h-3.5" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "serviseSection",
  data() {
    return {
      serviseCards: [
        {
          icon: "Group 1000002025.png",
          title: "Embroidery Digitizing",
          img: "Rectangle 4806.png",
        },
        {
          icon: "Group 1000002025.png",
          title: "Embroidery Digitizing",
          img: "Rectangle 4808.png",
        },
        {
          icon: "Group 1000002025.png",
          title: "Embroidery Digitizing",
          img: "Rectangle 4810.png",
        },
        {
          icon: "Group 1000002025.png",
          title: "Embroidery Digitizing",
          img: "Rectangle 4812.png",
        },
      ],
    };
  },
};
</script>
