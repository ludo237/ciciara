<template>
  <div>
    <BaseInput
      name="message"
      v-model="message"
      placeholder="Write a message"
      @keyup.enter.native="sendMessage"
      required
    />
    <div
      class="h-4 w-full text-xs text-gray-600 italic leading-none capitalize"
    >
      <span v-text="typingText" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseInput from "@/components/base/BaseInput.vue";

export default {
  name: "ChatInput",

  components: {
    BaseInput,
  },

  data: () => ({
    message: "",
    typing: false,
    typingText: ""
  }),

  sockets: {
    typing(message) {
      this.typingText = message;
    }
  },

  methods: {
    sendMessage() {
      if (this.message.length > 0) {
        this.$socket.client.emit("message:sent", { user: this.user, message: this.message });
        this.message = "";
      }
    }
  },

  watch: {
    message(newValue, oldValue) {
      if (newValue.length === 0) {
        this.typing = false;
        this.$socket.client.emit("message:typing", { status: this.typing });
      }
      else if (newValue !== oldValue && !this.typing) {
        this.typing = true;
        this.$socket.client.emit("message:typing", { status: this.typing });
      }
    }
  },

  computed: {
    ...mapState(["user", "selectedRoom"])
  }
}
</script>
