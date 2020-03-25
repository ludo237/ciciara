<template>
  <div class="border border-2 bg-white rounded">
    <div v-if="title" class="border-b px-3 py-2">
      <span class="text-2xl font-semibold" v-text="title" />
    </div>
    <div class="p-6">
      <slot name="body" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BasePanel",

  props: {
    title: String,
  }
}
</script>
