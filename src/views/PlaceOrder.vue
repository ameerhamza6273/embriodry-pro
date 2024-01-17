<template>
  <div class="pt-16 lg:pt-28">
    <div class="flex w-1000">
      <div class="" style="width: 19%">
        <placeOrderSidebar />
      </div>
      <div style="width: 81%" class="px-5 py-6">
        <placeOrderTable />
      </div>
    </div>
  </div>
</template>

<script>
import placeOrderSidebar from "@/components/PlaceOrderSidebar.vue";
import placeOrderTable from "@/components/PlaceOrderTable.vue";
export default {
  name: "placeOrder",
  components: {
    placeOrderSidebar,
    placeOrderTable,
  },
  data() {
    return {
      //
    };
  },
};
</script>
