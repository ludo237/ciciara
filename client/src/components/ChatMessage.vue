<template>
  <div class="flex items-start mb-4 text-sm">
    <div
      class="w-10 h-10 rounded mr-3 flex items-center justify-center text-3xl text-gray-500"
    >
      <BaseIcon icon="user" />
    </div>
    <div class="flex-grow overflow-hidden">
      <div class="flex justify-between">
        <span class="font-semibold">{ username }</span>
        <span class="text-gray-500 text-xs">11:46</span>
      </div>
      <p class="text-black leading-normal">
        The slack from the other side.
      </p>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon.vue";

export default {
  name: "ChatMessage",

  components: {
    BaseIcon
  }
};
</script>
