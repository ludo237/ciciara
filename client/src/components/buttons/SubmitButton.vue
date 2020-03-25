<template>
  <BaseButton type="submit" :text="text" :icon="icon" />
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  name: "SubmitButton",

  props: {
    text: {
      type: String,
      default: "submit"
    },

    icon: String,
  },

  components: {
    BaseButton
  },
}
</script>
