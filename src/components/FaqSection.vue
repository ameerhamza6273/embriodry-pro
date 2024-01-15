<!-- components/FAQ.vue -->
<template>
  <div class="bg-themebgcolor pb-20">
    <!-- service section -->
    <div class="faq-main md:pt-32 pt-16 md:h-[400px] h-[200px]">
      <h1
        class="font-bevietnam text-center font-bold md:text-5xl text-xl text-white"
      >
        FAQ’s
      </h1>
      <p
        class="font-bevietnam text-center md:text-lg text-sm text-white opacity-80 md:mt-4 mt-1 px-3"
      >
        We are here to help, drop us a line if you have any question
      </p>
    </div>
    <p
      class="font-bevietnam text-center px-2 mt-20 font-light text-base text-[#101928] opacity-80"
    >
      Our FAQ
    </p>
    <h1
      class="text-headingclr text-4xl font-bold font-bevietnam text-center mt-4"
    >
      Frequently Asked Questions
    </h1>
    <div class="max-w-[825px] mx-auto mt-16 px-3">
      <div
        v-for="(item, index) in faqData"
        :key="index"
        class="mb-3.5 pb-3.5 relative"
        :class="{ 'border-b': index <= 3 }"
      >
        <div>
          <div class="flex justify-between items-center">
            <button
              @click="toggleFAQ(index)"
              class="font-bold font-bevietnam text-headingclr text-xl text-left"
            >
              {{ item.question }}
            </button>
            <div>
              <span v-if="isOpen(index)"
                ><img src="Vector 819.png" alt="user" class="w-4"
              /></span>
              <span v-else
                ><img src="Vector 822.png" alt="user" class="w-4"
              /></span>
            </div>
          </div>
          <p
            v-if="isOpen(index)"
            class="text-black mt-2 font-bevietnam text-base opacity-90"
          >
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "faqSection",
  data() {
    return {
      openFAQs: [0], // Initialize with the index of the first item
      faqData: [
        {
          question: "Overview",
          answer:
            "Millions of individuals worldwide are aﬀected by the condition of hair loss.Hair loss can present itself in several diﬀerent forms, with male pattern baldness (androgenetic alopecia) being the most common amongst males (over 90% of cases).Male pattern baldness is a genetic type of hair loss that eﬀects two thirds of men by the age of 35.It is understood that thinning is generally perceived by the naked eye when density has decreased by approximately 50% in any speciﬁc area. This means that we lose a signiﬁcant amount of hair before we or others become aware of it, and this is exactly why early intervention is important and can be very eﬀective.",
        },
        {
          question: "Why do we lose hair?",
          answer: "You can install Tailwind CSS using npm or yarn.",
        },
        {
          question: "Can my loss be treated?",
          answer: "You can install Tailwind CSS using npm or yarn.",
        },
        {
          question: "Do side effects exist with these treatments?",
          answer: "You can install Tailwind CSS using npm or yarn.",
        },
        {
          question: "Where can i learn more about each treatment?",
          answer: "You can install Tailwind CSS using npm or yarn.",
        },
      ],
    };
  },
  methods: {
    isOpen(index) {
      return this.openFAQs.includes(index);
    },
    toggleFAQ(index) {
      if (this.isOpen(index)) {
        this.openFAQs = this.openFAQs.filter((i) => i !== index);
      } else {
        this.openFAQs.push(index);
      }
    },
  },
};
</script>

<style scoped>
/* Add any additional styling here */
.faq-main {
  background-image: url("/public/Rectangle 4821.png");
  background-position: bottom;
}
</style>
