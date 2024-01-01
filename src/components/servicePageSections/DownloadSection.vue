<template>
  <div class="bg-themebgcolor mt-20">
    <div class="max-w-[1200px] mx-auto py-16 px-2">
      <h1 class="text-headingclr text-4xl font-bold font-bevietnam text-center">
        Download Test Design
      </h1>
      <p
        class="font-bevietnam text-center max-w-[1200px] mx-auto mt-6 font-normal text-base text-textcolor"
      >
        Lorem ipsum dolor sit amet consectetur. Quis purus viverra aliquet morbi
        elit magna luctus vulputate pretium. Gravida ultrices fermentum velit
        morbi viverra. Lorem ipsum dolor sit amet consectetur. Quis purus
        viverra aliquet morbi elit magna luctus vulputate pretium. Gravida
        ultrices fermentum velit morbi viverra.
      </p>
      <div
        class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-20"
      >
        <div
          v-for="card in downloadCards"
          :key="card.icon"
          class="bg-white rounded-xl shadow-lg"
        >
          <img :src="card.image" alt="user" class="w-full" />
          <div class="px-4 py-6 border-t">
            <div class="flex items-center">
              <h3 class="text-headingclr font-bevietnam text-base font-bold">
                {{ card.sizeTitle }}:
              </h3>
              <p class="text-headingclr font-bevietnam text-sm ml-1 font-light">
                {{ card.size }}
              </p>
            </div>
            <div class="flex items-center mt-3">
              <h3 class="text-headingclr font-bevietnam text-base font-bold">
                {{ card.stitchTitle }}:
              </h3>
              <p class="text-headingclr font-bevietnam text-sm ml-1 font-light">
                {{ card.stitch }}
              </p>
            </div>
            <div class="flex items-center mt-3">
              <h3 class="text-headingclr font-bevietnam text-base font-bold">
                {{ card.formatsTitle }}:
              </h3>
              <p class="text-headingclr font-bevietnam text-sm ml-1 font-light">
                {{ card.formats }}
              </p>
            </div>
            <div class="flex items-center mt-3">
              <h3 class="text-headingclr font-bevietnam text-base font-bold">
                {{ card.downlaodsTitle }}:
              </h3>
              <p class="text-headingclr font-bevietnam text-sm ml-1 font-light">
                {{ card.downlaods }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="bg-navbgcolor rounded px-4 py-2 flex text-white mx-auto mt-12 font-bold text-sm items-center hover:opacity-85"
      >
        View More<img src="Arrow 4.png" alt="user" class="ml-2 h-3.5" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "downloadSection",
  data() {
    return {
      downloadCards: [
        {
          image: "Rectangle 4811.png",
          sizeTitle: "Size",
          size: "H-30.46 W-20.37",
          stitchTitle: "Stitch",
          stitch: "88691",
          formatsTitle: "Formats",
          formats: "DST, EMB, PES, OFM",
          downlaodsTitle: "Downlaods",
          downlaods: "DST, EMB, PES, OFM",
        },
        {
          image: "Rectangle 4813 (3).png",
          sizeTitle: "Size",
          size: "H-30.46 W-20.37",
          stitchTitle: "Stitch",
          stitch: "88691",
          formatsTitle: "Formats",
          formats: "DST, EMB, PES, OFM",
          downlaodsTitle: "Downlaods",
          downlaods: "DST, EMB, PES, OFM",
        },
        {
          image: "Rectangle 4812.png",
          sizeTitle: "Size",
          size: "H-30.46 W-20.37",
          stitchTitle: "Stitch",
          stitch: "88691",
          formatsTitle: "Formats",
          formats: "DST, EMB, PES, OFM",
          downlaodsTitle: "Downlaods",
          downlaods: "DST, EMB, PES, OFM",
        },
        {
          image: "Rectangle 4814.png",
          sizeTitle: "Size",
          size: "H-30.46 W-20.37",
          stitchTitle: "Stitch",
          stitch: "88691",
          formatsTitle: "Formats",
          formats: "DST, EMB, PES, OFM",
          downlaodsTitle: "Downlaods",
          downlaods: "DST, EMB, PES, OFM",
        },
        {
          image: "Rectangle 4811.png",
          sizeTitle: "Size",
          size: "H-30.46 W-20.37",
          stitchTitle: "Stitch",
          stitch: "88691",
          formatsTitle: "Formats",
          formats: "DST, EMB, PES, OFM",
          downlaodsTitle: "Downlaods",
          downlaods: "DST, EMB, PES, OFM",
        },
        {
          image: "Rectangle 4813 (3).png",
          sizeTitle: "Size",
          size: "H-30.46 W-20.37",
          stitchTitle: "Stitch",
          stitch: "88691",
          formatsTitle: "Formats",
          formats: "DST, EMB, PES, OFM",
          downlaodsTitle: "Downlaods",
          downlaods: "DST, EMB, PES, OFM",
        },
        {
          image: "Rectangle 4812.png",
          sizeTitle: "Size",
          size: "H-30.46 W-20.37",
          stitchTitle: "Stitch",
          stitch: "88691",
          formatsTitle: "Formats",
          formats: "DST, EMB, PES, OFM",
          downlaodsTitle: "Downlaods",
          downlaods: "DST, EMB, PES, OFM",
        },
        {
          image: "Rectangle 4814.png",
          sizeTitle: "Size",
          size: "H-30.46 W-20.37",
          stitchTitle: "Stitch",
          stitch: "88691",
          formatsTitle: "Formats",
          formats: "DST, EMB, PES, OFM",
          downlaodsTitle: "Downlaods",
          downlaods: "DST, EMB, PES, OFM",
        },
      ],
    };
  },
};
</script>
