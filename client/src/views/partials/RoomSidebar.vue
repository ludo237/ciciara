<template>
  <div
    class="bg-indigo-900 text-purple-400 flex-none w-64 pb-6 hidden md:block"
  >
    <div class="text-white mb-2 mt-3 px-4 flex justify-between">
      <div class="flex-auto">
        <h1 class="text-xl leading-4 mb-1 truncate">
          <span class="font-semibold uppercase">ciciara</span>
        </h1>
        <div class="flex items-center mb-6">
          <UserStatus />
          <span class="text-white opacity-50 text-sm" v-text="auth.username" />
        </div>
      </div>
      <div class="h-6 w-6 fill-current">
        <a class="text-white opacity-25 cursor-pointer hover:opacity-100">
          <BaseIcon icon="sign-out-alt" size="lg" />
        </a>
      </div>
    </div>
    <div class="mb-8">
      <div class="px-4 mb-2 text-white flex justify-between items-center">
        <div class="opacity-75">Rooms</div>
      </div>
      <div class="bg-teal-700 py-1 px-4">
        <span class="text-white capitalize"> # {{ selectedRoom.name }} </span>
      </div>
      <div class="py-1 px-4" v-for="(room, index) in otherRooms" :key="index">
        <span class="text-gray-300 capitalize"># {{ room.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BaseIcon from "@/components/base/BaseIcon.vue";
import UserStatus from "@/components/UserStatus.vue";

export default {
  name: "RoomSidebar",

  components: {
    BaseIcon,
    UserStatus
  },

  computed: {
    ...mapState(["auth", "selectedRoom"]),

    ...mapGetters(["otherRooms"])
  }
};
</script>
