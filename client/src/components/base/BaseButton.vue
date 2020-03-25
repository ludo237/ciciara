<template>
  <button
    :type="type"
    class="py-2 px-4 border rounded disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none"
    :class="variantButtonClasses"
    :aria-disabled="disabled"
    :disabled="disabled"
  >
    <div
      class="inline-flex items-center font-bold"
      :class="variantContentClassess"
    >
      <BaseIcon v-if="icon" :icon="icon" />
      <span
        class="capitalize"
        :class="{ 'ml-2': icon !== undefined }"
        v-text="text"
      />
    </div>
  </button>
</template>

<script>
export default {
  name: "BaseButton",

  props: {
    type: {
      type: String,
      default: "button"
    },

    icon: String,

    text: {
      required: true,
      type: String
    },

    variant: {
      type: String,
      default: "default"
    },

    disabled: Boolean
  },

  components: {
    BaseIcon: () => import(/* webpackChunkName: "base-icon" */ "@/components/base/BaseIcon.vue")
  },

  computed: {
    variantButtonClasses() {
      switch (this.variant) {
        case "orange":
        case "bad":
        case "warning":
          return ["bg-orange-500", "border-orange-600", "hover:bg-orange-600", "focus:border-orange-900"];
        case "red":
        case "danger":
          return ["bg-red-500", "border-red-600", "hover:bg-red-600", "focus:border-red-900"];
        case "green":
        case "success":
          return ["bg-green-500", "border-green-600", "hover:bg-green-600", "focus:border-green-900"];
        case "default":
        default:
          return ["bg-white", "border-gray-400", "hover:border-gray-500", "focus:border-gray-900"];
      }
    },

    variantContentClassess() {
      switch (this.variant) {
        case "green":
        case "success":
        case "red":
        case "danger":
          return ["text-gray-100"];
        case "default":
        default:
          return ["text-black"];
      }
    }
  }
}
</script>
