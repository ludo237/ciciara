<template>
  <label :for="name" class="block my-3">
    <span class="text-gray-600 capitalize" v-text="label || name" />

    <div class="relative mt-1">
      <div class="absolute h-full flex items-center justify-center">
        <div class="w-4 ml-3 text-gray-500">
          <BaseIcon :icon="icon" />
        </div>
      </div>
      <select
        :id="name"
        :value="value"
        class="form-select w-full pl-8 bg-gray-200 text-gray-500 focus:bg-white focus:text-gray-900"
        @change="$emit('input', $event.target.value)"
        :aria-required="required"
        :required="required"
        :aria-readonly="readonly"
        :readonly="readonly"
      >
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="optionKey(option)"
          v-text="optionLabel(option)"
        />
      </select>
    </div>

    <div v-if="helpText" v-text="helpText" class="text-xs text-gray-600" />
  </label>
</template>

<script>
export default {
  name: "BaseSelect",

  props: {
    name: {
      required: true,
      type: String
    },

    value: String,

    options: {
      required: true,
      type: Array
    },

    optionLabel: {
      type: Function,
      default(option) {
        if (typeof option === "object") {
          if (!option.hasOwnProperty(this.label)) {
            return console.warn("Default option.label missing on options", option);
          }
          return option[this.label];
        }
        return option;
      }
    },

    optionKey: {
      type: Function,
      default(option) {
        if (typeof option !== "object") {
          return option;
        }
        try {
          return option.id;
        } catch (e) {
          return console.warn("Default option.id missing on options", option, e);
        }
      }
    },

    label: String,

    icon: String,

    required: Boolean,

    readonly: Boolean,

    helpText: String
  },

  components: {
    BaseIcon: () => import(/* webpackChunkName: "base-icon" */ "@/components/base/BaseIcon.vue")
  }
};
</script>
