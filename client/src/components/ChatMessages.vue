<template>
  <div class="px-6 py-4 flex-1 overflow-y-scroll">
    <ChatMessage
      v-for="(message, index) in roomMessages"
      :key="index"
      :message="message"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ChatMessage from "@/components/ChatMessage.vue";

export default {
  name: "ChatMessages",

  components: {
    ChatMessage
  },

  computed: {
    ...mapGetters(["roomMessages"])
  }
}
</script>
