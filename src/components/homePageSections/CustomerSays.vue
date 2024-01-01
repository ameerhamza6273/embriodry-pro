<template>
  <div class="bg-themebgcolor mt-20">
    <div class="max-w-[1200px] mx-auto py-16 px-2">
      <h1 class="text-headingclr text-4xl font-bold font-bevietnam text-center">
        What Our Customer’s Says About Us
      </h1>
      <img src="Group 9803.png" alt="user" class="mx-auto mt-8" />
      <div
        class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-20"
      >
        <div
          v-for="card in customerCards"
          :key="card.avatar"
          class="bg-white rounded-xl p-7 shadow-lg"
        >
          <img :src="card.avatar" alt="user" class="h-16" />
          <h2 class="text-xl font-bold font-bevietnam text-[#444444] mt-4">
            {{ card.name }}
          </h2>
          <img :src="card.rating" alt="user" class="mt-4" />
          <h2
            class="text-xl font-bold font-bevietnam text-[#444444] mt-6 max-w-[200px]"
          >
            {{ card.title }}
          </h2>
          <P class="font-bevietnam text-[#444444] text-base mt-2">{{
            card.text
          }}</P>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "serviseSection",
  data() {
    return {
      customerCards: [
        {
          avatar: "Ellipse 249.png",
          rating: "Group 9524.png",
          name: "Robyn",
          title: "I had a Fantastic experience with ...",
          text: "Lorem ipsum dolor sit amet consectetur. Laoreet tellus urna ac ullamcorper tortor vestibulum placerat quisque platea. At nibh dolor senectus egestas sed nisi elementum eu augue.",
        },
        {
          avatar: "Ellipse 249.png",
          rating: "Group 9524.png",
          name: "Robyn",
          title: "I had a Fantastic experience with ...",
          text: "Lorem ipsum dolor sit amet consectetur. Laoreet tellus urna ac ullamcorper tortor vestibulum placerat quisque platea. At nibh dolor senectus egestas sed nisi elementum eu augue.",
        },
        {
          avatar: "Ellipse 249.png",
          rating: "Group 9524.png",
          name: "Robyn",
          title: "I had a Fantastic experience with ...",
          text: "Lorem ipsum dolor sit amet consectetur. Laoreet tellus urna ac ullamcorper tortor vestibulum placerat quisque platea. At nibh dolor senectus egestas sed nisi elementum eu augue.",
        },
      ],
    };
  },
};
</script>
