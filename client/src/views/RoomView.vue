<template>
  <div class="font-sans antialiased h-screen flex">
    <RoomSidebar />
    <div class="flex-1 flex flex-col bg-white overflow-hidden">
      <RoomHeader />

      <Chat />
      <div class="px-4 flex-none">
        <BaseInput
          name="message"
          placeholder="Write a message"
          help-text="Someone is typing..."
        />
      </div>
    </div>
  </div>
</template>

<script>
import RoomSidebar from "@/views/partials/RoomSidebar.vue";
import RoomHeader from "@/views/partials/RoomHeader.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import Chat from "@/components/Chat.vue";

export default {
  name: "RoomView",

  components: {
    RoomSidebar,
    RoomHeader,
    BaseInput,
    Chat
  }
};
</script>
