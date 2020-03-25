<template>
  <label :for="name" class="block my-3">
    <span class="text-gray-600 capitalize" v-text="label || name" />

    <div class="relative mt-1">
      <div class="absolute h-full flex items-center justify-center" v-if="icon">
        <div class="w-4 ml-3 text-gray-500">
          <BaseIcon :icon="icon" />
        </div>
      </div>
      <input
        :id="name"
        :type="type"
        :value="value"
        :aria-required="required"
        :required="required"
        :aria-readonly="readonly"
        :readonly="readonly"
        class="form-input w-full bg-gray-200 text-gray-500 focus:bg-white focus:text-gray-900"
        :class="additionalClasses"
        @input="$emit('input', $event.target.value)"
      />
    </div>

    <div v-if="helpText" v-text="helpText" class="text-xs text-gray-600" />
  </label>
</template>

<script>

export default {
  name: "BaseInput",

  props: {
    type: {
      required: false,
      type: String,
      default: "text"
    },

    value: String,

    name: {
      required: true,
      type: String,
    },

    label: String,

    icon: String,

    required: Boolean,

    readonly: Boolean,

    helpText: String,
  },

  components: {
    BaseIcon: () => import(/* webpackChunkName: "base-icon" */ "@/components/base/BaseIcon.vue")
  },

  computed: {
    additionalClasses() {
      let classes = [];

      // if icon is present the cursor needs to be a bit padded out
      if (this.icon) {
        classes.push("pl-8");
      }

      return classes;
    }
  }
}
</script>
