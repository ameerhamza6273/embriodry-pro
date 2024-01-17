<template>
  <div>
    <aside
      class="w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full px-4 py-4 overflow-y-auto bg-gray-50">
        <ul class="space-y-2 font-medium pt-6">
          <li
            class="flex items-center cursor-pointer p-2 text-[#005C9A] font-bevietnam bg-white font-bold rounded hover:opacity-80 group"
            :class="{
              'border bg-[#005c9afc] text-white': activeItem === 'item1',
            }"
            @click="setActiveItem('item1')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
                :stroke="activeItem === 'item1' ? '#ffffff' : '#005C9A'"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 6H21"
                :stroke="activeItem === 'item1' ? '#ffffff' : '#005C9A'"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                :stroke="activeItem === 'item1' ? '#ffffff' : '#005C9A'"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="ml-2">Orders</span>
          </li>
          <li
            class="flex items-center cursor-pointer p-2 text-[#005C9A] font-bevietnam font-bold rounded bg-white hover:opacity-80 group"
            :class="{
              'border text-white bg-[#005c9afc]': activeItem === 'item2',
            }"
            @click="setActiveItem('item2')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21"
                :stroke="activeItem === 'item2' ? '#ffffff' : '#005C9A'"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                :stroke="activeItem === 'item2' ? '#ffffff' : '#005C9A'"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="ml-2">Account</span>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "placeOrderSidebar",
  data() {
    return {
      activeItem: "item1",
    };
  },
  methods: {
    setActiveItem(item) {
      this.activeItem = item;
    },
  },
};
</script>

<style>
.bg-\[\#005c9afc\] {
  background-color: #005c9afc !important;
}
</style>
