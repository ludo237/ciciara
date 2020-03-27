<template>
  <div class="border-b flex px-6 py-2 items-center flex-none">
    <div class="flex flex-col">
      <h3 class="mb-1 font-extrabold">
        <span class="text-gray-800 capitalize"># {{ selectedRoom.name }}</span>
      </h3>
      <div class="flex items-stretch justify-between text-sm text-gray-600">
        <div class="mr-3 inline">
          <span v-text="selectedRoom.users.length" class="mr-1" />
          <BaseIcon icon="users" />
        </div>
        <span
          class="italic truncate capitalize"
          v-text="selectedRoom.description"
        />
      </div>
    </div>
    <div class="ml-auto hidden md:block"></div>
  </div>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon.vue";

import { mapState } from "vuex";

export default {
  name: "RoomHeader",

  components: {
    BaseIcon
  },

  computed: {
    ...mapState(["selectedRoom"])
  }
};
</script>
