<template>
  <div class="px-6 py-4 flex-1 overflow-y-scroll">
    <!-- A message -->
    <ChatMessage />
  </div>
</template>

<script>
import ChatMessage from "@/components/ChatMessage.vue";

export default {
  name: "Chat",

  components: {
    ChatMessage
  }
}
</script>
