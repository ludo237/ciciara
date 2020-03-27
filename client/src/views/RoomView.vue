<template>
  <div class="font-sans antialiased h-screen flex">
    <RoomSidebar />
    <div class="flex-1 flex flex-col bg-white overflow-hidden">
      <RoomHeader />

      <ChatMessages />
      <div class="px-4 flex-none">
        <ChatInput />
      </div>
    </div>
  </div>
</template>

<script>
import RoomSidebar from "@/views/partials/RoomSidebar.vue";
import RoomHeader from "@/views/partials/RoomHeader.vue";
import ChatMessages from "@/components/ChatMessages.vue";
import ChatInput from "@/components/ChatInput.vue";

export default {
  name: "RoomView",

  components: {
    RoomSidebar,
    RoomHeader,
    ChatMessages,
    ChatInput
  }
};
</script>
