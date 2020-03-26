<template>
  <div class="font-sans antialiased h-screen flex">
    <RoomSidebar />
    <div class="flex-1 flex flex-col bg-white overflow-hidden">
      <RoomHeader />

      <ChatMessages />
      <div class="px-4 flex-none">
        <BaseInput
          name="message"
          v-model="message"
          placeholder="Write a message"
          help-text="Someone is typing..."
          @keyup.enter.native="sendMessage"
          required
        />
      </div>
    </div>
  </div>
</template>

<script>
import RoomSidebar from "@/views/partials/RoomSidebar.vue";
import RoomHeader from "@/views/partials/RoomHeader.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import ChatMessages from "@/components/ChatMessages.vue";
import { mapState } from 'vuex';

export default {
  name: "RoomView",

  components: {
    RoomSidebar,
    RoomHeader,
    BaseInput,
    ChatMessages
  },

  data: () => ({
    message: ""
  }),

  methods: {
    sendMessage() {
      this.$socket.client.emit("message_sent", { user: this.user, message: this.message });
      this.message = "";
    }
  },

  computed: {
    ...mapState(["user"])
  }
};
</script>
