<template>
  <img
    :src="src || './assets/logo.png'"
    :alt="alt"
    class="
      h-auto
      border
      bg-gray-50
      object-fit
      md:w-full md:object-contain
      object-top
      rounded
    "
  />
</template>

<script>
export default {
  name: 'TheCalculatorImage',
  props: {
    src: { type: String },
    alt: { type: String }
  }
}
</script>

<style>
</style>
