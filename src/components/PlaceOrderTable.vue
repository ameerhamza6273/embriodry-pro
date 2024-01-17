<template>
  <div>
    <div class="mt-2">
      <h1 class="font-bold text-3xl font-bevietnam">My Orders</h1>
      <table class="min-w-full shadow mt-4">
        <thead class="bg-[#005C9A]">
          <tr class="p-10 text-white">
            <td class="pl-8 py-4 pt-6 text-sm font-bevietnam font-normal">
              ID
            </td>
            <td class="px-4 py-4 pt-6 text-sm font-bevietnam font-normal">
              NAME
            </td>
            <td class="px-4 py-4 pt-6 text-sm font-bevietnam font-normal">
              DATE
            </td>
            <td class="px-4 py-4 pt-6 text-sm font-bevietnam font-normal">
              AMOUNT
            </td>
            <td class="px-4 py-4 pt-6 text-sm font-bevietnam font-normal">
              ACTION
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index" class="border-b">
            <td class="pl-8 py-4 text-sm font-medium font-bevietnam">
              {{ item.column1 }}
            </td>
            <td class="pl-4 py-4 text-sm font-medium font-bevietnam">
              {{ item.column2 }}
            </td>
            <td class="pl-4 py-4 text-sm font-medium font-bevietnam">
              <span class="border-[#D9E0E9] border rounded shadow-sm p-1.5">
                {{ item.column3 }}</span
              >
            </td>
            <td class="pl-4 py-4 text-sm font-medium font-bevietnam">
              {{ item.column4 }}
            </td>
            <td class="pl-4 py-4">
              <img src="Group 66.png" alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    column1: "23342",
    column2: "Javed khaliq",
    column3: "15-01-2024",
    column4: "£50.00",
    column5: [
      {
        img1: "images",
      },
    ],
  },
  {
    column1: "23342",
    column2: "Javed khaliq",
    column3: "15-01-2024",
    column4: "£50.00",
    column5: [
      {
        img1: "images",
      },
    ],
  },
  {
    column1: "23342",
    column2: "Javed khaliq",
    column3: "15-01-2024",
    column4: "£50.00",
    column5: [
      {
        img1: "images",
      },
    ],
  },
  {
    column1: "23342",
    column2: "Javed khaliq",
    column3: "15-01-2024",
    column4: "£50.00",
    column5: [
      {
        img1: "images",
      },
    ],
  },
  {
    column1: "23342",
    column2: "Javed khaliq",
    column3: "15-01-2024",
    column4: "£50.00",
    column5: [
      {
        img1: "images",
      },
    ],
  },
  {
    column1: "23342",
    column2: "Javed khaliq",
    column3: "15-01-2024",
    column4: "£50.00",
    column5: [
      {
        img1: "images",
      },
    ],
  },
];
</script>

<style scoped>
.text-red-500 {
  color: red;
}
</style>
