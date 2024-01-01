<template>
  <div class="bg-themebgcolor">
    <!-- hero section image -->
    <img src="gallary.jpeg" alt="user" class="w-full md:h-[390px] h-[200px]" />
    <!-- service section -->
    <h1
      class="text-headingclr text-4xl font-bold font-bevietnam text-center mt-20"
    >
      Gallery
    </h1>
    <p
      class="font-bevietnam text-center max-w-[1200px] px-2 mx-auto mt-4 font-normal text-base text-textcolor"
    >
      Lorem ipsum dolor sit amet consectetur. Augue curabitur et elit fames
      faucibus eget maecenas egestas posuere. Lorem ipsum dolor sit amet
      consectetur. Augue curabitur et elit fames faucibus eget maecenas egestas
      posuere.
    </p>
    <!-- cards -->
    <div class="max-w-[1200px] mx-auto">
      <div
        class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-20 px-2 pb-20"
      >
        <div
          v-for="card in servises"
          :key="card.icon"
          class="bg-white rounded-xl p-3 shadow-xl"
        >
          <div class="px-3 py-2">
            <h2 class="text-xl font-bold font-bevietnam text-cardheadingclr">
              {{ card.title }}
            </h2>
          </div>
          <img :src="card.img" alt="user" class="mt-3 w-full" />
          <div class="flex justify-between mt-4 mb-2">
            <h3 class="text-cardheadingclr font-bevietnam font-bold text-xl">
              {{ card.priceTitle }}
            </h3>
            <p class="text-[#D90A06] font-bevietnam font-bold text-xl">
              {{ card.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gallarypageSections",
  data() {
    return {
      servises: [
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
      ],
    };
  },
};
</script>
