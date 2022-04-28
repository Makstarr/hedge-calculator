<template>
  <button
    class="
      bg-green-500
      hover:bg-green-400
      text-white
      border border-green-500
      font-bold
      py-2
      px-4
      ml-4
      rounded
    "
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    handleClick: { type: Function, required: true },
    text: { type: String, required: true }
  }
}
</script>

<style>
</style>
