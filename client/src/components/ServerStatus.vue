<template>
  <div class="inline-flex items-center">
    <BaseIcon size="sm" icon="circle" class="mr-1" :class="statusColor" />
    <div class="text-gray-700 capitalize">
      <span class="mr-1">Server</span>
      <span v-text="statusText" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseIcon from "@/components/base/BaseIcon.vue";

export default {
  name: "ServerStatus",

  components: {
    BaseIcon
  },

  computed: {
    statusText() {
      return this.isCiciaraOnline
        ? "online"
        : "offline";
    },

    statusColor() {
      if (this.isCiciaraOnline) {
        return ["text-green-500"];
      }
      return ["text-gray-500"];
    },

    ...mapGetters(["isCiciaraOnline"])
  }
};
</script>
