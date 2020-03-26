<template>
  <div class="border-b flex px-6 py-2 items-center flex-none">
    <div class="flex flex-col">
      <h3 class="mb-1 font-extrabold">
        <span class="text-gray-800 capitalize"># {{ selectedRoom.name }}</span>
      </h3>
      <div class="text-sm truncate">
        <span
          class="text-gray-600 capitalize"
          v-text="selectedRoom.description"
        />
      </div>
    </div>
    <div class="ml-auto hidden md:block"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "RoomHeader",

  computed: {
    ...mapState(["selectedRoom"])
  }
};
</script>
