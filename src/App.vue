<template>
  <h1 class="text-3xl md:text-4xl font-bold text-center py-10 md:py-12 px-2">
    Hedge-Calculator: create your perfect hedge!
  </h1>
  <the-calculator />
</template>

<script>
import TheCalculator from './components/the-calculator.vue'

export default {
  name: 'App',
  components: {
    TheCalculator
  }
}
</script>

<style>
</style>
