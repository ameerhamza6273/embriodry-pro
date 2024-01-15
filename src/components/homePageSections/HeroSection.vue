<template>
  <div>
    <!-- hero section image -->
    <carousel
      :autoplay="true"
      :dots="true"
      :center="true"
      :slideBy="1"
      :items="1"
      :nav="false"
      :loop="true"
    >
      <div
        class="main-img"
        v-for="(item, index) in carouselImages"
        :key="index"
      >
        <img :src="item.img" alt="user" class="w-full h-screen" />
      </div>
    </carousel>
    <!-- about section -->
    <h1
      class="text-headingclr text-4xl font-bold font-bevietnam text-center mt-16"
    >
      About
    </h1>
    <p
      class="font-bevietnam text-center max-w-[1200px] mx-auto mt-4 px-2 font-normal text-lg text-textcolor"
    >
      Lorem ipsum dolor sit amet consectetur. Augue curabitur et elit fames
      faucibus eget maecenas egestas posuere. Nunc adipiscing erat et rutrum
      mauris eros. Enim aliquet luctus lorem elit consequat eros congue tellus.
      Lacus augue metus praesent ultricies. Elit aliquam id posuere sed suscipit
      cras eget massa integer.
    </p>
    <div
      class="mt-20 grid lg:grid-cols-2 grid-cols-1 max-w-[1200px] mx-auto gap-10 px-2"
    >
      <div>
        <img src="image 35.png" alt="user" />
      </div>
      <div class="self-center">
        <div v-for="value in aboutBox" :key="value.icon" class="flex my-4">
          <img :src="value.icon" alt="user" class="h-7 mr-3 mt-1" />
          <p class="text-lg font-bevietnam">{{ value.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  name: "heroSection",
  components: { carousel },
  data() {
    return {
      carouselImages: [
        { img: "mainimage(2).jpeg" },
        { img: "mainimage(3).jpeg" },
        { img: "Rectangle 4817.png" },
      ],
      aboutBox: [
        {
          icon: "Group 1000002024.png",
          text: "Lorem ipsum dolor sit amet consectetur. Augue curabitur et elit fames faucibus eget maecenas egestas posuere.",
        },
        {
          icon: "Group 1000002024.png",
          text: "Lorem ipsum dolor sit amet consectetur. Augue curabitur et elit fames faucibus eget maecenas egestas posuere.",
        },
        {
          icon: "Group 1000002024.png",
          text: "Lorem ipsum dolor sit amet consectetur. Augue curabitur et elit fames faucibus eget maecenas egestas posuere.",
        },
        {
          icon: "Group 1000002024.png",
          text: "Lorem ipsum dolor sit amet consectetur. Augue curabitur et elit fames faucibus eget maecenas egestas posuere.",
        },
      ],
    };
  },
};
</script>
<style>
.owl-theme .owl-dots .owl-dot span {
  width: 35px !important;
  margin-top: -5px !important;
}
.owl-theme .owl-dots .owl-dot.active span {
  background-color: blue !important;
}
</style>
