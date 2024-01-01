<template>
  <div class="max-w-[1200px] mx-auto mb-8 px-2">
    <h1
      class="text-headingclr text-4xl font-bold font-bevietnam text-center mt-16"
    >
      Recent Work
    </h1>
    <p
      class="font-bevietnam text-center mt-5 font-normal text-base text-textcolor lg:px-6"
    >
      Lorem ipsum dolor sit amet consectetur. Quis purus viverra aliquet morbi
      elit magna luctus vulputate pretium. Gravida ultrices fermentum velit
      morbi viverra. Lorem ipsum dolor sit amet consectetur. Quis purus viverra
      aliquet morbi elit magna luctus vulputate pretium. Gravida ultrices
      fermentum velit morbi viverra.
    </p>
    <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-20 gap-8">
      <div
        v-for="card in recentCards"
        :key="card.icon"
        class="rounded-xl cursor-pointer"
        @click="$router.push('/gallery')"
      >
        <img
          :src="card.img"
          alt="user"
          class="mt-3 w-full shadow-lg rounded-2xl"
        />
        <div class="flex pt-4 items-center">
          <h3 class="text-sm font-bold font-bevietnam text-cardheadingclr">
            {{ card.title }}
          </h3>
          <img :src="card.icon" alt="user" class="h-5 ml-2" />
        </div>
      </div>
    </div>
    <button
      class="bg-navbgcolor rounded px-4 py-2 flex text-white mx-auto mt-20 font-bold text-sm items-center hover:opacity-85"
      @click="$router.push('/gallery')"
    >
      Know more about us<img src="Arrow 4.png" alt="user" class="ml-2 h-3.5" />
    </button>
  </div>
</template>

<script>
export default {
  name: "recentWorkSection",
  data() {
    return {
      recentCards: [
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
