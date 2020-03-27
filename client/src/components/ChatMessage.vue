<template>
  <div class="flex items-start mb-4 text-sm" :aria-describedby="message.id">
    <div
      class="w-10 h-10 rounded mr-3 flex items-center justify-center text-3xl text-gray-500"
    >
      <BaseIcon icon="user" />
    </div>
    <div class="flex-grow overflow-hidden">
      <div class="flex justify-between">
        <span class="text-gray-900 font-bold" v-text="message.user.username" />
        <span
          class="text-gray-500 text-xs"
          v-text="formattedDate"
          :title="message.created_at"
        />
      </div>
      <p class="text-gray-800 leading-normal" v-text="message.text"></p>
    </div>
  </div>
</template>

<script>
import { format, parseISO } from "date-fns";
import BaseIcon from "@/components/base/BaseIcon.vue";

export default {
  name: "ChatMessage",

  components: {
    BaseIcon
  },

  props: {
    message: {
      required: true,
      type: Object
    }
  },

  computed: {
    formattedDate() {
      const date = parseISO(this.message.created_at);

      return format(date, "kk:mm");
    }
  }
};
</script>
