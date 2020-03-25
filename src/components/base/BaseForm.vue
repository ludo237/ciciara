<template>
  <form @submit.prevent="submitForm" role="form">
    <slot name="content" />

    <div class="flex justify-end mt-5">
      <SubmitButton :text="stateText" :icon="submitIcon" />
    </div>
  </form>
</template>

<script>
import SubmitButton from "@/components/buttons/SubmitButton.vue";

export default {
  name: "BaseForm",

  props: {
    submitText: String,

    submitIcon: String,
  },

  components: {
    SubmitButton
  },

  data: () => ({
    state: "idle",
  }),

  methods: {
    submitForm() {
      this.changeState("submitting");
      this.$emit("submit");
    },

    changeState(state) {
      this.state = state;
    }
  },

  computed: {
    stateText() {
      switch (this.state) {
        case "submitting":
          return "processing...";
        case "idle":
        default:
          return this.submitText;
      }
    }
  }
}
</script>
