<template>
  <BaseIcon size="xs" icon="circle" class="mr-1" :class="statusColor" />
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon.vue";

export default {
  name: "UserStatus",

  components: {
    BaseIcon
  },

  computed: {
    statusColor() {
      return ["text-green-500"];
    }
  }
};
</script>
